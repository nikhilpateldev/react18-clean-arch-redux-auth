export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
}

export const authService = {
  async login(payload: LoginPayload): Promise<AuthResponse> {
    const mockUsers = [
      {
        email: 'admin@fleet.com',
        password: 'admin',
        token: 'mock-admin-jwt-token',
      },
      {
        email: 'manager@fleet.com',
        password: 'manager',
        token: 'mock-manager-jwt-token',
      },
    ];

    const matchedUser = mockUsers.find(
      (u) => u.email === payload.email && u.password === payload.password
    );
    debugger;
    await new Promise((res) => setTimeout(res, 600));

    if (matchedUser) {
      return {
        token: matchedUser.token,
      };
    }

    throw new Error('Invalid email or password');
  },

  logout() {
    localStorage.removeItem('fms_access_token');
  },
};
