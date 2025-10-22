// Teste direto com fetch para verificar conectividade
export async function testDirectFetch() {
  console.log('🧪 Testando fetch direto para Supabase...');
  
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
  
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('❌ Variáveis de ambiente não encontradas!');
    return false;
  }
  
  try {
    // Teste 1: Verificar se a URL está acessível
    console.log('📡 Teste 1: Verificando URL do Supabase...');
    console.log('🌐 URL:', supabaseUrl);
    
    // Teste 2: Tentar uma requisição direta para a API do Supabase
    console.log('📡 Teste 2: Fazendo requisição direta para Supabase...');
    
    const response = await fetch(`${supabaseUrl}/rest/v1/`, {
      method: 'GET',
      headers: {
        'apikey': supabaseAnonKey,
        'Authorization': `Bearer ${supabaseAnonKey}`,
        'Content-Type': 'application/json'
      }
    });
    
    console.log('📊 Status da resposta:', response.status);
    console.log('📊 Headers da resposta:', Object.fromEntries(response.headers.entries()));
    
    if (response.ok) {
      console.log('✅ Conexão com Supabase bem-sucedida!');
      const text = await response.text();
      console.log('📄 Resposta:', text.substring(0, 200) + '...');
      return true;
    } else {
      console.error('❌ Erro na resposta:', response.status, response.statusText);
      const errorText = await response.text();
      console.error('📄 Texto do erro:', errorText);
      return false;
    }
    
  } catch (error) {
    console.error('💥 Erro no fetch direto:', error);
    console.error('🔍 Tipo do erro:', typeof error);
    console.error('🔍 Mensagem:', error instanceof Error ? error.message : 'Erro desconhecido');
    return false;
  }
}

// Executa o teste automaticamente
testDirectFetch();
