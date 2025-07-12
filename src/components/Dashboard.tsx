import React, { useState } from 'react';
import { GameGrid } from './GameGrid';
import { GamePlayer } from './GamePlayer';
import { Game } from '../types';
import { games, gameCategories } from '../data/games';
import { useAuth } from '../contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Star, TrendingUp, Calendar, Users, Crown, Play } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('featured');
  const { isAuthenticated } = useAuth();

  const handlePlayGame = (game: Game) => {
    if (!isAuthenticated) {
      // This would be handled by the login dialog in the header
      return;
    }
    setSelectedGame(game);
    setIsPlayerOpen(true);
  };

  const handleClosePlayer = () => {
    setIsPlayerOpen(false);
    setSelectedGame(null);
  };

  const getCurrentCategoryGames = () => {
    const category = gameCategories.find(cat => cat.id === selectedCategory);
    return category?.games || [];
  };

  const stats = {
    totalGames: games.length,
    featuredGames: games.filter(g => g.featured).length,
    platforms: [...new Set(games.map(g => g.platform))].length,
    genres: [...new Set(games.map(g => g.genre))].length
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 mb-6">
            <div className="text-6xl">🕹️</div>
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                80s ARCADE LEGENDS
              </h1>
              <p className="text-xl text-gray-300 mt-2">
                Relive the Golden Age of Gaming
              </p>
            </div>
          </div>
          
          <div className="flex justify-center space-x-8 text-center">
            <div className="bg-gradient-to-r from-purple-900 to-indigo-900 p-4 rounded-lg border border-purple-500/50">
              <div className="text-2xl font-bold text-yellow-400">{stats.totalGames}+</div>
              <div className="text-sm text-gray-300">Classic Games</div>
            </div>
            <div className="bg-gradient-to-r from-blue-900 to-cyan-900 p-4 rounded-lg border border-blue-500/50">
              <div className="text-2xl font-bold text-blue-400">{stats.platforms}</div>
              <div className="text-sm text-gray-300">Platforms</div>
            </div>
            <div className="bg-gradient-to-r from-green-900 to-emerald-900 p-4 rounded-lg border border-green-500/50">
              <div className="text-2xl font-bold text-green-400">{stats.genres}</div>
              <div className="text-sm text-gray-300">Genres</div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-purple-900 to-indigo-900 border-purple-500/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-purple-200">Featured Games</CardTitle>
              <Star className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.featuredGames}</div>
              <p className="text-xs text-purple-300">Hand-picked classics</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-blue-900 to-cyan-900 border-blue-500/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-200">Most Popular</CardTitle>
              <TrendingUp className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">Pac-Man</div>
              <p className="text-xs text-blue-300">All-time favorite</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-green-900 to-emerald-900 border-green-500/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-200">Latest Added</CardTitle>
              <Calendar className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">Street Fighter</div>
              <p className="text-xs text-green-300">Fighting legend</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-orange-900 to-red-900 border-orange-500/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-orange-200">Active Players</CardTitle>
              <Users className="h-4 w-4 text-orange-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">2,847</div>
              <p className="text-xs text-orange-300">Playing now</p>
            </CardContent>
          </Card>
        </div>

        {/* Category Navigation */}
        <div className="bg-black/20 p-6 rounded-lg border border-gray-700 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Browse by Category</h2>
          <div className="flex flex-wrap gap-3">
            {gameCategories.map(category => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center space-x-2"
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
                <Badge variant="secondary" className="ml-2">
                  {category.games.length}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Games Quick Play */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Crown className="w-6 h-6 mr-2 text-yellow-400" />
            Featured Games
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {games.filter(g => g.featured).slice(0, 6).map(game => (
              <div
                key={game.id}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-3 border border-gray-700 hover:border-yellow-400 transition-all cursor-pointer"
                onClick={() => handlePlayGame(game)}
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">{game.platform === 'Arcade' ? '🕹️' : game.platform === 'Nintendo' ? '🎮' : '🎯'}</div>
                  <div className="text-sm font-bold text-white group-hover:text-yellow-400">
                    {game.title}
                  </div>
                  <div className="text-xs text-gray-400">{game.year}</div>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                  <Play className="w-8 h-8 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Category Games */}
        <GameGrid
          games={getCurrentCategoryGames()}
          onPlayGame={handlePlayGame}
          title={gameCategories.find(cat => cat.id === selectedCategory)?.name || 'Games'}
        />

        {/* Game Player */}
        <GamePlayer
          game={selectedGame}
          isOpen={isPlayerOpen}
          onClose={handleClosePlayer}
        />
      </div>
    </div>
  );
};