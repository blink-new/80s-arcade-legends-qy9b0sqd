import React, { useState } from 'react';
import { Button } from './ui/button';
import { useAuth } from '../contexts/AuthContext';
import { LoginDialog } from './LoginDialog';
import { SubscriptionDialog } from './SubscriptionDialog';
import { ControllerSetup } from './ControllerSetup';
import { Timer, User, LogOut, Settings, Crown, Gamepad2 } from 'lucide-react';

export const Header: React.FC = () => {
  const { user, isAuthenticated, logout, checkSubscription, isAdmin, getPlayTimeRemaining } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [showSubscription, setShowSubscription] = useState(false);
  const [showControllerSetup, setShowControllerSetup] = useState(false);
  
  const playTimeRemaining = getPlayTimeRemaining();
  const isSubscribed = checkSubscription();

  const formatTime = (seconds: number): string => {
    if (seconds === Infinity) return 'Unlimited';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <header className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white shadow-2xl border-b-4 border-yellow-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center font-bold text-xl">
                🕹️
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  80s ARCADE LEGENDS
                </h1>
                <p className="text-xs text-gray-300">Classic Retro Games</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Controller Setup Button - Available to all users */}
            <Button
              onClick={() => setShowControllerSetup(true)}
              variant="outline"
              size="sm"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black"
            >
              <Gamepad2 className="w-4 h-4 mr-2" />
              Controllers
            </Button>

            {isAuthenticated ? (
              <>
                {/* Play Time Display */}
                <div className="flex items-center space-x-2 bg-black/20 px-3 py-1 rounded-full">
                  <Timer className="w-4 h-4" />
                  <span className="text-sm font-mono">
                    {formatTime(playTimeRemaining)}
                  </span>
                </div>

                {/* Subscription Status */}
                {isSubscribed ? (
                  <div className="flex items-center space-x-2 bg-green-500/20 px-3 py-1 rounded-full border border-green-500/50">
                    <Crown className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm font-semibold">PREMIUM</span>
                  </div>
                ) : (
                  <Button
                    onClick={() => setShowSubscription(true)}
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold"
                  >
                    Subscribe $4.95/mo
                  </Button>
                )}

                {/* User Info */}
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span className="text-sm">
                    {user?.name || user?.email}
                    {isAdmin() && (
                      <span className="ml-2 text-xs bg-red-500 px-2 py-1 rounded-full">
                        ADMIN
                      </span>
                    )}
                  </span>
                </div>

                {/* Admin Panel */}
                {isAdmin() && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Admin
                  </Button>
                )}

                {/* Logout */}
                <Button
                  onClick={logout}
                  variant="outline"
                  size="sm"
                  className="border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-black"
                >
                  <LogOut className="w-4 h-4" />
                </Button>
              </>
            ) : (
              <Button
                onClick={() => setShowLogin(true)}
                className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold"
              >
                Sign In
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Login Dialog */}
      <LoginDialog
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
      />

      {/* Subscription Dialog */}
      <SubscriptionDialog
        isOpen={showSubscription}
        onClose={() => setShowSubscription(false)}
      />

      {/* Controller Setup Dialog */}
      <ControllerSetup
        isOpen={showControllerSetup}
        onClose={() => setShowControllerSetup(false)}
      />
    </header>
  );
};