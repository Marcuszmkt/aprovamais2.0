// Debug detalhado do Supabase
// Este arquivo pode ser removido após resolver o problema

import { createClient } from '@supabase/supabase-js';

export function debugSupabaseSetup() {
  console.log('🔍 DEBUG: Iniciando verificação detalhada do Supabase...');
  
  // Verifica variáveis de ambiente
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
  
  console.log('📋 Variáveis de ambiente:', {
    url: supabaseUrl,
    key: supabaseAnonKey ? `${supabaseAnonKey.substring(0, 20)}...` : 'UNDEFINED',
    urlLength: supabaseUrl?.length || 0,
    keyLength: supabaseAnonKey?.length || 0
  });
  
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('❌ Variáveis de ambiente não encontradas!');
    return false;
  }
  
  // Cria cliente manualmente para teste
  try {
    const testClient = createClient(supabaseUrl, supabaseAnonKey);
    console.log('✅ Cliente Supabase criado com sucesso!');
    console.log('🔍 Cliente:', testClient);
    
    // Testa uma requisição simples
    testClient.auth.getSession().then(({ data, error }) => {
      if (error) {
        console.error('❌ Erro na requisição de teste:', error);
      } else {
        console.log('✅ Requisição de teste bem-sucedida!', data);
      }
    }).catch(err => {
      console.error('💥 Erro na requisição de teste:', err);
    });
    
    return true;
  } catch (error) {
    console.error('💥 Erro ao criar cliente Supabase:', error);
    return false;
  }
}

// Executa o debug automaticamente
debugSupabaseSetup();
