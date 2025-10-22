import React from 'react';
import { ArrowLeft, Trophy, Star, Target, Zap, Award } from 'lucide-react';
import { UserProgress, Achievement } from '../types';
import { achievements } from '../data/achievements';

interface AchievementsProps {
  progress: UserProgress;
  onBack: () => void;
}

export function Achievements({ progress, onBack }: AchievementsProps) {
  const unlockedAchievements = achievements.filter(achievement => 
    progress.achievements.includes(achievement.id)
  );
  
  const lockedAchievements = achievements.filter(achievement => 
    !progress.achievements.includes(achievement.id)
  );

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
            Conquistas
          </h1>
        </div>

        {/* Stats Overview */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Trophy className="w-6 h-6 text-yellow-600" />
              </div>
              <p className="text-2xl font-bold text-gray-800">{unlockedAchievements.length}</p>
              <p className="text-sm text-gray-600">Desbloqueadas</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-2xl font-bold text-gray-800">{progress.totalXP}</p>
              <p className="text-sm text-gray-600">XP Total</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Target className="w-6 h-6 text-orange-600" />
              </div>
              <p className="text-2xl font-bold text-gray-800">{progress.streak}</p>
              <p className="text-sm text-gray-600">Sequência</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <p className="text-2xl font-bold text-gray-800">
                {Math.round((unlockedAchievements.length / achievements.length) * 100)}%
              </p>
              <p className="text-sm text-gray-600">Completo</p>
            </div>
          </div>
        </div>

        {/* Unlocked Achievements */}
        {unlockedAchievements.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-500" />
              Conquistas Desbloqueadas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {unlockedAchievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="bg-white rounded-xl p-4 shadow-md border-l-4 border-yellow-500"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">{achievement.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{achievement.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-blue-500" />
                        <span className="text-sm font-medium text-blue-600">+{achievement.xpReward} XP</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Locked Achievements */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-gray-400" />
            Próximas Conquistas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {lockedAchievements.map((achievement) => (
              <div
                key={achievement.id}
                className="bg-gray-50 rounded-xl p-4 shadow-sm border-l-4 border-gray-300 opacity-75"
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center">
                    <span className="text-2xl grayscale">{achievement.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-600">{achievement.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">{achievement.description}</p>
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-gray-400" />
                      <span className="text-sm font-medium text-gray-500">+{achievement.xpReward} XP</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}