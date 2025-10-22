import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, CheckCircle, Star } from 'lucide-react';
import { Question, Subject, UserProgress } from '../types';
import { mockQuestions } from '../data/mockData';

interface QuizProps {
  subject: Subject;
  userProgress: UserProgress;
  onComplete: (answers: Record<string, 'A' | 'B' | 'C' | 'D' | 'E'>, quizLevel: number) => void;
  onBack: () => void;
}

export function Quiz({ subject, userProgress, onComplete, onBack }: QuizProps) {
  // Add safety check for progress prop
  if (!userProgress || !userProgress.subjects) {
    console.warn('Quiz: userProgress or subjects data is missing');
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Erro: Dados de progresso não disponíveis</p>
          <button
            onClick={onBack}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Voltar
          </button>
        </div>
      </div>
    );
  }

  // Get subject progress with fallback to default values
  const subjectProgress = userProgress.subjects[subject] || {
    level: 1,
    xp: 0,
    xpToNextLevel: 200,
    questionsCompleted: 0,
    correctAnswers: 0,
    accuracy: 0
  };
  const userLevel = subjectProgress?.level || 1;
  
  const [questions] = useState<Question[]>(() => {
    console.log(`Quiz: Loading questions for ${subject} level ${userLevel}`);
    console.log(`Quiz: Total questions available:`, mockQuestions.length);
    
    // First try: Filter by subject and level
    let filteredQuestions = mockQuestions.filter(q => 
      q.subject === subject && q.level === userLevel
    );
    
    console.log(`Quiz: Found ${filteredQuestions.length} questions for ${subject} level ${userLevel}`);
    
    // Second try: If no questions for this level, get all questions for this subject
    if (filteredQuestions.length === 0) {
      filteredQuestions = mockQuestions.filter(q => q.subject === subject);
      console.log(`Quiz: Fallback to all ${subject} questions: ${filteredQuestions.length} found`);
    }
    
    // Third try: If still no questions, get all questions from all subjects
    if (filteredQuestions.length === 0) {
      filteredQuestions = mockQuestions;
      console.log(`Quiz: Ultimate fallback to all questions: ${filteredQuestions.length} found`);
    }
    
    return filteredQuestions.slice(0, 5);
  });
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D' | 'E'>>({});
  const [timeLeft, setTimeLeft] = useState(300);

  useEffect(() => {
    if (questions.length === 0) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleFinishQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [questions.length]);

  const currentQuestion = questions[currentQuestionIndex];
  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleAnswer = (questionId: string, answer: 'A' | 'B' | 'C' | 'D' | 'E') => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      handleFinishQuiz();
    }
  };

  const handleFinishQuiz = () => {
    let correctAnswers = 0;
    questions.forEach(question => {
      if (answers[question.id] === question.correctAnswer) {
        correctAnswers += 1;
      }
    });
    
    console.log('Quiz Results:', {
      correctAnswers,
      totalQuestions: questions.length,
      answers,
      questions: questions.map(q => ({ id: q.id, correctAnswer: q.correctAnswer }))
    });
    onComplete(answers, userLevel);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  // Handle case when no questions are available
  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 flex items-center justify-center">
        <div className="text-center bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
          <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📚</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Nenhuma questão disponível
          </h3>
          <p className="text-gray-600 mb-6">
            Não encontramos questões para o seu nível atual nesta matéria.
          </p>
          <button
            onClick={onBack}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
          >
            Voltar às Matérias
          </button>
        </div>
      </div>
    );
  }

  // Handle case when current question index is out of bounds
  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 flex items-center justify-center">
        <div className="text-center bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
          <p className="text-gray-600 mb-4">Erro ao carregar questão</p>
          <button
            onClick={onBack}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
          >
            Voltar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </button>
            <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700">
                Nível {userLevel}
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm">
              <Clock className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">
                {formatTime(timeLeft)}
              </span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              Questão {currentQuestionIndex + 1} de {questions.length}
            </span>
            <span className="text-sm text-gray-500">{Math.round(progressPercentage)}%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 mb-6">
          {/* Difficulty Indicator */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-3 h-3 sm:w-4 sm:h-4 ${
                    star <= currentQuestion.difficulty
                      ? 'text-yellow-500 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500">
              {Math.round(progressPercentage)}%
            </span>
          </div>
          
          <div className="mb-6">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 leading-relaxed">
              {currentQuestion.text}
            </h2>
          </div>

          <div className="space-y-2 sm:space-y-3">
            {currentQuestion.options.map((option) => (
              <button
                key={option.letter}
                onClick={() => handleAnswer(currentQuestion.id, option.letter)}
                className={`w-full p-3 sm:p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-center gap-3 sm:gap-4 ${
                  answers[currentQuestion.id] === option.letter
                    ? 'border-blue-500 bg-blue-50 shadow-md transform scale-[1.02]'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center font-semibold text-sm sm:text-base ${
                  answers[currentQuestion.id] === option.letter
                    ? 'border-blue-500 bg-blue-500 text-white'
                    : 'border-gray-300 text-gray-600'
                }`}>
                  {option.letter}
                </div>
                <span className="text-sm sm:text-base text-gray-800 flex-1">{option.text}</span>
                {answers[currentQuestion.id] === option.letter && (
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <div className="flex justify-center">
          <button
            onClick={handleNext}
            disabled={!answers[currentQuestion.id]}
            className={`px-6 sm:px-8 py-3 rounded-2xl font-semibold transition-all duration-200 text-sm sm:text-base ${
              answers[currentQuestion.id]
                ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {currentQuestionIndex === questions.length - 1 ? 'Finalizar' : 'Próxima'}
          </button>
        </div>
      </div>
    </div>
  );
}