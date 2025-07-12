import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Game } from '../types';
import { Play, Star, Calendar, Gamepad2 } from 'lucide-react';

interface GameCardProps {
  game: Game;
  onPlay: (game: Game) => void;
}

export const GameCard: React.FC<GameCardProps> = ({ game, onPlay }) => {
  return (
    <Card className="group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-2 border-gray-700 hover:border-yellow-400 overflow-hidden">
      <div className="relative">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop&crop=center&auto=format&q=80&text=${encodeURIComponent(game.title)}`;
          }}
        />
        
        {game.featured && (
          <div className="absolute top-2 right-2">
            <Badge className="bg-yellow-400 text-black font-bold">
              <Star className="w-3 h-3 mr-1" />
              Featured
            </Badge>
          </div>
        )}
        
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button
            onClick={() => onPlay(game)}
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold transform scale-110"
          >
            <Play className="w-5 h-5 mr-2" />
            Play Now
          </Button>
        </div>
      </div>
      
      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-bold text-white text-lg group-hover:text-yellow-400 transition-colors">
            {game.title}
          </h3>
          <p className="text-sm text-gray-400 line-clamp-2">
            {game.description}
          </p>
        </div>
        
        <div className="flex items-center space-x-4 text-sm text-gray-400">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{game.year}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Gamepad2 className="w-4 h-4" />
            <span>{game.platform}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="bg-purple-900 text-purple-200">
            {game.genre}
          </Badge>
          <div className="text-xs text-gray-500">
            {game.controls.join(', ')}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};