import React from 'react';
import { ArrowLeft, Lightbulb, Clock, BookOpen, Target } from 'lucide-react';
import { studyTips } from '../data/mockData';

interface TipsProps {
  onBack: () => void;
}

export function Tips({ onBack }: TipsProps) {
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
            Dicas de Prova
          </h1>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8 text-center">
          <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Lightbulb className="w-8 h-8 text-yellow-500" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
            Estratégias para Sucesso no ENEM
          </h2>
          <p className="text-gray-600">
            Dicas comprovadas para maximizar sua performance e conquistar a nota dos seus sonhos.
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {studyTips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{tip.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {tip.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tips */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-semibold text-gray-800">
                Gestão de Tempo na Prova
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-xl p-4">
                <h4 className="font-medium text-blue-800 mb-2">1º Dia (5h30min)</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Linguagens: 45 questões (2h)</li>
                  <li>• Ciências Humanas: 45 questões (2h)</li>
                  <li>• Redação: 1h30min</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-xl p-4">
                <h4 className="font-medium text-green-800 mb-2">2º Dia (5h)</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Ciências da Natureza: 45 questões (2h30min)</li>
                  <li>• Matemática: 45 questões (2h30min)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-green-500" />
              <h3 className="text-xl font-semibold text-gray-800">
                Estratégias de Resolução
              </h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-yellow-500 mt-1" />
                <p className="text-gray-700">
                  <strong>Leia sempre o enunciado completo</strong> antes de olhar as alternativas.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-yellow-500 mt-1" />
                <p className="text-gray-700">
                  <strong>Elimine alternativas obviamente incorretas</strong> para aumentar suas chances.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-yellow-500 mt-1" />
                <p className="text-gray-700">
                  <strong>Não deixe questões em branco</strong> - sempre marque uma alternativa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}