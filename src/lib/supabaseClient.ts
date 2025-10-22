import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Log das configurações para debug
console.log('🔧 Configuração do Supabase:', {
  url: supabaseUrl ? `${supabaseUrl.substring(0, 30)}...` : 'NÃO DEFINIDA',
  hasKey: !!supabaseAnonKey,
  keyLength: supabaseAnonKey?.length || 0
});

// Verifica se as variáveis estão definidas
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Variáveis de ambiente do Supabase não encontradas!');
  console.error('📝 Certifique-se de criar o arquivo .env.local com:');
  console.error('   VITE_SUPABASE_URL=sua_url_do_supabase');
  console.error('   VITE_SUPABASE_ANON_KEY=sua_chave_anonima');
  throw new Error('Variáveis de ambiente do Supabase não encontradas');
}

// Cria o cliente com configurações específicas para resolver problemas de CORS
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  },
  global: {
    headers: {
      'X-Client-Info': 'supabase-js-web'
    }
  }
})

console.log('✅ Cliente Supabase inicializado com sucesso!');
console.log('🔍 Cliente criado:', supabase);
