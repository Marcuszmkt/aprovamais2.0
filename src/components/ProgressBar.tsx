import React from 'react';
import { Star } from 'lucide-react';

interface ProgressBarProps {
  current: number;
  max: number;
  level: number;
  className?: string;
}

export function ProgressBar({ current, max, level, className = '' }: ProgressBarProps) {
  const percentage = Math.min((current / max) * 100, 100);
  
  return (
    <div className={`${className}`}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 text-yellow-500" />
          <span className="text-sm font-medium text-gray-700">Nível {level}</span>
        </div>
        <span className="text-xs text-gray-500">{current}/{max} XP</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}