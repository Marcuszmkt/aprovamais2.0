import React from 'react';
import { Home, BookOpen, Trophy, Calendar, PenTool, User } from 'lucide-react';

interface BottomNavigationProps {
  currentScreen: string;
  onNavigate: (screen: string) => void;
}

export function BottomNavigation({ currentScreen, onNavigate }: BottomNavigationProps) {
  const navItems = [
    { id: 'home', icon: Home, label: 'Início' },
    { id: 'essay', icon: PenTool, label: 'Redação' },
    { id: 'tips', icon: Trophy, label: 'Dicas' },
    { id: 'profile', icon: User, label: 'Pefil' }
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentScreen === item.id || 
            (item.id === 'quiz' && ['subject-selection', 'quiz', 'results'].includes(currentScreen));
          
          return (
            <button
              key={item.id}
              onClick={() => {
                if (item.id === 'quiz') {
                  onNavigate('subject-selection');
                } else {
                  onNavigate(item.id);
                }
              }}
              className={`flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-colors ${
                isActive
                  ? item.id === 'essay-corrector'
                    ? 'text-green-500'
                    : 'text-blue-500'
                  : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}