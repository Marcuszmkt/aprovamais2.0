import { Level } from '../types';

export const levels: Level[] = [
  {
    level: 1,
    xpRequired: 0,
    questionsUnlocked: 15,
    title: 'Iniciante',
    description: 'Questões básicas para começar'
  },
  {
    level: 2,
    xpRequired: 200,
    questionsUnlocked: 30,
    title: 'Estudante',
    description: 'Questões intermediárias'
  },
  {
    level: 3,
    xpRequired: 500,
    questionsUnlocked: 45,
    title: 'Avançado',
    description: 'Questões complexas e contextualizadas'
  },
  {
    level: 4,
    xpRequired: 1000,
    questionsUnlocked: 60,
    title: 'Expert',
    description: 'Questões de alta dificuldade'
  },
  {
    level: 5,
    xpRequired: 2000,
    questionsUnlocked: 75,
    title: 'Mestre',
    description: 'Questões desafiadoras do ENEM'
  }
];

export function getXPForNextLevel(currentLevel: number): number {
  const nextLevel = levels.find(l => l.level === currentLevel + 1);
  return nextLevel ? nextLevel.xpRequired : 0;
}

export function getLevelInfo(xp: number): { level: number; xpToNext: number; progress: number } {
  let currentLevel = 1;
  let xpToNext = 200;
  
  for (const level of levels) {
    if (xp >= level.xpRequired) {
      currentLevel = level.level;
    } else {
      xpToNext = level.xpRequired - xp;
      break;
    }
  }
  
  const currentLevelXP = levels.find(l => l.level === currentLevel)?.xpRequired || 0;
  const nextLevelXP = levels.find(l => l.level === currentLevel + 1)?.xpRequired || currentLevelXP;
  const progress = nextLevelXP > currentLevelXP ? ((xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100 : 100;
  
  return { level: currentLevel, xpToNext, progress: Math.min(progress, 100) };
}