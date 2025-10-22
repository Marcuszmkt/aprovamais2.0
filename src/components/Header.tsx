import React from 'react';
import { BookOpen, Trophy, Target, PenTool, User } from 'lucide-react';

interface HeaderProps {
  currentScreen: string;
  onNavigate: (screen: string) => void;
}

export function Header({ currentScreen, onNavigate }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">
              Aprova<span className="text-yellow-500">+</span>
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => onNavigate('home')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                currentScreen === 'home'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Simulados
            </button>
            <button
              onClick={() => onNavigate('essay')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                currentScreen === 'essay' 
                  ? 'bg-green-50 text-green-600' 
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              <PenTool className="w-4 h-4" />
              Redação
            </button>
            <button
              onClick={() => onNavigate('tips')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                currentScreen === 'tips'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <Trophy className="w-4 h-4" />
              Dicas
            </button>
            <button
              onClick={() => onNavigate('profile')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                currentScreen === 'profile' 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <User className="w-4 h-4" />
              Perfil
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}