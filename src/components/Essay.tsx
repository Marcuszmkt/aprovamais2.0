import React, { useState } from 'react';

import { Sparkles, Loader2 } from 'lucide-react';
interface EssayProps {
  onBack: () => void;
}

export function Essay({ onBack }: EssayProps) {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<null | {
    score: number;
    highlights: string[];
    feedback: string;
    suggestions: string[];
  }>(null);

  const evaluations = [
    {
      score: 180,
      highlights: [
        'Competência 1: Domínio da norma padrão',
        'Competência 2: Compreensão da proposta',
        'Competência 3: Seleção e organização de argumentos',
        'Competência 4: Conhecimento dos mecanismos linguísticos',
        'Competência 5: Proposta de intervenção'
      ],
      feedback: 'Excelente redação! Demonstra domínio completo das competências avaliadas. A argumentação é sólida, bem estruturada e a proposta de intervenção é detalhada e viável.',
      suggestions: [
        'Continue mantendo essa qualidade de argumentação.',
        'Parabéns pela proposta de intervenção bem detalhada.',
        'Sua coesão textual está excelente.',
        'Mantenha o foco no tema proposto.'
      ]
    },
    {
      score: 140,
      highlights: [
        'Competência 1: Domínio da norma padrão',
        'Competência 2: Compreensão da proposta',
        'Competência 3: Seleção e organização de argumentos',
        'Competência 4: Conhecimento dos mecanismos linguísticos',
        'Competência 5: Proposta de intervenção'
      ],
      feedback: 'Boa redação com estrutura adequada. Alguns pontos podem ser aprimorados para alcançar uma nota ainda maior. Continue desenvolvendo argumentos mais sólidos.',
      suggestions: [
        'Aprimore a competência 1 revisando concordância e regência.',
        'Desenvolva melhor a competência 3 com exemplos concretos.',
        'Fortaleça a competência 5 com proposta de intervenção mais detalhada.',
        'Melhore a competência 4 usando mais conectivos adequados.'
      ]
    },
    {
      score: 100,
      highlights: [
        'Competência 1: Domínio da norma padrão',
        'Competência 2: Compreensão da proposta',
        'Competência 3: Seleção e organização de argumentos',
        'Competência 4: Conhecimento dos mecanismos linguísticos',
        'Competência 5: Proposta de intervenção'
      ],
      feedback: 'Redação com potencial, mas precisa de melhorias significativas. Foque na estrutura argumentativa e na proposta de intervenção para elevar sua nota.',
      suggestions: [
        'Revise cuidadosamente a gramática e ortografia.',
        'Desenvolva melhor os argumentos com exemplos específicos.',
        'Crie uma proposta de intervenção mais detalhada e viável.',
        'Use mais conectivos para melhorar a coesão textual.'
      ]
    },
    {
      score: 160,
      highlights: [
        'Competência 1: Domínio da norma padrão',
        'Competência 2: Compreensão da proposta',
        'Competência 3: Seleção e organização de argumentos',
        'Competência 4: Conhecimento dos mecanismos linguísticos',
        'Competência 5: Proposta de intervenção'
      ],
      feedback: 'Muito boa redação! Demonstra boa compreensão do tema e estrutura adequada. Pequenos ajustes podem elevar ainda mais sua nota.',
      suggestions: [
        'Continue aprimorando a competência 1 com revisões gramaticais.',
        'Desenvolva exemplos mais específicos na competência 3.',
        'Detalhe melhor a proposta de intervenção.',
        'Use mais variedade de conectivos.'
      ]
    }
  ];

  const handleFakeEvaluate = async () => {
    setIsSubmitting(true);
    setResult(null);
    // Fake AI delay with ENEM competencies analysis
    await new Promise(r => setTimeout(r, 3000));
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    const randomEvaluation = evaluations[Math.floor(Math.random() * evaluations.length)];
    setResult(randomEvaluation);
    setIsSubmitting(false);
  };

  const disabled = isSubmitting || text.trim().length < 200;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <button onClick={onBack} className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition-colors">Voltar</button>
          <div className="text-sm text-gray-500">Correção Inteligente por IA</div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Corretor de Redação IA</h1>
          <p className="text-gray-500 text-sm mb-6">Avaliação automática baseada nos critérios do ENEM</p>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Tema da Redação (opcional)</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ex: Desafios para a valorização da educação no Brasil"
              className="w-full rounded-xl border border-gray-200 p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm sm:text-base"
            />
          </div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Cole sua redação aqui</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Cole o texto da sua redação aqui. Quanto mais completa, melhor será a análise..."
            className="w-full min-h-[200px] sm:min-h-[220px] rounded-xl border border-gray-200 p-3 sm:p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-y text-sm sm:text-base"
          />

          <div className="text-xs text-gray-500 mt-2">
            {text.trim().length} caracteres {text.trim().length < 200 && `(mínimo: 200)`}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <button
              onClick={handleFakeEvaluate}
              disabled={disabled}
              className={`flex-1 inline-flex items-center justify-center px-4 sm:px-6 py-3 rounded-2xl font-semibold transition-all text-sm sm:text-base ${disabled ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.01]'}`}
            >
              {isSubmitting ? (
                <Loader2 className="animate-spin mr-2" size={16} />
              ) : (
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              )}
              {isSubmitting ? 'Analisando...' : 'Corrigir Redação'}
            </button>
            <button
              onClick={() => setText('')}
              className="flex-1 inline-flex items-center justify-center px-4 sm:px-6 py-3 rounded-2xl font-semibold bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-sm sm:text-base"
            >
              Limpar
            </button>
            {result && (
              <button
                onClick={() => {
                  setText('');
                  setResult(null);
                }}
                className="flex-1 inline-flex items-center justify-center px-4 sm:px-6 py-3 rounded-2xl font-semibold bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.01] text-sm sm:text-base"
              >
                Nova Redação
              </button>
            )}
          </div>
          {isSubmitting && (
            <div className="mt-4 bg-blue-50 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-blue-700 font-medium">Analisando sua redação...</span>
              </div>
              <div className="text-sm text-blue-600 space-y-1">
                <div>✓ Verificando competência 1: Domínio da norma padrão</div>
                <div>✓ Verificando competência 2: Compreensão da proposta</div>
                <div>✓ Verificando competência 3: Seleção e organização de argumentos</div>
                <div>✓ Verificando competência 4: Conhecimento dos mecanismos linguísticos</div>
                <div>✓ Verificando competência 5: Proposta de intervenção</div>
              </div>
            </div>
          )}
        </div>

        {result && (
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Resultado da Correção</h2>
                <p className="text-gray-600">Análise baseada nas 5 competências do ENEM</p>
              </div>
              <div className="text-center bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6">
                <div className="text-5xl font-extrabold text-blue-600 mb-1">{result.score}</div>
                <div className="text-sm text-gray-500">/ 200 pontos</div>
                <div className="text-xs text-gray-400 mt-1">Nota ENEM</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {result.highlights.map((h, index) => (
                <div key={h} className="rounded-xl border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-green-50 p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="text-sm font-semibold text-gray-800">{h}</div>
                  </div>
                  <div className="text-xs text-gray-600">Avaliada positivamente</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-2xl">💡</span>
                  Feedback Geral
                </h3>
                <p className="text-gray-700 leading-relaxed">{result.feedback}</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  Sugestões de Melhoria
                </h3>
                <ul className="space-y-3">
                  {result.suggestions.map((s, index) => (
                    <li key={s} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 text-sm">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}