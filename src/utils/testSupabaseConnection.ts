// Teste específico para verificar conexão com Supabase
import { supabase } from '../lib/supabaseClient';

export async function testSupabaseConnection() {
  console.log('🧪 Testando conexão específica com Supabase...');
  
  try {
    // Teste 1: Verificar se o cliente está funcionando
    console.log('📡 Teste 1: Verificando cliente Supabase...');
    console.log('🔍 Cliente:', supabase);
    console.log('🔍 URL do cliente:', supabase.supabaseUrl);
    console.log('🔍 Headers:', supabase.supabaseKey ? 'Chave presente' : 'Chave ausente');
    
    // Teste 2: Tentar uma requisição simples
    console.log('📡 Teste 2: Fazendo requisição getSession...');
    const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
    
    if (sessionError) {
      console.error('❌ Erro na requisição getSession:', sessionError);
      console.error('🔍 Detalhes do erro:', {
        message: sessionError.message,
        status: sessionError.status,
        name: sessionError.name
      });
      return false;
    }
    
    console.log('✅ Requisição getSession bem-sucedida!');
    console.log('📊 Dados da sessão:', sessionData);
    
    // Teste 3: Tentar uma requisição de cadastro
    console.log('📡 Teste 3: Testando cadastro...');
    const testEmail = `teste-${Date.now()}@exemplo.com`;
    const testPassword = '123456';
    
    console.log('📤 Tentando cadastrar:', testEmail);
    
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email: testEmail,
      password: testPassword,
      options: {
        data: {
          full_name: 'Teste Usuário'
        }
      }
    });
    
    if (signUpError) {
      console.error('❌ Erro no cadastro de teste:', signUpError);
      console.error('🔍 Detalhes do erro:', {
        message: signUpError.message,
        status: signUpError.status,
        name: signUpError.name
      });
      return false;
    }
    
    console.log('✅ Cadastro de teste bem-sucedido!');
    console.log('👤 Usuário criado:', signUpData.user?.email);
    
    return true;
    
  } catch (error) {
    console.error('💥 Erro inesperado no teste:', error);
    console.error('🔍 Tipo do erro:', typeof error);
    console.error('🔍 Stack trace:', error);
    return false;
  }
}

// Executa o teste automaticamente
testSupabaseConnection();
