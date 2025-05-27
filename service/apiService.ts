import { destroyToken } from "./JwtService";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const getToken = (): string | null => {
  const tokenData = localStorage.getItem("authToken");
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
  message: string;
  success: any;
  data: T;
  status: number;
}

class ApiService {
  // Função genérica para fazer requisições GET
  static async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    const token = getToken();

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

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Token de autenticação expirado ou inválido");
        }
        throw new Error(data.message || "Erro ao buscar dados");
      }

      return {
        message: "",
        success: true,
        data,
        status: response.status,
      };
    } catch (error: any) {
      throw error;
    }
  }

  // Função genérica para fazer requisições POST
  static async post<T, U>(
    endpoint: string,
    body: T,
    requiresAuth = false
  ): Promise<ApiResponse<U>> {
    try {
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };

      // Adiciona o token apenas se a autenticação for necessária
      if (requiresAuth) {
        const token = getToken();
        if (!token) {
          throw new Error("Token de autenticação não encontrado");
        }
        headers["Authorization"] = `Bearer ${token}`;
      }

      const response = await fetch(`${API_URL}${endpoint}`, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erro ao enviar dados");
      }

      return {
        message: "",
        success: true,
        data,
        status: response.status,
      };
    } catch (error: any) {
      throw error;
    }
  }

  // Função para logout
  static logout(): void {
    destroyToken();
  }
}

export default ApiService;
