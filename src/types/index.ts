export interface Question {
  id: string;
  subject: Subject;
  text: string;
  options: {
    letter: 'A' | 'B' | 'C' | 'D' | 'E';
    text: string;
  }[];
  correctAnswer: 'A' | 'B' | 'C' | 'D' | 'E';
  explanation?: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  level: number;
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  subjectPerformance: Record<Subject, { correct: number; total: number }>;
  answers: Record<string, 'A' | 'B' | 'C' | 'D' | 'E'>;
  xpEarned: number;
  levelUp?: boolean;
  newLevel?: number;
  achievementsUnlocked: Achievement[];
  quizLevel?: number;
}

export type Subject = 
  | 'mathematics' 
  | 'portuguese' 
  | 'human-sciences'
  | 'natural-sciences'
  | 'essay';

export interface SubjectInfo {
  id: Subject;
  name: string;
  icon: string;
  color: string;
  description: string;
}

export interface UserProgress {
  totalXP: number;
  subjects: Record<Subject, SubjectProgress>;
  achievements: string[];
  streak: number;
  lastStudyDate?: string;
}

export interface SubjectProgress {
  level: number;
  xp: number;
  xpToNextLevel: number;
  questionsCompleted: number;
  correctAnswers: number;
  accuracy: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  xpReward: number;
  condition: (progress: UserProgress) => boolean;
  unlocked?: boolean;
}

export interface Level {
  level: number;
  xpRequired: number;
  questionsUnlocked: number;
  title: string;
  description: string;
}