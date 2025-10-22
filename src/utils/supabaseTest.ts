// Teste de conectividade com Supabase
// Este arquivo pode ser removido após confirmar que tudo está funcionando

import { supabase } from '../lib/supabaseClient';

export async function testSupabaseConnection() {
  console.log('🧪 Testando conectividade com Supabase...');
  console.log('🔍 Cliente Supabase:', supabase);
  
  try {
    // Testa a conexão fazendo uma consulta simples
    console.log('📡 Fazendo requisição para Supabase...');
    const { data, error } = await supabase.auth.getSession();
    
    if (error) {
      console.error('❌ Erro na conexão com Supabase:', error);
      console.error('🔍 Detalhes do erro:', {
        message: error.message,
        status: error.status,
        name: error.name
      });
      return false;
    }
    
    console.log('✅ Conexão com Supabase estabelecida com sucesso!');
    console.log('📊 Dados da sessão:', data);
    return true;
    
  } catch (error) {
    console.error('💥 Erro inesperado ao testar Supabase:', error);
    console.error('🔍 Tipo do erro:', typeof error);
    console.error('🔍 Stack trace:', error);
    return false;
  }
}

export async function testSupabaseSignUp() {
  console.log('🧪 Testando função de cadastro do Supabase...');
  
  try {
    // Testa o cadastro com dados de teste
    const testEmail = `teste-${Date.now()}@exemplo.com`;
    const testPassword = '123456';
    
    console.log('📤 Tentando cadastrar usuário de teste:', testEmail);
    
    const { data, error } = await supabase.auth.signUp({
      email: testEmail,
      password: testPassword,
      options: {
        data: {
          full_name: 'Usuário Teste'
        }
      }
    });
    
    if (error) {
      console.error('❌ Erro no cadastro de teste:', error);
      console.error('🔍 Detalhes do erro:', {
        message: error.message,
        status: error.status,
        name: error.name
      });
      return false;
    }
    
    console.log('✅ Cadastro de teste realizado com sucesso!');
    console.log('👤 Usuário criado:', data.user?.email);
    return true;
    
  } catch (error) {
    console.error('💥 Erro inesperado no teste de cadastro:', error);
    console.error('🔍 Tipo do erro:', typeof error);
    console.error('🔍 Stack trace:', error);
    return false;
  }
}

// Teste de fetch básico
export async function testBasicFetch() {
  console.log('🧪 Testando fetch básico...');
  
  try {
    const response = await fetch('https://httpbin.org/get');
    if (response.ok) {
      console.log('✅ Fetch básico funcionando!');
      return true;
    } else {
      console.error('❌ Fetch básico falhou:', response.status);
      return false;
    }
  } catch (error) {
    console.error('💥 Erro no fetch básico:', error);
    return false;
  }
}

// Executa os testes automaticamente
console.log('🚀 Iniciando testes de conectividade...');
testBasicFetch().then(fetchOk => {
  if (fetchOk) {
    testSupabaseConnection().then(supabaseOk => {
      if (supabaseOk) {
        testSupabaseSignUp();
      }
    });
  }
});
