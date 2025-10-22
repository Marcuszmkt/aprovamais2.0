import React from 'react';
import { X, Star, Zap } from 'lucide-react';

interface LevelUpModalProps {
  subject: string;
  newLevel: number;
  onClose: () => void;
}

export function LevelUpModal({ subject, newLevel, onClose }: LevelUpModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 text-center animate-pulse">
        <div className="flex justify-end mb-2">
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        <div className="mb-6">
          <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-spin">
            <Star className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Parabéns!</h3>
          <p className="text-gray-600">
            Você subiu para o <strong>Nível {newLevel}</strong> em {subject}!
          </p>
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Zap className="w-5 h-5 text-blue-500" />
            <span className="font-semibold text-gray-800">Novas questões desbloqueadas!</span>
          </div>
          <p className="text-sm text-gray-600">
            Agora você tem acesso a questões mais desafiadoras e contextualizadas.
          </p>
        </div>
        
        <button
          onClick={onClose}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-200 transform hover:scale-105"
        >
          Continuar Estudando
        </button>
      </div>
    </div>
  );
}