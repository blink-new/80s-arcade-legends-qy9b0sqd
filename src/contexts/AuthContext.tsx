import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
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
  }, []);

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

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('arcade-user');
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