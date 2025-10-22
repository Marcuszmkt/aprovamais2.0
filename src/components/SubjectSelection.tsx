import React from 'react';
import { ArrowLeft, Star } from 'lucide-react';
import { subjects } from '../data/mockData';
import { Subject, UserProgress } from '../types';
import { ProgressBar } from './ProgressBar';
import { levels } from '../data/levels';

interface SubjectSelectionProps {
  onSelectSubject: (subject: Subject) => void;
  onBack: () => void;
  progress: UserProgress;
}

export function SubjectSelection({ onSelectSubject, onBack, progress }: SubjectSelectionProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Escolha sua matéria
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {subjects.map((subject) => {
            const subjectProgress = progress.subjects[subject.id];
            const levelInfo = levels.find(l => l.level === subjectProgress.level);
            const isLocked = subjectProgress.level < 1; // All subjects start unlocked
            
            return (
              <button
                key={subject.id}
                onClick={() => !isLocked && onSelectSubject(subject.id)}
                className={`bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-left group ${
                isLocked ? 'opacity-50 cursor-not-allowed' : ''
              }`}
                disabled={isLocked}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 ${subject.color} rounded-2xl flex items-center justify-center text-2xl transform group-hover:scale-110 transition-transform`}>
                    {subject.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {subject.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {subject.description}
                    </p>
                    <div className="mt-3">
                      <ProgressBar
                        current={subjectProgress.xp}
                        max={subjectProgress.xp + subjectProgress.xpToNextLevel}
                        level={subjectProgress.level}
                      />
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{levelInfo?.title || 'Iniciante'}</span>
                        <span>{subjectProgress.questionsCompleted} questões</span>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}