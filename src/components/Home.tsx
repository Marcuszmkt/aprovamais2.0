import React from 'react';
import { Play, Star, TrendingUp, Users, Trophy, Zap, Target, Bot, BarChart3, Zap as Lightning } from 'lucide-react';
import { UserProgress } from '../types';

interface HomeProps {
  progress: UserProgress;
  onStartQuiz: () => void;
  onNavigate: (screen: string) => void;
}

export function Home({ progress, onStartQuiz, onNavigate }: HomeProps) {
  const totalQuestionsCompleted = Object.values(progress.subjects).reduce(
    (total, subject) => total + subject.questionsCompleted, 0
  );
  
  const averageAccuracy = Object.values(progress.subjects).reduce(
    (total, subject) => total + subject.accuracy, 0
  ) / 5;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              Simulados <span className="text-blue-500">Inteligentes</span>
              <br />
              para o <span className="text-yellow-500">ENEM</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Prepare-se com confiança! Nossos simulados adaptativos te ajudam a identificar 
              pontos fracos e maximizar sua pontuação no ENEM.
            </p>
          </div>
          
          <button
            onClick={onStartQuiz}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-3 mx-auto"
          >
            <Play className="w-6 h-6" />
            Começar Simulado
          </button>
        </div>

        {/* User Progress Overview */}
        {progress.totalXP > 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="w-6 h-6 text-yellow-500" />
              <h3 className="text-lg font-semibold text-gray-800">Seu Progresso</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Zap className="w-4 h-4 text-blue-500" />
                  <span className="text-2xl font-bold text-blue-500">{progress.totalXP}</span>
                </div>
                <p className="text-xs text-gray-500">XP Total</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Trophy className="w-4 h-4 text-yellow-500" />
                  <span className="text-2xl font-bold text-yellow-500">{progress.achievements.length}</span>
                </div>
                <p className="text-xs text-gray-500">Conquistas</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Target className="w-4 h-4 text-green-500" />
                  <span className="text-2xl font-bold text-green-500">{totalQuestionsCompleted}</span>
                </div>
                <p className="text-xs text-gray-500">Questões</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <TrendingUp className="w-4 h-4 text-purple-500" />
                  <span className="text-2xl font-bold text-purple-500">{Math.round(averageAccuracy)}%</span>
                </div>
                <p className="text-xs text-gray-500">Precisão</p>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">98.7%</p>
                <p className="text-gray-700 font-medium">Taxa de aprovação</p>
                <p className="text-xs text-gray-500">+3.2% vs. concorrentes</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-3xl font-bold text-yellow-600">+347</p>
                <p className="text-gray-700 font-medium">Pontos em média</p>
                <p className="text-xs text-gray-500">Aumento garantido</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-3xl font-bold text-green-600">127k+</p>
                <p className="text-gray-700 font-medium">Estudantes aprovados</p>
                <p className="text-xs text-gray-500">Em 2024</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-3xl font-bold text-purple-600">4.9★</p>
                <p className="text-gray-700 font-medium">Avaliação média</p>
                <p className="text-xs text-gray-500">Baseada em 15k+ reviews</p>
              </div>
            </div>
          </div>
        </div>

        {/* AI-Powered Features */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-400 rounded-3xl p-8 mb-12 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Tecnologia de Ponta em Educação</h2>
            <p className="text-xl text-blue-100">Inteligência Artificial + Metodologia Comprovada = Sucesso Garantido</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">IA Avançada</h3>
              <p className="text-blue-100">Correção instantânea de redações com feedback personalizado baseado nas 5 competências do ENEM</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Análise Preditiva</h3>
              <p className="text-blue-100">Algoritmos que identificam seus pontos fracos e criam planos de estudo personalizados</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lightning className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Resultados Rápidos</h3>
              <p className="text-blue-100">Veja melhorias significativas em apenas 30 dias de uso contínuo</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}