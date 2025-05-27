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
  message: string;
  success: any;
  data: T;
  status: number;
}

class authService {
  // Função genérica para fazer requisições POST
  static async post<T, U>(endpoint: string, body: T): Promise<ApiResponse<U>> {
    const isAuthRoute = endpoint === "/auth/login";
    const token = isAuthRoute ? null : getToken();

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

export default authService;
