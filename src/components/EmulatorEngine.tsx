import React, { useEffect, useRef, useState } from 'react';
import { Game } from '../types';
import { Button } from './ui/button';
import { Gamepad2, Keyboard, Volume2, VolumeX, Maximize2, Minimize2 } from 'lucide-react';

// Helper functions for game rendering - moved outside component for performance
const renderArcadeGame = (ctx: CanvasRenderingContext2D, game: Game) => {
  // Pac-Man style maze
  if (game.id === 'pac-man') {
    // Draw maze
    ctx.strokeStyle = '#00f';
    ctx.lineWidth = 2;
    for (let x = 0; x < 640; x += 40) {
      for (let y = 0; y < 480; y += 40) {
        ctx.strokeRect(x, y, 40, 40);
      }
    }
    
    // Draw Pac-Man
    ctx.fillStyle = '#ff0';
    ctx.beginPath();
    ctx.arc(100, 100, 15, 0.2 * Math.PI, 1.8 * Math.PI);
    ctx.lineTo(100, 100);
    ctx.fill();
    
    // Draw dots
    ctx.fillStyle = '#fff';
    for (let x = 20; x < 640; x += 40) {
      for (let y = 20; y < 480; y += 40) {
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, 2 * Math.PI);
        ctx.fill();
      }
    }
  } else if (game.id === 'space-invaders') {
    // Space Invaders grid
    ctx.fillStyle = '#0f0';
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 10; col++) {
        const x = 50 + col * 50;
        const y = 50 + row * 30;
        ctx.fillRect(x, y, 30, 20);
      }
    }
    
    // Player ship
    ctx.fillStyle = '#fff';
    ctx.fillRect(300, 450, 40, 20);
  } else {
    // Generic arcade game
    ctx.fillStyle = '#f0f';
    ctx.fillRect(280, 200, 80, 80);
    ctx.fillStyle = '#fff';
    ctx.font = '12px monospace';
    ctx.fillText('ARCADE', 290, 245);
  }
};

const renderNintendoGame = (ctx: CanvasRenderingContext2D, game: Game) => {
  // Mario-style platformer
  if (game.id.includes('mario')) {
    // Sky
    ctx.fillStyle = '#87CEEB';
    ctx.fillRect(0, 0, 640, 320);
    
    // Ground
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(0, 320, 640, 160);
    
    // Mario (simple rectangle)
    ctx.fillStyle = '#f00';
    ctx.fillRect(100, 280, 20, 40);
    
    // Blocks
    ctx.fillStyle = '#8B4513';
    for (let i = 0; i < 10; i++) {
      ctx.fillRect(200 + i * 40, 240, 30, 30);
    }
    
    // Pipes
    ctx.fillStyle = '#0f0';
    ctx.fillRect(500, 240, 40, 80);
  } else {
    // Generic Nintendo game
    ctx.fillStyle = '#f00';
    ctx.fillRect(280, 200, 80, 80);
    ctx.fillStyle = '#fff';
    ctx.font = '12px monospace';
    ctx.fillText('NINTENDO', 285, 245);
  }
};

const renderAtariGame = (ctx: CanvasRenderingContext2D, game: Game) => {
  // Simple Atari-style graphics
  if (game.id === 'pong') {
    // Pong simulation
    ctx.strokeStyle = '#fff';
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(320, 0);
    ctx.lineTo(320, 480);
    ctx.stroke();
    
    // Paddles
    ctx.fillStyle = '#fff';
    ctx.fillRect(20, 200, 10, 80);
    ctx.fillRect(610, 200, 10, 80);
    
    // Ball
    ctx.beginPath();
    ctx.arc(320, 240, 5, 0, 2 * Math.PI);
    ctx.fill();
  } else {
    // Generic Atari game
    ctx.fillStyle = '#ff0';
    ctx.fillRect(280, 200, 80, 80);
    ctx.fillStyle = '#000';
    ctx.font = '12px monospace';
    ctx.fillText('ATARI', 295, 245);
  }
};

const renderPinballGame = (ctx: CanvasRenderingContext2D, game: Game) => {
  // Pinball table
  ctx.fillStyle = '#006400';
  ctx.fillRect(0, 0, 640, 480);
  
  // Flippers
  ctx.fillStyle = '#c0c0c0';
  ctx.fillRect(150, 420, 60, 10);
  ctx.fillRect(430, 420, 60, 10);
  
  // Ball
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.arc(320, 300, 8, 0, 2 * Math.PI);
  ctx.fill();
  
  // Bumpers
  ctx.fillStyle = '#f00';
  ctx.beginPath();
  ctx.arc(200, 150, 20, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(440, 150, 20, 0, 2 * Math.PI);
  ctx.fill();
  
  // Score display
  ctx.fillStyle = '#000';
  ctx.font = '20px monospace';
  ctx.fillText(game.title.toUpperCase(), 200, 50);
};

const renderSegaGame = (ctx: CanvasRenderingContext2D, game: Game) => {
  // Sonic-style game
  if (game.id.includes('sonic')) {
    // Sky
    ctx.fillStyle = '#00BFFF';
    ctx.fillRect(0, 0, 640, 320);
    
    // Ground with checkerboard pattern
    for (let x = 0; x < 640; x += 40) {
      for (let y = 320; y < 480; y += 40) {
        ctx.fillStyle = ((x + y) / 40) % 2 ? '#8B4513' : '#DAA520';
        ctx.fillRect(x, y, 40, 40);
      }
    }
    
    // Sonic (blue circle)
    ctx.fillStyle = '#0000ff';
    ctx.beginPath();
    ctx.arc(100, 280, 20, 0, 2 * Math.PI);
    ctx.fill();
    
    // Rings
    ctx.strokeStyle = '#ffd700';
    ctx.lineWidth = 3;
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.arc(200 + i * 80, 280, 10, 0, 2 * Math.PI);
      ctx.stroke();
    }
  } else {
    // Generic Sega game
    ctx.fillStyle = '#00f';
    ctx.fillRect(280, 200, 80, 80);
    ctx.fillStyle = '#fff';
    ctx.font = '12px monospace';
    ctx.fillText('SEGA', 300, 245);
  }
};

const renderGenericGame = (ctx: CanvasRenderingContext2D, game: Game) => {
  // Default game rendering
  ctx.fillStyle = '#333';
  ctx.fillRect(200, 150, 240, 180);
  ctx.fillStyle = '#fff';
  ctx.font = '16px monospace';
  ctx.fillText('Game Loading...', 260, 250);
  ctx.font = '12px monospace';
  ctx.fillText(game.title, 260, 280);
};

const renderGameContent = (
  ctx: CanvasRenderingContext2D, 
  game: Game, 
  score: number
) => {
  // Simulate different game types
  switch (game.platform) {
    case 'Arcade':
      renderArcadeGame(ctx, game);
      break;
    case 'Nintendo':
      renderNintendoGame(ctx, game);
      break;
    case 'Atari':
      renderAtariGame(ctx, game);
      break;
    case 'Pinball':
      renderPinballGame(ctx, game);
      break;
    case 'Sega':
      renderSegaGame(ctx, game);
      break;
    default:
      renderGenericGame(ctx, game);
  }

  // Always show score and game info
  ctx.fillStyle = '#fff';
  ctx.font = '16px monospace';
  ctx.fillText(`Score: ${score}`, 10, 30);
  ctx.fillText(game.title, 10, 460);
};

interface EmulatorEngineProps {
  game: Game;
  isPlaying: boolean;
  onGameStateChange?: (state: 'loading' | 'playing' | 'paused' | 'error') => void;
}

export const EmulatorEngine: React.FC<EmulatorEngineProps> = ({ 
  game, 
  isPlaying, 
  onGameStateChange 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState<'loading' | 'playing' | 'paused' | 'error'>('loading');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [controllerConnected, setControllerConnected] = useState(false);
  const [, setKeys] = useState<Set<string>>(new Set());

  // Game loop and rendering
  useEffect(() => {
    if (!canvasRef.current || !isPlaying) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 640;
    canvas.height = 480;

    let animationId: number;
    const score = 0;

    const gameLoop = () => {
      // Clear canvas
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      // Game-specific rendering
      renderGameContent(ctx, game, score);

      animationId = requestAnimationFrame(gameLoop);
    };

    // Initialize game rendering
    setGameState('playing');
    onGameStateChange?.('playing');
    gameLoop();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      setGameState('paused');
    };
  }, [game, isPlaying, onGameStateChange]);

  // Keyboard input handling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKeys(prev => new Set(prev).add(e.code));
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      setKeys(prev => {
        const newKeys = new Set(prev);
        newKeys.delete(e.code);
        return newKeys;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // Controller detection
  useEffect(() => {
    const checkGamepads = () => {
      const gamepads = navigator.getGamepads();
      const connected = Array.from(gamepads).some(gamepad => gamepad !== null);
      setControllerConnected(connected);
    };

    window.addEventListener('gamepadconnected', checkGamepads);
    window.addEventListener('gamepaddisconnected', checkGamepads);
    
    // Initial check
    checkGamepads();

    return () => {
      window.removeEventListener('gamepadconnected', checkGamepads);
      window.removeEventListener('gamepaddisconnected', checkGamepads);
    };
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      canvasRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div className="relative bg-black rounded-lg overflow-hidden">
      {/* Game Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-auto max-h-[500px] object-contain"
        style={{ imageRendering: 'pixelated' }}
      />
      
      {/* Game Controls Overlay */}
      <div className="absolute top-2 right-2 flex space-x-2">
        <Button
          size="sm"
          variant="outline"
          onClick={() => setIsMuted(!isMuted)}
          className="bg-black/50 border-gray-600 text-white hover:bg-gray-700"
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </Button>
        
        <Button
          size="sm"
          variant="outline"
          onClick={toggleFullscreen}
          className="bg-black/50 border-gray-600 text-white hover:bg-gray-700"
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </Button>
      </div>
      
      {/* Status Indicators */}
      <div className="absolute bottom-2 left-2 flex items-center space-x-3">
        <div className={`flex items-center space-x-1 px-2 py-1 rounded text-xs ${
          gameState === 'playing' ? 'bg-green-600' : 
          gameState === 'loading' ? 'bg-yellow-600' : 
          gameState === 'paused' ? 'bg-orange-600' : 'bg-red-600'
        }`}>
          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-white font-semibold">{gameState.toUpperCase()}</span>
        </div>
        
        {controllerConnected && (
          <div className="flex items-center space-x-1 bg-blue-600 px-2 py-1 rounded text-xs">
            <Gamepad2 className="w-3 h-3 text-white" />
            <span className="text-white text-xs">CONTROLLER</span>
          </div>
        )}
        
        <div className="flex items-center space-x-1 bg-purple-600 px-2 py-1 rounded text-xs">
          <Keyboard className="w-3 h-3 text-white" />
          <span className="text-white text-xs">KEYBOARD</span>
        </div>
      </div>
      
      {/* Controls Help */}
      <div className="absolute bottom-2 right-2 text-xs text-gray-400 bg-black/70 p-2 rounded">
        <div>Controls: {game.controls.join(', ')}</div>
        <div>Emulator: {game.emulator.toUpperCase()}</div>
      </div>
    </div>
  );
};