const TOKEN_KEY = 'fms_access_token';

export const tokenStorage = {
  get: () => (typeof localStorage !== 'undefined' ? localStorage.getItem(TOKEN_KEY) : null),
  set: (token: string) => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(TOKEN_KEY, token);
    }
  },
  clear: () => {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(TOKEN_KEY);
    }
  },
};
