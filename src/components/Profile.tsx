import React, { useState } from 'react';
import { ArrowLeft, User, Star, Trophy, Target, Zap, Award, TrendingUp, Camera, Edit3 } from 'lucide-react';
import { UserProgress } from '../types';
import { subjects } from '../data/mockData';
import { levels, getLevelInfo } from '../data/levels';
import { ProgressBar } from './ProgressBar';

interface ProfileProps {
  progress: UserProgress;
  onBack: () => void;
}

export function Profile({ progress, onBack }: ProfileProps) {
  const [userName, setUserName] = useState('Estudante');
  const [userEmail, setUserEmail] = useState('estudante@exemplo.com');
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const totalQuestionsCompleted = Object.values(progress.subjects).reduce(
    (total, subject) => total + subject.questionsCompleted, 0
  );
  
  const averageAccuracy = Object.values(progress.subjects).reduce(
    (total, subject) => total + subject.accuracy, 0
  ) / 5;

  const globalLevelInfo = getLevelInfo(progress.totalXP);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Meu Perfil
          </h1>
        </div>

        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Avatar */}
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center overflow-hidden">
                {profileImage ? (
                  <img 
                    src={profileImage} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="w-12 h-12 text-white" />
                )}
              </div>
              <button
                onClick={() => document.getElementById('image-upload')?.click()}
                className="absolute -bottom-1 -right-1 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Camera className="w-4 h-4 text-white" />
              </button>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
            
            {/* User Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                {isEditing ? (
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="text-2xl font-bold text-gray-800 bg-transparent border-b-2 border-blue-500 outline-none"
                  />
                ) : (
                  <h2 className="text-2xl font-bold text-gray-800">{userName}</h2>
                )}
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Edit3 className="w-4 h-4 text-gray-500" />
                </button>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-lg font-semibold text-gray-700">
                  Nível {globalLevelInfo.level}
                </span>
                <span className="text-sm text-gray-500">
                  ({levels.find(l => l.level === globalLevelInfo.level)?.title || 'Iniciante'})
                </span>
              </div>
              
              {isEditing && (
                <div className="mb-3">
                  <input
                    type="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    className="text-sm text-gray-600 bg-transparent border-b border-gray-300 outline-none w-full max-w-xs"
                    placeholder="seu@email.com"
                  />
                </div>
              )}
              
              {/* Global XP Progress */}
              <div className="max-w-md">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">Progresso Global</span>
                  <span className="text-sm text-gray-500">
                    {progress.totalXP} / {progress.totalXP + globalLevelInfo.xpToNext} XP
                  </span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-400 to-purple-600 rounded-full transition-all duration-500"
                    style={{ width: `${globalLevelInfo.progress}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {globalLevelInfo.xpToNext > 0 ? `${globalLevelInfo.xpToNext} XP para o próximo nível` : 'Nível máximo atingido!'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 shadow-md text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-2">
              <Zap className="w-6 h-6 text-blue-500" />
            </div>
            <p className="text-2xl font-bold text-gray-800">{progress.totalXP}</p>
            <p className="text-sm text-gray-600">XP Total</p>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-md text-center">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-2">
              <Target className="w-6 h-6 text-green-500" />
            </div>
            <p className="text-2xl font-bold text-gray-800">{totalQuestionsCompleted}</p>
            <p className="text-sm text-gray-600">Questões</p>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-md text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-2">
              <Trophy className="w-6 h-6 text-yellow-500" />
            </div>
            <p className="text-2xl font-bold text-gray-800">{progress.achievements.length}</p>
            <p className="text-sm text-gray-600">Conquistas</p>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-md text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-2">
              <TrendingUp className="w-6 h-6 text-purple-500" />
            </div>
            <p className="text-2xl font-bold text-gray-800">{Math.round(averageAccuracy)}%</p>
            <p className="text-sm text-gray-600">Precisão</p>
          </div>
        </div>

        {/* Subject Progress */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-6 h-6 text-blue-500" />
            <h3 className="text-xl font-semibold text-gray-800">Progresso por Matéria</h3>
          </div>
          
          <div className="space-y-6">
            {subjects.map((subject) => {
              const subjectProgress = progress.subjects[subject.id];
              const levelInfo = levels.find(l => l.level === subjectProgress.level);
              
              return (
                <div key={subject.id} className="border border-gray-100 rounded-xl p-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 ${subject.color} rounded-xl flex items-center justify-center text-xl`}>
                      {subject.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">{subject.name}</h4>
                      <p className="text-sm text-gray-600">{levelInfo?.title || 'Iniciante'}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-800">Nível {subjectProgress.level}</p>
                      <p className="text-sm text-gray-500">{subjectProgress.accuracy}% precisão</p>
                    </div>
                  </div>
                  
                  <ProgressBar
                    current={subjectProgress.xp}
                    max={subjectProgress.xp + subjectProgress.xpToNextLevel}
                    level={subjectProgress.level}
                  />
                  
                  <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                    <span>{subjectProgress.questionsCompleted} questões completadas</span>
                    <span>{subjectProgress.correctAnswers} acertos</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Streak and Study Info */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-6 h-6 text-orange-500" />
            <h3 className="text-xl font-semibold text-gray-800">Estatísticas de Estudo</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-orange-50 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  🔥
                </div>
                <span className="font-semibold text-orange-800">Sequência de Estudos</span>
              </div>
              <p className="text-2xl font-bold text-orange-600">{progress.streak} dias</p>
              <p className="text-sm text-orange-700">
                {progress.streak > 0 ? 'Continue assim!' : 'Comece sua sequência hoje!'}
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  📅
                </div>
                <span className="font-semibold text-blue-800">Último Estudo</span>
              </div>
              <p className="text-lg font-bold text-blue-600">
                {progress.lastStudyDate ? new Date(progress.lastStudyDate).toLocaleDateString('pt-BR') : 'Nunca'}
              </p>
              <p className="text-sm text-blue-700">
                {progress.lastStudyDate === new Date().toDateString() ? 'Hoje' : 'Estude hoje para manter a sequência!'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}