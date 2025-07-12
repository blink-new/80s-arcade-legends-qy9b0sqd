import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  loginWithGoogle: () => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  subscribe: () => void;
  checkSubscription: () => boolean;
  isAdmin: () => boolean;
  startGameSession: () => boolean;
  getPlayTimeRemaining: () => number;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('arcade-user');
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser);
      setIsAuthenticated(true);
    }

    // Initialize Google Sign-In
    initializeGoogleSignIn();
  }, []);

  const initializeGoogleSignIn = () => {
    // Load Google Identity Services script
    if (!document.getElementById('google-identity-script')) {
      const script = document.createElement('script');
      script.id = 'google-identity-script';
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    // Admin check
    const isAdminUser = email === 'mick2575@gmail.com';
    
    // Simple authentication (in real app, would use proper auth)
    if (password.length >= 6) {
      const newUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        isSubscribed: isAdminUser, // Admin always has subscription
        isAdmin: isAdminUser,
        playtimeRemaining: isAdminUser ? Infinity : 300 // 5 minutes for non-subscribers
      };
      
      setUser(newUser);
      setIsAuthenticated(true);
      localStorage.setItem('arcade-user', JSON.stringify(newUser));
      return true;
    }
    return false;
  };

  const loginWithGoogle = async (): Promise<boolean> => {
    return new Promise((resolve) => {
      // Check if Google Identity Services is loaded
      if (typeof window.google === 'undefined') {
        console.error('Google Identity Services not loaded');
        resolve(false);
        return;
      }

      // Initialize Google Sign-In
      window.google.accounts.id.initialize({
        client_id: process.env.GOOGLE_CLIENT_ID || 'demo-client-id',
        callback: (response: { credential: string }) => {
          try {
            // Decode the JWT token to get user info
            const payload = JSON.parse(atob(response.credential.split('.')[1]));
            
            const isAdminUser = payload.email === 'mick2575@gmail.com';
            
            const newUser: User = {
              id: payload.sub,
              email: payload.email,
              isSubscribed: isAdminUser,
              isAdmin: isAdminUser,
              playtimeRemaining: isAdminUser ? Infinity : 300,
              googleId: payload.sub,
              name: payload.name,
              picture: payload.picture
            };
            
            setUser(newUser);
            setIsAuthenticated(true);
            localStorage.setItem('arcade-user', JSON.stringify(newUser));
            resolve(true);
          } catch (error) {
            console.error('Google sign-in error:', error);
            resolve(false);
          }
        },
        auto_select: false,
        cancel_on_tap_outside: true
      });

      // Prompt the user to sign in
      window.google.accounts.id.prompt((notification: { isNotDisplayed: () => boolean; isSkippedMoment: () => boolean }) => {
        if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
          console.log('Google Sign-In prompt not displayed');
          resolve(false);
        }
      });
    });
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('arcade-user');
    
    // Sign out from Google
    if (typeof window.google !== 'undefined') {
      window.google.accounts.id.disableAutoSelect();
    }
  };

  const subscribe = () => {
    if (user) {
      const updatedUser = {
        ...user,
        isSubscribed: true,
        subscriptionExpires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days
      };
      setUser(updatedUser);
      localStorage.setItem('arcade-user', JSON.stringify(updatedUser));
    }
  };

  const checkSubscription = (): boolean => {
    if (!user) return false;
    if (user.isAdmin) return true;
    if (!user.isSubscribed) return false;
    
    if (user.subscriptionExpires && user.subscriptionExpires < new Date()) {
      // Subscription expired
      const updatedUser = { ...user, isSubscribed: false };
      setUser(updatedUser);
      localStorage.setItem('arcade-user', JSON.stringify(updatedUser));
      return false;
    }
    
    return true;
  };

  const isAdmin = (): boolean => {
    return user?.isAdmin || false;
  };

  const startGameSession = (): boolean => {
    if (!user) return false;
    
    // Admin or subscribed users can play unlimited
    if (user.isAdmin || checkSubscription()) {
      return true;
    }
    
    // Free users have limited playtime
    if (user.playtimeRemaining && user.playtimeRemaining > 0) {
      return true;
    }
    
    return false;
  };

  const getPlayTimeRemaining = (): number => {
    if (!user) return 0;
    if (user.isAdmin || checkSubscription()) return Infinity;
    return user.playtimeRemaining || 0;
  };

  const contextValue: AuthContextType = {
    user,
    login,
    loginWithGoogle,
    logout,
    isAuthenticated,
    subscribe,
    checkSubscription,
    isAdmin,
    startGameSession,
    getPlayTimeRemaining
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

// Extend window type for Google Identity Services
declare global {
  interface Window {
    google: {
      accounts: {
        id: {
          initialize: (config: { client_id: string; callback: (response: { credential: string }) => void; auto_select: boolean; cancel_on_tap_outside: boolean }) => void;
          prompt: (callback?: (notification: { isNotDisplayed: () => boolean; isSkippedMoment: () => boolean }) => void) => void;
          disableAutoSelect: () => void;
        };
      };
    };
  }
}