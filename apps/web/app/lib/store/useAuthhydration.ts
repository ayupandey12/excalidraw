import { useState, useEffect } from 'react';
import { AuthState, useAuthStore } from './useAuthStore';


export function useAuthHydrated():AuthState{
  const [hydrated, setHydrated] = useState(false);
  const store = useAuthStore();

  useEffect(() => {
    setHydrated(true);
  }, []);

  return hydrated ? store : { ...store, user: null, token: null,isInitialized: false };
}
