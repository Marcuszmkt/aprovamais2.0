import { Question, SubjectInfo } from '../types';

export const subjects: SubjectInfo[] = [
  {
    id: 'mathematics' as Subject,
    name: 'Matemática',
    icon: '📊',
    color: 'bg-blue-500',
    description: 'Álgebra, geometria e estatística'
  },
  {
    id: 'portuguese' as Subject,
    name: 'Português',
    icon: '📚',
    color: 'bg-green-500',
    description: 'Interpretação e gramática'
  },
  {
    id: 'human-sciences' as Subject,
    name: 'Ciências Humanas',
    icon: '🌍',
    color: 'bg-purple-500',
    description: 'História, geografia e filosofia'
  },
  {
    id: 'natural-sciences' as Subject,
    name: 'Ciências da Natureza',
    icon: '🔬',
    color: 'bg-red-500',
    description: 'Física, química e biologia'
  },
  {
    id: 'essay' as Subject,
    name: 'Redação',
    icon: '✍️',
    color: 'bg-yellow-500',
    description: 'Argumentação e estrutura textual'
  }
];

export const mockQuestions: Question[] = [
  // Matematica - Level 1
  {
    id: 'matematica-1-01',
    subject: 'mathematics',
    text: 'Uma função f(x) = 2x + 3 é aplicada ao valor x = 5. Qual é o resultado dessa operação?',
    options: [
      { letter: 'A', text: '10' },
      { letter: 'B', text: '13' },
      { letter: 'C', text: '8' },
      { letter: 'D', text: '15' },
      { letter: 'E', text: '11' }
    ],
    correctAnswer: 'B',
    explanation: 'f(5) = 2(5) + 3 = 10 + 3 = 13',
    difficulty: 1,
    level: 1
  },
  {
    id: 'matematica-1-02',
    subject: 'mathematics',
    text: 'Se 3x + 7 = 22, qual é o valor de x?',
    options: [
      { letter: 'A', text: '3' },
      { letter: 'B', text: '5' },
      { letter: 'C', text: '7' },
      { letter: 'D', text: '4' },
      { letter: 'E', text: '6' }
    ],
    correctAnswer: 'B',
    explanation: '3x = 22 - 7 = 15, então x = 15/3 = 5',
    difficulty: 1,
    level: 1
  },
  {
    id: 'matematica-1-03',
    subject: 'mathematics',
    text: 'Qual é o resultado de 15% de 200?',
    options: [
      { letter: 'A', text: '25' },
      { letter: 'B', text: '30' },
      { letter: 'C', text: '35' },
      { letter: 'D', text: '40' },
      { letter: 'E', text: '45' }
    ],
    correctAnswer: 'B',
    explanation: '15% de 200 = 0,15 × 200 = 30',
    difficulty: 1,
    level: 1
  },
  {
    id: 'matematica-1-04',
    subject: 'mathematics',
    text: 'A área de um retângulo com base 8 cm e altura 5 cm é:',
    options: [
      { letter: 'A', text: '13 cm²' },
      { letter: 'B', text: '26 cm²' },
      { letter: 'C', text: '40 cm²' },
      { letter: 'D', text: '80 cm²' },
      { letter: 'E', text: '20 cm²' }
    ],
    correctAnswer: 'C',
    explanation: 'Área = base × altura = 8 × 5 = 40 cm²',
    difficulty: 1,
    level: 1
  },
  {
    id: 'matematica-1-05',
    subject: 'mathematics',
    text: 'O valor de √64 é:',
    options: [
      { letter: 'A', text: '6' },
      { letter: 'B', text: '7' },
      { letter: 'C', text: '8' },
      { letter: 'D', text: '9' },
      { letter: 'E', text: '10' }
    ],
    correctAnswer: 'C',
    explanation: '√64 = 8, pois 8² = 64',
    difficulty: 1,
    level: 1
  },

  // Matematica - Level 2
  {
    id: 'matematica-2-01',
    subject: 'mathematics',
    text: 'Uma empresa teve um lucro de R$ 50.000 no primeiro trimestre e R$ 65.000 no segundo trimestre. Qual foi o percentual de aumento?',
    options: [
      { letter: 'A', text: '15%' },
      { letter: 'B', text: '20%' },
      { letter: 'C', text: '25%' },
      { letter: 'D', text: '30%' },
      { letter: 'E', text: '35%' }
    ],
    correctAnswer: 'D',
    explanation: 'Aumento = (65000 - 50000)/50000 × 100% = 30%',
    difficulty: 2,
    level: 2
  },
  {
    id: 'matematica-2-02',
    subject: 'mathematics',
    text: 'Em uma progressão aritmética, o primeiro termo é 3 e a razão é 4. Qual é o 10º termo?',
    options: [
      { letter: 'A', text: '37' },
      { letter: 'B', text: '39' },
      { letter: 'C', text: '41' },
      { letter: 'D', text: '43' },
      { letter: 'E', text: '45' }
    ],
    correctAnswer: 'B',
    explanation: 'a₁₀ = a₁ + 9r = 3 + 9(4) = 3 + 36 = 39',
    difficulty: 2,
    level: 2
  },
  {
    id: 'matematica-2-03',
    subject: 'mathematics',
    text: 'O volume de um cubo com aresta de 6 cm é:',
    options: [
      { letter: 'A', text: '36 cm³' },
      { letter: 'B', text: '108 cm³' },
      { letter: 'C', text: '144 cm³' },
      { letter: 'D', text: '180 cm³' },
      { letter: 'E', text: '216 cm³' }
    ],
    correctAnswer: 'E',
    explanation: 'Volume = aresta³ = 6³ = 216 cm³',
    difficulty: 2,
    level: 2
  },
  {
    id: 'matematica-2-04',
    subject: 'mathematics',
    text: 'Se log₂(x) = 3, então x é igual a:',
    options: [
      { letter: 'A', text: '6' },
      { letter: 'B', text: '8' },
      { letter: 'C', text: '9' },
      { letter: 'D', text: '12' },
      { letter: 'E', text: '16' }
    ],
    correctAnswer: 'B',
    explanation: 'log₂(x) = 3 significa que 2³ = x, então x = 8',
    difficulty: 2,
    level: 2
  },
  {
    id: 'matematica-2-05',
    subject: 'mathematics',
    text: 'A probabilidade de sair cara ao lançar uma moeda honesta 3 vezes consecutivas é:',
    options: [
      { letter: 'A', text: '1/8' },
      { letter: 'B', text: '1/4' },
      { letter: 'C', text: '3/8' },
      { letter: 'D', text: '1/2' },
      { letter: 'E', text: '3/4' }
    ],
    correctAnswer: 'A',
    explanation: 'P(3 caras) = (1/2)³ = 1/8',
    difficulty: 2,
    level: 2
  },

  // Portugues - Level 1
  {
    id: 'portugues-1-01',
    subject: 'portuguese',
    text: 'Qual das alternativas apresenta corretamente o uso da crase?',
    options: [
      { letter: 'A', text: 'Vou à casa da minha avó.' },
      { letter: 'B', text: 'Ele se refere à você.' },
      { letter: 'C', text: 'Cheguei à duas horas.' },
      { letter: 'D', text: 'Vamos à pé.' },
      { letter: 'E', text: 'Ela à caminho.' }
    ],
    correctAnswer: 'A',
    explanation: 'A crase é usada antes de palavras femininas que pedem preposição "a"',
    difficulty: 1,
    level: 1
  },
  {
    id: 'portugues-1-02',
    subject: 'portuguese',
    text: 'Identifique a figura de linguagem presente na frase: "O tempo voou durante as férias".',
    options: [
      { letter: 'A', text: 'Metáfora' },
      { letter: 'B', text: 'Personificação' },
      { letter: 'C', text: 'Hipérbole' },
      { letter: 'D', text: 'Ironia' },
      { letter: 'E', text: 'Comparação' }
    ],
    correctAnswer: 'A',
    explanation: 'Metáfora: comparação implícita entre tempo e algo que voa',
    difficulty: 1,
    level: 1
  },
  {
    id: 'portugues-1-03',
    subject: 'portuguese',
    text: 'Qual é o plural correto de "cidadão"?',
    options: [
      { letter: 'A', text: 'cidadões' },
      { letter: 'B', text: 'cidadãos' },
      { letter: 'C', text: 'cidadans' },
      { letter: 'D', text: 'cidadães' },
      { letter: 'E', text: 'cidadãoes' }
    ],
    correctAnswer: 'B',
    explanation: 'O plural de cidadão é cidadãos',
    difficulty: 1,
    level: 1
  },
  {
    id: 'portugues-1-04',
    subject: 'portuguese',
    text: 'Em qual alternativa a palavra "que" é um pronome relativo?',
    options: [
      { letter: 'A', text: 'Que bom te ver!' },
      { letter: 'B', text: 'O livro que comprei é interessante.' },
      { letter: 'C', text: 'Que horas são?' },
      { letter: 'D', text: 'Espero que você venha.' },
      { letter: 'E', text: 'Que dia é hoje?' }
    ],
    correctAnswer: 'B',
    explanation: 'Em "O livro que comprei", "que" retoma "livro" (pronome relativo)',
    difficulty: 1,
    level: 1
  },
  {
    id: 'portugues-1-05',
    subject: 'portuguese',
    text: 'Qual é a função sintática de "rapidamente" na frase "Ele correu rapidamente"?',
    options: [
      { letter: 'A', text: 'Sujeito' },
      { letter: 'B', text: 'Predicado' },
      { letter: 'C', text: 'Adjunto adverbial' },
      { letter: 'D', text: 'Objeto direto' },
      { letter: 'E', text: 'Complemento nominal' }
    ],
    correctAnswer: 'C',
    explanation: '"Rapidamente" é um advérbio que modifica o verbo "correu"',
    difficulty: 1,
    level: 1
  },

  // Historia - Level 1
  {
    id: 'historia-1-01',
    subject: 'human-sciences',
    text: 'O período conhecido como Era Vargas no Brasil compreende os anos de:',
    options: [
      { letter: 'A', text: '1920-1940' },
      { letter: 'B', text: '1930-1945' },
      { letter: 'C', text: '1935-1950' },
      { letter: 'D', text: '1940-1955' },
      { letter: 'E', text: '1925-1945' }
    ],
    correctAnswer: 'B',
    explanation: 'Getúlio Vargas governou de 1930 a 1945',
    difficulty: 1,
    level: 1
  },
  {
    id: 'historia-1-02',
    subject: 'human-sciences',
    text: 'Qual foi a principal causa da Primeira Guerra Mundial?',
    options: [
      { letter: 'A', text: 'Assassinato do Arquiduque Francisco Ferdinando' },
      { letter: 'B', text: 'Crise econômica de 1929' },
      { letter: 'C', text: 'Revolução Russa' },
      { letter: 'D', text: 'Unificação alemã' },
      { letter: 'E', text: 'Guerra Franco-Prussiana' }
    ],
    correctAnswer: 'A',
    explanation: 'O assassinato em Sarajevo foi o estopim da guerra',
    difficulty: 1,
    level: 1
  },
  {
    id: 'geografia-1-01',
    subject: 'human-sciences',
    text: 'O clima predominante na região Norte do Brasil é:',
    options: [
      { letter: 'A', text: 'Tropical semiárido' },
      { letter: 'B', text: 'Equatorial' },
      { letter: 'C', text: 'Tropical de altitude' },
      { letter: 'D', text: 'Subtropical' },
      { letter: 'E', text: 'Tropical atlântico' }
    ],
    correctAnswer: 'B',
    explanation: 'A região Norte tem clima equatorial, quente e úmido',
    difficulty: 1,
    level: 1
  },
  {
    id: 'filosofia-1-01',
    subject: 'human-sciences',
    text: 'Qual filósofo é considerado o pai da filosofia moderna?',
    options: [
      { letter: 'A', text: 'Aristóteles' },
      { letter: 'B', text: 'Platão' },
      { letter: 'C', text: 'René Descartes' },
      { letter: 'D', text: 'Immanuel Kant' },
      { letter: 'E', text: 'Sócrates' }
    ],
    correctAnswer: 'C',
    explanation: 'Descartes é considerado o fundador da filosofia moderna',
    difficulty: 1,
    level: 1
  },
  {
    id: 'sociologia-1-01',
    subject: 'human-sciences',
    text: 'A Constituição Federal de 1988 é conhecida como:',
    options: [
      { letter: 'A', text: 'Constituição Republicana' },
      { letter: 'B', text: 'Constituição Democrática' },
      { letter: 'C', text: 'Constituição Cidadã' },
      { letter: 'D', text: 'Constituição Popular' },
      { letter: 'E', text: 'Constituição Social' }
    ],
    correctAnswer: 'C',
    explanation: 'É chamada de Constituição Cidadã por garantir direitos fundamentais',
    difficulty: 1,
    level: 1
  },

  // Fisica - Level 1
  {
    id: 'fisica-1-01',
    subject: 'natural-sciences',
    text: 'Qual é a unidade de medida da força no Sistema Internacional?',
    options: [
      { letter: 'A', text: 'Joule' },
      { letter: 'B', text: 'Newton' },
      { letter: 'C', text: 'Watt' },
      { letter: 'D', text: 'Pascal' },
      { letter: 'E', text: 'Coulomb' }
    ],
    correctAnswer: 'B',
    explanation: 'Newton (N) é a unidade de força no SI',
    difficulty: 1,
    level: 1
  },

  // Quimica - Level 1
  {
    id: 'quimica-1-01',
    subject: 'natural-sciences',
    text: 'Qual é a fórmula química da água?',
    options: [
      { letter: 'A', text: 'H2O' },
      { letter: 'B', text: 'CO2' },
      { letter: 'C', text: 'O2' },
      { letter: 'D', text: 'H2SO4' },
      { letter: 'E', text: 'NaCl' }
    ],
    correctAnswer: 'A',
    explanation: 'A água é formada por dois átomos de hidrogênio e um de oxigênio',
    difficulty: 1,
    level: 1
  },
  {
    id: 'quimica-1-02',
    subject: 'natural-sciences',
    text: 'O que acontece com a velocidade de uma reação química quando aumentamos a temperatura?',
    options: [
      { letter: 'A', text: 'Diminui' },
      { letter: 'B', text: 'Permanece igual' },
      { letter: 'C', text: 'Aumenta' },
      { letter: 'D', text: 'Para completamente' },
      { letter: 'E', text: 'Varia aleatoriamente' }
    ],
    correctAnswer: 'C',
    explanation: 'O aumento da temperatura acelera as reações químicas',
    difficulty: 1,
    level: 1
  },

  // Biologia - Level 1
  {
    id: 'biologia-1-01',
    subject: 'natural-sciences',
    text: 'Qual organela celular é responsável pela respiração celular?',
    options: [
      { letter: 'A', text: 'Núcleo' },
      { letter: 'B', text: 'Ribossomo' },
      { letter: 'C', text: 'Mitocôndria' },
      { letter: 'D', text: 'Cloroplasto' },
      { letter: 'E', text: 'Vacúolo' }
    ],
    correctAnswer: 'C',
    explanation: 'A mitocôndria é responsável pela produção de energia (ATP)',
    difficulty: 1,
    level: 1
  },
  {
    id: 'biologia-1-02',
    subject: 'natural-sciences',
    text: 'Qual é o principal gás responsável pelo efeito estufa?',
    options: [
      { letter: 'A', text: 'Oxigênio (O2)' },
      { letter: 'B', text: 'Nitrogênio (N2)' },
      { letter: 'C', text: 'Dióxido de carbono (CO2)' },
      { letter: 'D', text: 'Hidrogênio (H2)' },
      { letter: 'E', text: 'Hélio (He)' }
    ],
    correctAnswer: 'C',
    explanation: 'O CO2 é o principal gás do efeito estufa antropogênico',
    difficulty: 1,
    level: 1
  },

  // Redacao - Level 1
  {
    id: 'redacao-1-01',
    subject: 'essay',
    text: 'Qual é a estrutura básica de uma redação dissertativo-argumentativa?',
    options: [
      { letter: 'A', text: 'Apenas introdução e conclusão' },
      { letter: 'B', text: 'Introdução, desenvolvimento e conclusão' },
      { letter: 'C', text: 'Apenas desenvolvimento' },
      { letter: 'D', text: 'Introdução e desenvolvimento' },
      { letter: 'E', text: 'Desenvolvimento e conclusão' }
    ],
    correctAnswer: 'B',
    explanation: 'A estrutura clássica tem introdução, desenvolvimento e conclusão',
    difficulty: 1,
    level: 1
  },
  {
    id: 'redacao-1-02',
    subject: 'essay',
    text: 'Quantos parágrafos deve ter uma redação do ENEM?',
    options: [
      { letter: 'A', text: '3 parágrafos' },
      { letter: 'B', text: '4 parágrafos' },
      { letter: 'C', text: '5 parágrafos' },
      { letter: 'D', text: '6 parágrafos' },
      { letter: 'E', text: 'Não há limite' }
    ],
    correctAnswer: 'C',
    explanation: 'O ideal são 5 parágrafos: introdução, 3 de desenvolvimento e conclusão',
    difficulty: 1,
    level: 1
  },
  {
    id: 'redacao-1-03',
    subject: 'essay',
    text: 'O que deve conter a conclusão de uma redação do ENEM?',
    options: [
      { letter: 'A', text: 'Apenas um resumo' },
      { letter: 'B', text: 'Uma proposta de intervenção' },
      { letter: 'C', text: 'Apenas argumentos' },
      { letter: 'D', text: 'Uma pergunta' },
      { letter: 'E', text: 'Dados estatísticos' }
    ],
    correctAnswer: 'B',
    explanation: 'A conclusão deve apresentar uma proposta de intervenção detalhada',
    difficulty: 1,
    level: 1
  },
  {
    id: 'redacao-1-04',
    subject: 'essay',
    text: 'Qual é o número mínimo de linhas para uma redação do ENEM?',
    options: [
      { letter: 'A', text: '5 linhas' },
      { letter: 'B', text: '7 linhas' },
      { letter: 'C', text: '10 linhas' },
      { letter: 'D', text: '15 linhas' },
      { letter: 'E', text: '20 linhas' }
    ],
    correctAnswer: 'B',
    explanation: 'O mínimo são 7 linhas, mas o ideal é entre 20-30 linhas',
    difficulty: 1,
    level: 1
  },
  {
    id: 'redacao-1-05',
    subject: 'essay',
    text: 'O que caracteriza um texto dissertativo-argumentativo?',
    options: [
      { letter: 'A', text: 'Narrar uma história' },
      { letter: 'B', text: 'Descrever um objeto' },
      { letter: 'C', text: 'Defender um ponto de vista' },
      { letter: 'D', text: 'Fazer um relato' },
      { letter: 'E', text: 'Criar um diálogo' }
    ],
    correctAnswer: 'C',
    explanation: 'O texto dissertativo-argumentativo defende uma tese com argumentos',
    difficulty: 1,
    level: 1
  },
];

export const studyTips = [
  {
    id: '1',
    title: 'Organize seu tempo',
    content: 'Crie um cronograma de estudos equilibrado, dedicando tempo para todas as matérias.',
    icon: '⏰'
  },
  {
    id: '2',
    title: 'Pratique redação',
    content: 'Escreva pelo menos uma redação por semana seguindo a estrutura dissertativo-argumentativa.',
    icon: '✍️'
  },
  {
    id: '3',
    title: 'Simulados regulares',
    content: 'Faça simulados frequentemente para se familiarizar com o formato da prova.',
    icon: '📝'
  },
  {
    id: '4',
    title: 'Descanso é importante',
    content: 'Mantenha uma rotina de sono adequada e reserve tempo para relaxar.',
    icon: '😴'
  },
  {
    id: '5',
    title: 'Revise seus erros',
    content: 'Analise cada erro como uma oportunidade de aprendizado e melhoria.',
    icon: '🔍'
  },
  {
    id: '6',
    title: 'Mantenha a consistência',
    content: 'Estude um pouco todos os dias em vez de longas sessões esporádicas.',
    icon: '📈'
  }
];