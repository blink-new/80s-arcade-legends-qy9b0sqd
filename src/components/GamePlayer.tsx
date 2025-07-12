import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Game } from '../types';
import { useAuth } from '../contexts/AuthContext';
import { X, Pause, Play, RotateCcw, Settings, Timer, Crown } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { EmulatorEngine } from './EmulatorEngine';

interface GamePlayerProps {
  game: Game | null;
  isOpen: boolean;
  onClose: () => void;
}

export const GamePlayer: React.FC<GamePlayerProps> = ({ game, isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(300); // 5 minutes
  const [gameStarted, setGameStarted] = useState(false);
  const { user, checkSubscription, isAdmin, getPlayTimeRemaining } = useAuth();

  const isSubscribed = checkSubscription();
  const hasUnlimitedTime = isAdmin() || isSubscribed;

  useEffect(() => {
    if (isOpen && game) {
      setGameStarted(false);
      setIsPlaying(false);
      setTimeRemaining(getPlayTimeRemaining());
    }
  }, [isOpen, game, getPlayTimeRemaining]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (isPlaying && !hasUnlimitedTime && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            setIsPlaying(false);
            toast.error('Time limit reached! Subscribe for unlimited play.');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, hasUnlimitedTime, timeRemaining]);

  const handleStartGame = () => {
    if (!user) {
      toast.error('Please sign in to play games');
      return;
    }

    if (!hasUnlimitedTime && timeRemaining <= 0) {
      toast.error('Time limit reached! Subscribe for unlimited play.');
      return;
    }

    setGameStarted(true);
    setIsPlaying(true);
    toast.success(`Starting ${game?.title}!`);
  };

  const handlePause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleRestart = () => {
    if (!hasUnlimitedTime && timeRemaining <= 0) {
      toast.error('Time limit reached! Subscribe for unlimited play.');
      return;
    }
    setIsPlaying(true);
    toast.success('Game restarted!');
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!game) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-full h-[90vh] bg-black border-2 border-yellow-400 p-0">
        <DialogHeader className="p-4 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              {game.title} ({game.year})
            </DialogTitle>
            
            <div className="flex items-center space-x-4">
              {/* Time Display */}
              <div className="flex items-center space-x-2 bg-black/20 px-3 py-1 rounded-full">
                <Timer className="w-4 h-4" />
                <span className="text-sm font-mono">
                  {hasUnlimitedTime ? 'Unlimited' : formatTime(timeRemaining)}
                </span>
              </div>

              {/* Premium Badge */}
              {hasUnlimitedTime && (
                <div className="flex items-center space-x-1 bg-green-500/20 px-3 py-1 rounded-full border border-green-500/50">
                  <Crown className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-semibold">PREMIUM</span>
                </div>
              )}

              <Button
                onClick={onClose}
                variant="outline"
                size="sm"
                className="border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-black"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        <div className="flex-1 p-4 space-y-4">
          {/* Game Controls */}
          <div className="flex items-center justify-between bg-gray-900 p-3 rounded-lg">
            <div className="flex items-center space-x-3">
              <Button
                onClick={gameStarted ? handlePause : handleStartGame}
                className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600"
                disabled={!hasUnlimitedTime && timeRemaining <= 0}
              >
                {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                {gameStarted ? (isPlaying ? 'Pause' : 'Resume') : 'Start Game'}
              </Button>
              
              <Button
                onClick={handleRestart}
                variant="outline"
                disabled={!gameStarted || (!hasUnlimitedTime && timeRemaining <= 0)}
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Restart
              </Button>
              
              <Button variant="outline" disabled>
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>

            <div className="text-sm text-gray-400">
              <span className="font-semibold">Platform:</span> {game.platform} | 
              <span className="font-semibold"> Genre:</span> {game.genre} |
              <span className="font-semibold"> Controls:</span> {game.controls.join(', ')}
            </div>
          </div>

          {/* Game Area */}
          <div className="bg-gray-900 rounded-lg p-4 min-h-[400px]">
            {!gameStarted ? (
              <div className="flex flex-col items-center justify-center h-full space-y-6 p-8">
                <div className="text-6xl mb-4">🕹️</div>
                <h3 className="text-2xl font-bold text-white mb-2">{game.title}</h3>
                <p className="text-gray-400 max-w-md text-center">{game.description}</p>
                
                {!hasUnlimitedTime && (
                  <div className="bg-orange-900/30 p-4 rounded-lg border border-orange-500/50 max-w-md">
                    <p className="text-orange-200 text-sm">
                      ⏱️ <strong>Free Trial:</strong> {formatTime(timeRemaining)} remaining
                    </p>
                    <p className="text-orange-300 text-xs mt-2">
                      Subscribe for unlimited play time on all games!
                    </p>
                  </div>
                )}
                
                <Button
                  onClick={handleStartGame}
                  className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold text-lg px-8 py-3"
                  disabled={!hasUnlimitedTime && timeRemaining <= 0}
                >
                  <Play className="w-5 h-5 mr-2" />
                  Start Playing
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Emulator Engine */}
                <EmulatorEngine 
                  game={game}
                  isPlaying={isPlaying}
                  onGameStateChange={(state) => {
                    // Handle game state changes if needed
                    console.log('Game state:', state);
                  }}
                />
                
                {!hasUnlimitedTime && timeRemaining <= 60 && (
                  <div className="bg-red-900/30 p-3 rounded-lg border border-red-500/50">
                    <p className="text-red-200 text-sm text-center">
                      ⚠️ Less than 1 minute remaining!
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};