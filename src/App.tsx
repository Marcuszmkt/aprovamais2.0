import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { Home } from './components/Home';
import { useProgress } from './hooks/useProgress';
import { Header } from './components/Header';
import { BottomNavigation } from './components/BottomNavigation';
import { SubjectSelection } from './components/SubjectSelection';
import { Quiz } from './components/Quiz';
import { Results } from './components/Results';
import { Tips } from './components/Tips';
import { Essay } from './components/Essay';
import { Profile } from './components/Profile';
import { LevelUpModal } from './components/LevelUpModal';
import { Subject, QuizResult } from './types';
import { mockQuestions } from './data/mockData';
import './utils/supabaseTest'; // Testa conectividade com Supabase
import './utils/debugSupabase'; // Debug detalhado do Supabase
import './utils/testSupabaseConnection'; // Teste específico de conexão
import './utils/testDirectFetch'; // Teste direto com fetch

function HomeRoute() {
  const { progress, updateSubjectProgress } = useProgress();
  const [currentScreen, setCurrentScreen] = useState<string>('home');
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [lastResult, setLastResult] = useState<QuizResult | null>(null);
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [levelUpData, setLevelUpData] = useState<{ subject: string; newLevel: number } | null>(null);

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen);
  };

  const handleStartQuiz = () => {
    setCurrentScreen('subject-selection');
  };

  const handleSelectSubject = (subject: Subject) => {
    setSelectedSubject(subject);
    setCurrentScreen('quiz');
  };

  const handleQuizComplete = (answers: Record<string, 'A' | 'B' | 'C' | 'D' | 'E'>, quizLevel: number) => {
    const totalQuestions = Object.keys(answers).length;
    let correctAnswers = 0;
    
    // Calculate correct answers based on mockQuestions
    mockQuestions.forEach((q: any) => {
      if (answers[q.id] === q.correctAnswer) {
        correctAnswers += 1;
      }
    });

    const subjectPerformance: Record<Subject, { correct: number; total: number }> = {
      mathematics: { correct: 0, total: 0 },
      portuguese: { correct: 0, total: 0 },
      'human-sciences': { correct: 0, total: 0 },
      'natural-sciences': { correct: 0, total: 0 },
      essay: { correct: 0, total: 0 }
    };
    if (selectedSubject) {
      subjectPerformance[selectedSubject] = { correct: correctAnswers, total: totalQuestions };
    }

    const result: QuizResult = {
      score: Math.round((correctAnswers / Math.max(totalQuestions, 1)) * 100),
      totalQuestions,
      correctAnswers,
      subjectPerformance,
      answers,
      xpEarned: correctAnswers * 10,
      levelUp: false,
      newLevel: quizLevel,
      achievementsUnlocked: [],
      quizLevel
    };

    if (selectedSubject) {
      const update = updateSubjectProgress(selectedSubject, totalQuestions, correctAnswers);
      result.levelUp = update.levelUp;
      result.newLevel = update.newLevel;
      if (update.levelUp) {
        setLevelUpData({ subject: selectedSubject, newLevel: update.newLevel });
        setShowLevelUp(true);
      }
    }

    setLastResult(result);
    setCurrentScreen('results');
  };

  const handleBackToSubjects = () => {
    setCurrentScreen('subject-selection');
  };

  const handleRetry = () => {
    setCurrentScreen('quiz');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      <Header currentScreen={currentScreen} onNavigate={handleNavigate} />
      {currentScreen === 'home' && (
        <Home progress={progress} onStartQuiz={handleStartQuiz} onNavigate={handleNavigate} />
      )}
      {currentScreen === 'essay' && (
        <Essay onBack={() => setCurrentScreen('home')} />
      )}
      {currentScreen === 'tips' && (
        <Tips onBack={() => setCurrentScreen('home')} />
      )}
      {currentScreen === 'subject-selection' && (
        <SubjectSelection progress={progress} onSelectSubject={handleSelectSubject} onBack={() => setCurrentScreen('home')} />
      )}
      {currentScreen === 'profile' && (
        <Profile progress={progress} onBack={() => setCurrentScreen('home')} />
      )}
      {currentScreen === 'quiz' && selectedSubject && (
        <Quiz subject={selectedSubject} userProgress={progress} onComplete={handleQuizComplete} onBack={handleBackToSubjects} />
      )}
      {currentScreen === 'results' && selectedSubject && lastResult && (
        <Results result={lastResult} subject={selectedSubject} progress={progress} onBack={handleBackToSubjects} onRetry={handleRetry} />
      )}
      <BottomNavigation currentScreen={currentScreen} onNavigate={handleNavigate} />
      {showLevelUp && levelUpData && (
        <LevelUpModal
          subject={levelUpData.subject}
          newLevel={levelUpData.newLevel}
          onClose={() => setShowLevelUp(false)}
        />
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Rota de login */}
          <Route 
            path="/login" 
            element={<Login />} 
          />

        

          {/* Home existente */}
          <Route 
            path="/home" 
            element={<HomeRoute />} 
          />
          {/* Rota de perfil */}
          <Route 
            path="/profile" 
            element={<Profile />} 
          />
          {/* Rota raiz - redireciona para login */}
          <Route 
            path="/" 
            element={<Navigate to="/login" replace />} 
          />
          
          {/* Rota catch-all - redireciona para login */}
          <Route 
            path="*" 
            element={<Navigate to="/login" replace />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;