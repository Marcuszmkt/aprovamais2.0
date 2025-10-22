import React from 'react';
import { X, Trophy } from 'lucide-react';
import { Achievement } from '../types';

interface AchievementModalProps {
  achievements: Achievement[];
  onClose: () => void;
}

export function AchievementModal({ achievements, onClose }: AchievementModalProps) {
  if (achievements.length === 0) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 animate-bounce">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Trophy className="w-6 h-6 text-yellow-500" />
            <h3 className="text-xl font-bold text-gray-800">Conquista Desbloqueada!</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        <div className="space-y-4">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4 border border-yellow-200">
              <div className="flex items-center gap-3">
                <div className="text-3xl">{achievement.icon}</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800">{achievement.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-medium">
                      +{achievement.xpReward} XP
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button
          onClick={onClose}
          className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl transition-colors"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}