import { destroyToken } from "./JwtService";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const getToken = (): string | null => {
    const tokenData = localStorage.getItem('authToken');
    if (!tokenData) return null;
    try {
      const parsed = JSON.parse(tokenData);
      return parsed.token || null;
    } catch (e) {
      return null;
    }
  };
  

const saveToken = (token: string): void => {
  localStorage.setItem("authToken", token);
};

interface ApiResponse<T> {
  data: T;
  status: number;
}

class ApiService {
  // Função genérica para fazer requisições GET
  static async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    const token = getToken();
    console.log("Token de autenticação:", token); // Log do token

    if (!token) {
      throw new Error("Token de autenticação não encontrado");
    }

    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log("Resposta da API (GET):", data); // Log da resposta

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Token de autenticação expirado ou inválido");
        }
        throw new Error(data.message || "Erro ao buscar dados");
      }

      return {
        data,
        status: response.status,
      };
    } catch (error: any) {
      console.error(`Erro na requisição GET para ${endpoint}:`, error);
      throw error;
    }
  }


  // Função genérica para fazer requisições POST
  static async post<T, U>(endpoint: string, body: T): Promise<ApiResponse<U>> {
    const isAuthRoute = endpoint === "/auth/login";
    const token = isAuthRoute ? null : getToken();
    console.log("Token de autenticação:", token);

    if (!isAuthRoute && !token) {
      throw new Error("Token de autenticação não encontrado");
    }

    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: `Bearer ${token}` }),
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      console.log("Resposta da API (POST):", data);

      if (!response.ok) {
        if (response.status === 401) {
          destroyToken();
          throw new Error("Token de autenticação expirado ou inválido");
        }
        throw new Error(data.message || "Erro ao enviar dados");
      }

      if (isAuthRoute && data.token && data.user) {
        saveToken(JSON.stringify({ token: data.token, user: data.user }));
      }

      return {
        data,
        status: response.status,
      };
    } catch (error: any) {
      console.error(`Erro na requisição POST para ${endpoint}:`, error);
      throw error;
    }
  }

  // Função para logout
  static logout(): void {
    destroyToken();
    console.log("Usuário deslogado com sucesso.");
  }
}

export default ApiService;
