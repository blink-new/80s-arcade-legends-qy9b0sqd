import React, { useState } from 'react';
import { GameCard } from './GameCard';
import { Game } from '../types';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Search, Filter, Grid3X3, List } from 'lucide-react';

interface GameGridProps {
  games: Game[];
  onPlayGame: (game: Game) => void;
  title?: string;
  showSearch?: boolean;
}

export const GameGrid: React.FC<GameGridProps> = ({ 
  games, 
  onPlayGame, 
  title = "Games", 
  showSearch = true 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<string>('');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Get unique genres and platforms
  const genres = [...new Set(games.map(game => game.genre))];
  const platforms = [...new Set(games.map(game => game.platform))];

  // Filter games
  const filteredGames = games.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         game.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = !selectedGenre || game.genre === selectedGenre;
    const matchesPlatform = !selectedPlatform || game.platform === selectedPlatform;
    
    return matchesSearch && matchesGenre && matchesPlatform;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-gray-400 mt-1">
            {filteredGames.length} game{filteredGames.length !== 1 ? 's' : ''} available
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('grid')}
          >
            <Grid3X3 className="w-4 h-4" />
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('list')}
          >
            <List className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      {showSearch && (
        <div className="bg-black/20 p-4 rounded-lg border border-gray-700">
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search games..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-black/20 border-gray-600 text-white placeholder-gray-400"
              />
            </div>

            {/* Genre Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant={selectedGenre === '' ? 'default' : 'secondary'}
                  className="cursor-pointer"
                  onClick={() => setSelectedGenre('')}
                >
                  All Genres
                </Badge>
                {genres.map(genre => (
                  <Badge
                    key={genre}
                    variant={selectedGenre === genre ? 'default' : 'secondary'}
                    className="cursor-pointer"
                    onClick={() => setSelectedGenre(genre)}
                  >
                    {genre}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Platform Filter */}
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={selectedPlatform === '' ? 'default' : 'secondary'}
                className="cursor-pointer"
                onClick={() => setSelectedPlatform('')}
              >
                All Platforms
              </Badge>
              {platforms.map(platform => (
                <Badge
                  key={platform}
                  variant={selectedPlatform === platform ? 'default' : 'secondary'}
                  className="cursor-pointer"
                  onClick={() => setSelectedPlatform(platform)}
                >
                  {platform}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Games Grid */}
      {filteredGames.length > 0 ? (
        <div className={viewMode === 'grid' 
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" 
          : "space-y-4"
        }>
          {filteredGames.map(game => (
            <GameCard
              key={game.id}
              game={game}
              onPlay={onPlayGame}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🎮</div>
          <h3 className="text-xl font-bold text-gray-300 mb-2">No games found</h3>
          <p className="text-gray-500">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
};