const ID_TOKEN_KEY = "id_token" as string;
const AUTH_USER = "auth_user" as string;

export interface User {
  id: number;
  email: string;
  roles: string[];
  api_token: string;
  responsavelId?: number;
}

/**
 * @description get token form localStorage
 */
export const getToken = (): { token: string | null; authUser: string | null } => {
  return {
    token: window.localStorage.getItem(ID_TOKEN_KEY),
    authUser: window.localStorage.getItem(AUTH_USER)
  };
};

/**
 * @description save token into localStorage
 * @param token: string
 * @param user: User
 */
export const saveToken = (token: string, user: User): void => {
  window.localStorage.setItem(ID_TOKEN_KEY, token);
  window.localStorage.setItem(AUTH_USER, JSON.stringify(user)); // Save the complete User object
};

/**
 * @description remove token form localStorage
 */
export const destroyToken = (): void => {
  window.localStorage.removeItem(ID_TOKEN_KEY);
  window.localStorage.removeItem(AUTH_USER);
};

/**
 * @description get user object from authUser
 */
export const getUser = (returnResponsavelIdOnly = false): User | number | null => {
  const authUser = window.localStorage.getItem(AUTH_USER);
  if (!authUser) return null;
  try {
    const user: Partial<User> = JSON.parse(authUser); // Use Partial to handle incomplete data
    if (returnResponsavelIdOnly) {
        return user.responsavelId ?? null; // Return responsavelId or null if not found
    }
    return user as User;
  } catch (error) {
    console.error("Error while parsing authUser:", error);
    return null;
  }
};

/**
 * @description get full user object from localStorage
 */
export const getFullUser = (): User | null => {
  const authUser = window.localStorage.getItem(AUTH_USER);
  if (!authUser) return null;
  try {
    return JSON.parse(authUser) as User; // Return the full User object
  } catch (error) {
    console.error("Error while parsing authUser:", error);
    return null;
  }
};

export default { getToken, saveToken, destroyToken, getFullUser };