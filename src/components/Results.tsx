import React from 'react';
import { ArrowLeft, Trophy, Target, RefreshCw, TrendingUp, Star, Zap, Award } from 'lucide-react';
import { QuizResult, Subject, UserProgress } from '../types';
import { subjects } from '../data/mockData';

interface ResultsProps {
  result: QuizResult;
  subject: Subject;
  progress: UserProgress;
  onBack: () => void;
  onRetry: () => void;
}

export function Results({ result, subject, progress, onBack, onRetry }: ResultsProps) {
  // Safety checks for undefined props
  if (!result || !subject || !progress) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 flex items-center justify-center">
        <div className="text-center bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
          <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">⚠️</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Dados não encontrados
          </h3>
          <p className="text-gray-600 mb-6">
            Não foi possível carregar os resultados. Tente novamente.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
          >
            Voltar ao Início
          </button>
        </div>
      </div>
    );
  }

  const percentage = Math.round((result.correctAnswers / result.totalQuestions) * 100);
  const wrongAnswers = result.totalQuestions - result.correctAnswers;
  const quizLevel = result.quizLevel || 1;
  const subjectInfo = subjects.find(s => s.id === subject);
  const subjectProgress = progress.subjects[subject] || {
    level: 1,
    xp: 0,
    xpToNextLevel: 200,
    questionsCompleted: 0,
    correctAnswers: 0,
    accuracy: 0
  };
  
  const getPerformanceColor = (percent: number) => {
    if (percent >= 80) return 'text-green-500';
    if (percent >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getPerformanceMessage = (percent: number) => {
    if (percent >= 80) return 'Excelente! 🎉';
    if (percent >= 60) return 'Bom trabalho! 👏';
    if (percent >= 40) return 'Continue praticando! 💪';
    return 'Continue praticando! 💪';
  };

  const getMotivationalMessage = (percent: number) => {
    if (percent >= 80) return 'Você demonstrou excelente domínio da matéria!';
    if (percent >= 60) return 'Você está no caminho certo. Continue assim!';
    if (percent >= 40) return 'Bom progresso! Pratique mais para melhorar ainda mais.';
    return 'Não desanime! Cada erro é uma oportunidade de aprender.';
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
            Resultado do Simulado
          </h1>
        </div>

        {/* Main Result Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6 text-center">
          {/* XP and Level Info */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="bg-blue-50 rounded-xl px-4 py-2 flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-700">+{result.xpEarned} XP</span>
            </div>
            <div className="bg-yellow-50 rounded-xl px-4 py-2 flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium text-yellow-700">Nível {subjectProgress.level}</span>
            </div>
          </div>
          
          <div className="mb-6">
            <div className="w-24 h-24 mx-auto mb-4 relative">
              <div className="w-full h-full bg-gray-200 rounded-full"></div>
              <div 
                className="absolute inset-0 bg-blue-500 rounded-full transition-all duration-1000 ease-out"
                style={{
                  background: `conic-gradient(#3B82F6 ${percentage * 3.6}deg, #E5E7EB 0deg)`
                }}
              ></div>
              <div className="absolute inset-3 bg-white rounded-full flex items-center justify-center">
                <span className={`text-2xl font-bold ${getPerformanceColor(percentage)}`}>
                  {percentage}%
                </span>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {getPerformanceMessage(percentage)}
            </h2>
            <p className="text-gray-600">
              Você acertou {result.correctAnswers} de {result.totalQuestions} questões
            </p>
            
            {result.levelUp && (
              <div className="mt-4 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Award className="w-6 h-6 text-yellow-600" />
                  <span className="text-lg font-bold text-yellow-800">PARABÉNS!</span>
                </div>
                <p className="text-yellow-800 font-medium text-center">
                  Parabéns! Você subiu para o Nível {result.newLevel}!
                </p>
                <p className="text-yellow-700 text-sm text-center mt-1">
                  Agora você tem acesso a questões mais desafiadoras!
                </p>
              </div>
            )}
            
          </div>

          {/* Score Details */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-green-50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <Trophy className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-green-700">Acertos</span>
              </div>
              <p className="text-2xl font-bold text-green-600">{result.correctAnswers}</p>
            </div>
            
            <div className="bg-red-50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <Target className="w-4 h-4 text-red-500" />
                <span className="text-sm font-medium text-red-700">Erros</span>
              </div>
              <p className="text-2xl font-bold text-red-600">
                {wrongAnswers}
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <Zap className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-700">Precisão</span>
              </div>
              <p className="text-2xl font-bold text-blue-600">{subjectProgress.accuracy}%</p>
            </div>
          </div>
        </div>

        {/* Performance Analysis */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-blue-500" />
            <h3 className="text-lg font-semibold text-gray-800">Análise de Performance</h3>
          </div>
          
          <div className={`rounded-xl p-4 border ${
            percentage >= 80 ? 'bg-green-50 border-green-200' :
            percentage >= 60 ? 'bg-yellow-50 border-yellow-200' :
            percentage >= 40 ? 'bg-blue-50 border-blue-200' :
            'bg-red-50 border-red-200'
          }`}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">
                {percentage >= 80 ? '🌟' : 
                 percentage >= 60 ? '📈' : 
                 percentage >= 40 ? '💡' : '🎯'}
              </span>
              <p className={`font-medium ${
                percentage >= 80 ? 'text-green-800' :
                percentage >= 60 ? 'text-yellow-800' :
                percentage >= 40 ? 'text-blue-800' :
                'text-red-800'
              }`}>
                {percentage >= 80 ? 'Performance Excepcional!' :
                 percentage >= 60 ? 'Bom Desempenho!' :
                 percentage >= 40 ? 'Progresso Consistente!' :
                 'Área de Melhoria'}
              </p>
            </div>
            <p className={`text-sm ${
              percentage >= 80 ? 'text-green-700' :
              percentage >= 60 ? 'text-yellow-700' :
              percentage >= 40 ? 'text-blue-700' :
              'text-red-700'
            }`}>
              {getMotivationalMessage(percentage)}
            </p>
          </div>
          
          {/* Subject Progress Info */}
          <div className="mt-4 bg-gray-50 rounded-xl p-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Progresso em {subjectInfo?.name || 'Matéria'}:</span>
              <span className="font-medium text-gray-800">
                Nível {quizLevel} • {subjectProgress.accuracy}% de precisão
              </span>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              {subjectProgress.questionsCompleted} questões completadas • {subjectProgress.correctAnswers} acertos
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onRetry}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-5 h-5" />
            Refazer Quiz
          </button>
          
          <button
            onClick={onBack}
            className="flex-1 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-200"
          >
            Escolher Outra Matéria
          </button>
          
          <button
            onClick={() => window.location.reload()}
            className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Voltar ao Início
          </button>
        </div>
      </div>
    </div>
  );
}