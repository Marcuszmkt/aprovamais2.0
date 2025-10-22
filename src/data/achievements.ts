import { Achievement } from '../types';

export const achievements: Achievement[] = [
  {
    id: 'first-quiz',
    title: 'Primeiro Passo',
    description: 'Complete seu primeiro simulado',
    icon: '🎯',
    xpReward: 50,
    condition: (progress) => Object.values(progress.subjects).some(s => s.questionsCompleted > 0)
  },
  {
    id: 'perfect-score',
    title: 'Perfeição',
    description: 'Acerte todas as questões de um simulado',
    icon: '💯',
    xpReward: 200,
    condition: (progress) => Object.values(progress.subjects).some(s => s.accuracy === 100 && s.questionsCompleted >= 15)
  },
  {
    id: 'math-master',
    title: 'Mestre da Matemática',
    description: 'Alcance o nível 3 em Matemática',
    icon: '🧮',
    xpReward: 300,
    condition: (progress) => progress.subjects.mathematics?.level >= 3
  },
  {
    id: 'portuguese-expert',
    title: 'Expert em Português',
    description: 'Alcance o nível 3 em Português',
    icon: '📖',
    xpReward: 300,
    condition: (progress) => progress.subjects.portuguese?.level >= 3
  },
  {
    id: 'science-genius',
    title: 'Gênio das Ciências',
    description: 'Alcance o nível 3 em Ciências da Natureza',
    icon: '🔬',
    xpReward: 300,
    condition: (progress) => progress.subjects['natural-sciences']?.level >= 3
  },
  {
    id: 'humanities-scholar',
    title: 'Estudioso de Humanas',
    description: 'Alcance o nível 3 em Ciências Humanas',
    icon: '🏛️',
    xpReward: 300,
    condition: (progress) => progress.subjects['human-sciences']?.level >= 3
  },
  {
    id: 'writing-master',
    title: 'Mestre da Redação',
    description: 'Alcance o nível 3 em Redação',
    icon: '✍️',
    xpReward: 300,
    condition: (progress) => progress.subjects.essay?.level >= 3
  },
  {
    id: 'streak-warrior',
    title: 'Guerreiro da Consistência',
    description: 'Estude por 7 dias consecutivos',
    icon: '🔥',
    xpReward: 150,
    condition: (progress) => progress.streak >= 7
  },
  {
    id: 'knowledge-seeker',
    title: 'Buscador do Conhecimento',
    description: 'Complete 100 questões no total',
    icon: '🎓',
    xpReward: 250,
    condition: (progress) => Object.values(progress.subjects).reduce((total, s) => total + s.questionsCompleted, 0) >= 100
  },
  {
    id: 'all-rounder',
    title: 'Estudante Completo',
    description: 'Alcance nível 2 em todas as matérias',
    icon: '🌟',
    xpReward: 500,
    condition: (progress) => Object.values(progress.subjects).every(s => s.level >= 2)
  },
  {
    id: 'xp-collector',
    title: 'Colecionador de XP',
    description: 'Acumule 1000 XP total',
    icon: '💎',
    xpReward: 100,
    condition: (progress) => progress.totalXP >= 1000
  },
  {
    id: 'accuracy-master',
    title: 'Mestre da Precisão',
    description: 'Mantenha 80% de acertos em uma matéria',
    icon: '🎯',
    xpReward: 200,
    condition: (progress) => Object.values(progress.subjects).some(s => s.accuracy >= 80 && s.questionsCompleted >= 30)
  }
];