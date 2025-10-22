import { useState, useEffect } from 'react';
import { UserProgress, Subject, Achievement } from '../types';
import { achievements } from '../data/achievements';
import { getLevelInfo } from '../data/levels';

const STORAGE_KEY = 'aprova-plus-progress';

const initialProgress: UserProgress = {
  totalXP: 0,
  subjects: {
    mathematics: { level: 1, xp: 0, xpToNextLevel: 200, questionsCompleted: 0, correctAnswers: 0, accuracy: 0 },
    portuguese: { level: 1, xp: 0, xpToNextLevel: 200, questionsCompleted: 0, correctAnswers: 0, accuracy: 0 },
    'human-sciences': { level: 1, xp: 0, xpToNextLevel: 200, questionsCompleted: 0, correctAnswers: 0, accuracy: 0 },
    'natural-sciences': { level: 1, xp: 0, xpToNextLevel: 200, questionsCompleted: 0, correctAnswers: 0, accuracy: 0 },
    essay: { level: 1, xp: 0, xpToNextLevel: 200, questionsCompleted: 0, correctAnswers: 0, accuracy: 0 }
  },
  achievements: [],
  streak: 0,
  lastStudyDate: undefined
};

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(initialProgress);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const savedProgress = JSON.parse(saved);
        // Merge with initial progress to ensure all subjects exist
        const mergedProgress = {
          ...initialProgress,
          ...savedProgress,
          subjects: {
            ...initialProgress.subjects,
            ...savedProgress.subjects
          }
        };
        setProgress(mergedProgress);
      } catch (error) {
        console.error('Error loading progress:', error);
      }
    }
  }, []);

  const saveProgress = (newProgress: UserProgress) => {
    setProgress(newProgress);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
  };

  const updateSubjectProgress = (
    subject: Subject, 
    questionsAnswered: number, 
    correctAnswers: number
  ): { levelUp: boolean; newLevel: number; achievementsUnlocked: Achievement[] } => {
    const baseXP = 10; // Base XP per question
    const bonusXP = 5; // Bonus XP per correct answer
    const xpEarned = (questionsAnswered * baseXP) + (correctAnswers * bonusXP);
    
    const currentSubject = progress.subjects[subject];
    const newXP = currentSubject.xp + xpEarned;
    const newQuestionsCompleted = currentSubject.questionsCompleted + questionsAnswered;
    const newCorrectAnswers = currentSubject.correctAnswers + correctAnswers;
    const newAccuracy = (newCorrectAnswers / newQuestionsCompleted) * 100;
    
    const levelInfo = getLevelInfo(newXP);
    const levelUp = levelInfo.level > currentSubject.level;
    
    // Update streak
    const today = new Date().toDateString();
    const lastStudy = progress.lastStudyDate;
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    
    let newStreak = progress.streak;
    if (!lastStudy || lastStudy === today) {
      // Same day or first time
      newStreak = lastStudy === today ? progress.streak : progress.streak + 1;
    } else if (lastStudy === yesterday.toDateString()) {
      // Consecutive day
      newStreak = progress.streak + 1;
    } else {
      // Streak broken
      newStreak = 1;
    }

    const newProgress: UserProgress = {
      ...progress,
      totalXP: progress.totalXP + xpEarned,
      subjects: {
        ...progress.subjects,
        [subject]: {
          level: levelInfo.level,
          xp: newXP,
          xpToNextLevel: levelInfo.xpToNext,
          questionsCompleted: newQuestionsCompleted,
          correctAnswers: newCorrectAnswers,
          accuracy: Math.round(newAccuracy)
        }
      },
      streak: newStreak,
      lastStudyDate: today
    };

    // Check for new achievements
    const newAchievements: Achievement[] = [];
    achievements.forEach(achievement => {
      if (!progress.achievements.includes(achievement.id) && achievement.condition(newProgress)) {
        newAchievements.push(achievement);
        newProgress.achievements.push(achievement.id);
        newProgress.totalXP += achievement.xpReward;
      }
    });

    saveProgress(newProgress);
    
    return {
      levelUp,
      newLevel: levelInfo.level,
      achievementsUnlocked: newAchievements
    };
  };

  const resetProgress = () => {
    saveProgress(initialProgress);
  };

  return {
    progress,
    updateSubjectProgress,
    resetProgress
  };
}