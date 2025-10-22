import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Teste de variáveis de ambiente para debug
console.log('🚀 Iniciando aplicação...');
console.log('🔧 Variáveis de ambiente detectadas:', {
  VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL ? '✅ Definida' : '❌ Não definida',
  VITE_SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY ? '✅ Definida' : '❌ Não definida',
  MODE: import.meta.env.MODE,
  DEV: import.meta.env.DEV,
  PROD: import.meta.env.PROD
});

if (import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY) {
  console.log('✅ Variáveis do Supabase carregadas com sucesso!');
  console.log('🌐 URL:', import.meta.env.VITE_SUPABASE_URL);
  console.log('🔑 Chave (primeiros 20 chars):', import.meta.env.VITE_SUPABASE_ANON_KEY.substring(0, 20) + '...');
} else {
  console.error('❌ Problema com variáveis de ambiente do Supabase!');
  console.error('🔧 Verifique se o arquivo .env.local está na raiz do projeto');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
