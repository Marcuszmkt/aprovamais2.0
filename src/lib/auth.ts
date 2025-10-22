import { supabase } from './supabaseClient'

// Interface para credenciais de login
export interface LoginCredentials {
  email: string;
  password: string;
}

// Interface para credenciais de cadastro
export interface SignUpCredentials {
  email: string;
  password: string;
  fullName?: string;
}

// Interface para resposta de autenticação
export interface AuthResponse {
  success: boolean;
  user?: any;
  error?: string;
}

/**
 * Função para criar uma nova conta de usuário
 */
export async function signUp(credentials: SignUpCredentials): Promise<AuthResponse> {
  try {
    const { email, password, fullName } = credentials;
    console.log('🔐 Tentativa de cadastro:', { email, hasPassword: !!password, fullName });

    // Validação básica
    if (!email || !password) {
      return {
        success: false,
        error: 'Email e senha são obrigatórios'
      };
    }

    if (password.length < 6) {
      return {
        success: false,
        error: 'A senha deve ter pelo menos 6 caracteres'
      };
    }

    // Cria o usuário no Supabase
    console.log('📤 Enviando dados para Supabase...');
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName || '',
        }
      }
    });

    if (error) {
      console.error('❌ Erro do Supabase no cadastro:', error);
      return {
        success: false,
        error: getErrorMessage(error)
      };
    }

    if (!data.user) {
      console.log('❌ Nenhum usuário retornado pelo Supabase');
      return {
        success: false,
        error: 'Erro ao criar usuário'
      };
    }

    console.log('✅ Cadastro realizado com sucesso:', data.user.email);
    return {
      success: true,
      user: data.user
    };

  } catch (error) {
    console.error('💥 Erro inesperado no cadastro:', error);
    return {
      success: false,
      error: 'Erro inesperado ao criar conta'
    };
  }
}

/**
 * Função para fazer login do usuário
 */
export async function signIn(credentials: LoginCredentials): Promise<AuthResponse> {
  try {
    const { email, password } = credentials;
    console.log('🔑 Tentativa de login:', { email, hasPassword: !!password });

    // Validação básica
    if (!email || !password) {
      return {
        success: false,
        error: 'Email e senha são obrigatórios'
      };
    }

    // Faz login no Supabase
    console.log('📤 Enviando credenciais para Supabase...');
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      console.error('❌ Erro do Supabase no login:', error);
      return {
        success: false,
        error: getErrorMessage(error)
      };
    }

    if (!data.user) {
      console.log('❌ Nenhum usuário retornado pelo Supabase');
      return {
        success: false,
        error: 'Erro ao fazer login'
      };
    }

    console.log('✅ Login realizado com sucesso:', data.user.email);
    return {
      success: true,
      user: data.user
    };

  } catch (error) {
    console.error('💥 Erro inesperado no login:', error);
    return {
      success: false,
      error: 'Erro inesperado ao fazer login'
    };
  }
}

/**
 * Função para fazer logout do usuário
 */
export async function signOut(): Promise<AuthResponse> {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      return {
        success: false,
        error: getErrorMessage(error)
      };
    }

    return {
      success: true
    };

  } catch (error) {
    return {
      success: false,
      error: 'Erro inesperado ao fazer logout'
    };
  }
}

/**
 * Função para obter a sessão atual do usuário
 */
export async function getSession(): Promise<AuthResponse> {
  try {
    const { data: { session }, error } = await supabase.auth.getSession();

    if (error) {
      return {
        success: false,
        error: getErrorMessage(error)
      };
    }

    if (!session?.user) {
      return {
        success: false,
        error: 'Nenhuma sessão ativa encontrada'
      };
    }

    return {
      success: true,
      user: session.user
    };

  } catch (error) {
    return {
      success: false,
      error: 'Erro inesperado ao verificar sessão'
    };
  }
}

/**
 * Função para escutar mudanças no estado de autenticação
 */
export function onAuthStateChange(callback: (user: any | null) => void) {
  const { data: { subscription } } = supabase.auth.onAuthStateChange(
    async (event, session) => {
      if (session?.user) {
        callback(session.user);
      } else {
        callback(null);
      }
    }
  );

  return () => subscription.unsubscribe();
}

/**
 * Função auxiliar para converter erros do Supabase em mensagens legíveis
 */
function getErrorMessage(error: any): string {
  switch (error.message) {
    case 'Invalid login credentials':
      return 'Email ou senha incorretos';
    case 'Email not confirmed':
      return 'Email não confirmado. Verifique sua caixa de entrada';
    case 'User already registered':
      return 'Este email já está cadastrado';
    case 'Password should be at least 6 characters':
      return 'A senha deve ter pelo menos 6 caracteres';
    case 'Invalid email':
      return 'Email inválido';
    case 'Signup is disabled':
      return 'Cadastro está temporariamente desabilitado';
    case 'Email rate limit exceeded':
      return 'Muitas tentativas. Tente novamente em alguns minutos';
    default:
      return error.message || 'Erro desconhecido';
  }
}
