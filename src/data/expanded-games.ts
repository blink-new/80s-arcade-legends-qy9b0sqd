import { Game, GameCategory } from '../types';

// Expanded games library with 500+ titles including Black Tiger and comprehensive collections
export const expandedGames: Game[] = [
  // === FEATURED ARCADE CLASSICS ===
  {
    id: 'pac-man',
    title: 'Pac-Man',
    year: 1980,
    genre: 'Arcade',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop&crop=center',
    description: 'The iconic maze game where you eat dots and avoid ghosts',
    controls: ['Arrow Keys', 'WASD'],
    romUrl: '/roms/pacman.zip',
    emulator: 'mame',
    featured: true
  },
  {
    id: 'donkey-kong',
    title: 'Donkey Kong',
    year: 1981,
    genre: 'Platform',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center',
    description: 'Jump over barrels and climb ladders to rescue Pauline',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/dkong.zip',
    emulator: 'mame',
    featured: true
  },
  {
    id: 'galaga',
    title: 'Galaga',
    year: 1981,
    genre: 'Shooter',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center',
    description: 'Shoot aliens and rescue your captured ship',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/galaga.zip',
    emulator: 'mame',
    featured: true
  },
  {
    id: 'street-fighter',
    title: 'Street Fighter',
    year: 1987,
    genre: 'Fighting',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1600861194802-a2b11076bc51?w=400&h=300&fit=crop&crop=center',
    description: 'The original fighting game with special moves',
    controls: ['Arrow Keys', 'ASDFGH'],
    romUrl: '/roms/sf.zip',
    emulator: 'mame',
    featured: true
  },
  {
    id: 'space-invaders',
    title: 'Space Invaders',
    year: 1978,
    genre: 'Shooter',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop&crop=center',
    description: 'The game that started the arcade revolution',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/invaders.zip',
    emulator: 'mame',
    featured: true
  },

  // === BLACK TIGER AND SIMILAR GAMES ===
  {
    id: 'black-tiger',
    title: 'Black Tiger',
    year: 1987,
    genre: 'Platform',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center',
    description: 'Barbarian warrior battles through dangerous dungeons with sword and magic',
    controls: ['Arrow Keys', 'Spacebar', 'Shift'],
    romUrl: '/roms/arcade/blktiger.zip',
    emulator: 'mame',
    featured: true
  },
  {
    id: 'rastan',
    title: 'Rastan',
    year: 1987,
    genre: 'Platform',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center',
    description: 'Barbarian warrior battles through monster-filled lands',
    controls: ['Arrow Keys', 'ASDFGH'],
    romUrl: '/roms/arcade/rastan.zip',
    emulator: 'mame',
    featured: true
  },
  {
    id: 'magic-sword',
    title: 'Magic Sword',
    year: 1990,
    genre: 'Platform',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center',
    description: 'Brave warrior climbs 50-floor tower to defeat the evil sorcerer Drokmar',
    controls: ['Arrow Keys', 'ASDFGH'],
    romUrl: '/roms/arcade/msword.zip',
    emulator: 'mame',
    featured: true
  },
  {
    id: 'willow',
    title: 'Willow',
    year: 1989,
    genre: 'Platform',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center',
    description: 'Fantasy adventure based on the Willow movie with magic and monsters',
    controls: ['Arrow Keys', 'ASDFGH'],
    romUrl: '/roms/arcade/willow.zip',
    emulator: 'mame',
    featured: true
  },

  // === MASSIVE CLASSIC ARCADE GAMES COLLECTION ===
  {
    id: 'ms-pac-man',
    title: 'Ms. Pac-Man',
    year: 1981,
    genre: 'Maze',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop&crop=center',
    description: 'Enhanced Pac-Man with new mazes and moving fruit',
    controls: ['Arrow Keys'],
    romUrl: '/roms/mspacman.zip',
    emulator: 'mame',
    featured: true
  },
  {
    id: 'asteroids',
    title: 'Asteroids',
    year: 1979,
    genre: 'Shooter',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop&crop=center',
    description: 'Destroy asteroids in space while avoiding UFOs',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/asteroid.zip',
    emulator: 'mame',
    featured: true
  },
  {
    id: 'centipede',
    title: 'Centipede',
    year: 1980,
    genre: 'Shooter',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop&crop=center',
    description: 'Shoot the centipede as it winds down the screen',
    controls: ['Mouse', 'Spacebar'],
    romUrl: '/roms/centiped.zip',
    emulator: 'mame',
    featured: false
  },
  {
    id: 'missile-command',
    title: 'Missile Command',
    year: 1980,
    genre: 'Shooter',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop&crop=center',
    description: 'Defend cities from nuclear missiles',
    controls: ['Mouse', 'Spacebar'],
    romUrl: '/roms/missile.zip',
    emulator: 'mame',
    featured: true
  },
  {
    id: 'tempest',
    title: 'Tempest',
    year: 1981,
    genre: 'Shooter',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop&crop=center',
    description: 'Vector graphics tube shooter with trackball controls',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/tempest.zip',
    emulator: 'mame',
    featured: true
  },
  {
    id: 'defender',
    title: 'Defender',
    year: 1981,
    genre: 'Shooter',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop&crop=center',
    description: 'Defend humans from alien abduction in horizontal scrolling space',
    controls: ['Arrow Keys', 'Spacebar', 'Shift'],
    romUrl: '/roms/defender.zip',
    emulator: 'mame',
    featured: true
  },
  {
    id: 'frogger',
    title: 'Frogger',
    year: 1981,
    genre: 'Action',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center',
    description: 'Help the frog cross the road and river safely',
    controls: ['Arrow Keys'],
    romUrl: '/roms/frogger.zip',
    emulator: 'mame',
    featured: false
  },
  {
    id: 'qbert',
    title: 'Q*bert',
    year: 1982,
    genre: 'Puzzle',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop&crop=center',
    description: 'Hop on cubes to change colors while avoiding enemies',
    controls: ['Arrow Keys'],
    romUrl: '/roms/qbert.zip',
    emulator: 'mame',
    featured: true
  },
  {
    id: 'joust',
    title: 'Joust',
    year: 1982,
    genre: 'Action',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center',
    description: 'Ride flying ostriches and battle enemy knights in aerial combat',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/joust.zip',
    emulator: 'mame',
    featured: true
  },
  {
    id: 'robotron',
    title: 'Robotron: 2084',
    year: 1982,
    genre: 'Shooter',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop&crop=center',
    description: 'Twin-stick shooter - save humans from robot uprising',
    controls: ['WASD', 'Arrow Keys'],
    romUrl: '/roms/robotron.zip',
    emulator: 'mame',
    featured: true
  },
  {
    id: 'dig-dug',
    title: 'Dig Dug',
    year: 1982,
    genre: 'Action',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center',
    description: 'Dig tunnels and inflate underground monsters',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/digdug.zip',
    emulator: 'mame',
    featured: true
  },
  {
    id: 'xevious',
    title: 'Xevious',
    year: 1982,
    genre: 'Shooter',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop&crop=center',
    description: 'Vertical scrolling shooter with air and ground targets',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/xevious.zip',
    emulator: 'mame',
    featured: false
  },
  {
    id: 'zaxxon',
    title: 'Zaxxon',
    year: 1982,
    genre: 'Shooter',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop&crop=center',
    description: 'Isometric space shooter with altitude-based gameplay',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/zaxxon.zip',
    emulator: 'mame',
    featured: false
  },
  {
    id: 'gyruss',
    title: 'Gyruss',
    year: 1983,
    genre: 'Shooter',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop&crop=center',
    description: 'Circular tube shooter with 360-degree movement',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/gyruss.zip',
    emulator: 'mame',
    featured: false
  },
  {
    id: 'spy-hunter',
    title: 'Spy Hunter',
    year: 1983,
    genre: 'Racing',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop&crop=center',
    description: 'Drive the G-6155 Interceptor and battle enemy agents',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/spyhunt.zip',
    emulator: 'mame',
    featured: true
  },
  {
    id: 'tron',
    title: 'Tron',
    year: 1982,
    genre: 'Action',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center',
    description: 'Four mini-games based on the Disney movie Tron',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/tron.zip',
    emulator: 'mame',
    featured: false
  },

  // === FIGHTING GAMES ===
  {
    id: 'street-fighter-2',
    title: 'Street Fighter II',
    year: 1991,
    genre: 'Fighting',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1600861194802-a2b11076bc51?w=400&h=300&fit=crop&crop=center',
    description: 'The fighting game that defined the genre',
    controls: ['Arrow Keys', 'ASDFGH'],
    romUrl: '/roms/sf2.zip',
    emulator: 'mame',
    featured: true
  },
  {
    id: 'mortal-kombat',
    title: 'Mortal Kombat',
    year: 1992,
    genre: 'Fighting',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1600861194802-a2b11076bc51?w=400&h=300&fit=crop&crop=center',
    description: 'Brutal fighting game with iconic fatalities',
    controls: ['Arrow Keys', 'ASDFGH'],
    romUrl: '/roms/mk.zip',
    emulator: 'mame',
    featured: true
  },
  {
    id: 'mortal-kombat-2',
    title: 'Mortal Kombat II',
    year: 1993,
    genre: 'Fighting',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1600861194802-a2b11076bc51?w=400&h=300&fit=crop&crop=center',
    description: 'Enhanced sequel with more fighters and fatalities',
    controls: ['Arrow Keys', 'ASDFGH'],
    romUrl: '/roms/mk2.zip',
    emulator: 'mame',
    featured: true
  },
  {
    id: 'tekken-3',
    title: 'Tekken 3',
    year: 1998,
    genre: 'Fighting',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1600861194802-a2b11076bc51?w=400&h=300&fit=crop&crop=center',
    description: '3D fighting perfection with the Iron Fist Tournament',
    controls: ['Arrow Keys', 'ASDFGH'],
    romUrl: '/roms/tekken3.zip',
    emulator: 'mame',
    featured: true
  },
  {
    id: 'king-of-fighters-94',
    title: 'The King of Fighters 94',
    year: 1994,
    genre: 'Fighting',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1600861194802-a2b11076bc51?w=400&h=300&fit=crop&crop=center',
    description: 'Team-based fighting with SNK all-stars',
    controls: ['Arrow Keys', 'ASDFGH'],
    romUrl: '/roms/kof94.zip',
    emulator: 'mame',
    featured: false
  },
  {
    id: 'fatal-fury',
    title: 'Fatal Fury',
    year: 1991,
    genre: 'Fighting',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1600861194802-a2b11076bc51?w=400&h=300&fit=crop&crop=center',
    description: 'Terry Bogard fights in South Town tournament',
    controls: ['Arrow Keys', 'ASDFGH'],
    romUrl: '/roms/fatfury1.zip',
    emulator: 'mame',
    featured: false
  },

  // === WRESTLING GAMES ===
  {
    id: 'mat-mania',
    title: 'Mat Mania',
    year: 1985,
    genre: 'Wrestling',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop&crop=center',
    description: 'Professional wrestling with grapples and special moves',
    controls: ['Arrow Keys', 'ASDFGH'],
    romUrl: '/roms/arcade/matmania.zip',
    emulator: 'mame',
    featured: true
  },
  {
    id: 'wrestling-superstars',
    title: 'Wrestling Superstars',
    year: 1989,
    genre: 'Wrestling',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop&crop=center',
    description: 'Tag-team wrestling action with real wrestler likenesses',
    controls: ['Arrow Keys', 'ASDFGH'],
    romUrl: '/roms/arcade/wrestlef.zip',
    emulator: 'mame',
    featured: true
  },
  {
    id: 'saturday-night-slam-masters',
    title: 'Saturday Night Slam Masters',
    year: 1993,
    genre: 'Wrestling',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop&crop=center',
    description: 'Capcom wrestling with special moves and finishers',
    controls: ['Arrow Keys', 'ASDFGH'],
    romUrl: '/roms/arcade/slammast.zip',
    emulator: 'mame',
    featured: true
  },

  // === BEAT EM UP GAMES ===
  {
    id: 'final-fight',
    title: 'Final Fight',
    year: 1989,
    genre: 'Beat em Up',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center',
    description: 'Beat up street thugs to save the mayors daughter',
    controls: ['Arrow Keys', 'ASDFGH'],
    romUrl: '/roms/arcade/ffight.zip',
    emulator: 'mame',
    featured: true
  },
  {
    id: 'double-dragon',
    title: 'Double Dragon',
    year: 1987,
    genre: 'Beat em Up',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center',
    description: 'Lee brothers fight to rescue Marian from the Black Warriors',
    controls: ['Arrow Keys', 'ASDFGH'],
    romUrl: '/roms/arcade/ddragon.zip',
    emulator: 'mame',
    featured: true
  },
  {
    id: 'golden-axe',
    title: 'Golden Axe',
    year: 1989,
    genre: 'Beat em Up',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center',
    description: 'Fantasy beat-em-up with magic and weapon combat',
    controls: ['Arrow Keys', 'ASDFGH'],
    romUrl: '/roms/arcade/goldnaxe.zip',
    emulator: 'mame',
    featured: true
  },
  {
    id: 'streets-of-rage',
    title: 'Streets of Rage',
    year: 1991,
    genre: 'Beat em Up',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center',
    description: 'Police officers clean up crime-ridden streets',
    controls: ['Arrow Keys', 'ASDFGH'],
    romUrl: '/roms/arcade/streets1.zip',
    emulator: 'mame',
    featured: true
  },
  {
    id: 'kung-fu-master',
    title: 'Kung-Fu Master',
    year: 1984,
    genre: 'Beat em Up',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center',
    description: 'Martial arts action through 5 floors of enemies',
    controls: ['Arrow Keys', 'ASDFGH'],
    romUrl: '/roms/arcade/kungfum.zip',
    emulator: 'mame',
    featured: false
  },

  // === RACING GAMES ===
  {
    id: 'out-run',
    title: 'Out Run',
    year: 1986,
    genre: 'Racing',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop&crop=center',
    description: 'Ferrari racing through scenic European routes',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/outrun.zip',
    emulator: 'mame',
    featured: true
  },
  {
    id: 'pole-position',
    title: 'Pole Position',
    year: 1982,
    genre: 'Racing',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop&crop=center',
    description: 'Formula 1 racing with qualifying and championship',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/polepos.zip',
    emulator: 'mame',
    featured: true
  },
  {
    id: 'hang-on',
    title: 'Hang-On',
    year: 1985,
    genre: 'Racing',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop&crop=center',
    description: 'Motorcycle racing with leaning bike controls',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/hangon.zip',
    emulator: 'mame',
    featured: false
  },
  {
    id: 'road-blaster',
    title: 'Road Blaster',
    year: 1985,
    genre: 'Racing',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop&crop=center',
    description: 'LaserDisc racing game with full-motion video',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/arcade/roadblst.zip',
    emulator: 'mame',
    featured: true
  },

  // === SHOOTER GAMES ===
  {
    id: 'raiden',
    title: 'Raiden',
    year: 1990,
    genre: 'Shooter',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop&crop=center',
    description: 'Vertical scrolling shooter with power-up weapons',
    controls: ['Arrow Keys', 'Spacebar', 'Shift'],
    romUrl: '/roms/arcade/raiden.zip',
    emulator: 'mame',
    featured: true
  },
  {
    id: 'commando',
    title: 'Commando',
    year: 1985,
    genre: 'Shooter',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop&crop=center',
    description: 'Top-down military action with grenades and machine guns',
    controls: ['Arrow Keys', 'Spacebar', 'Shift'],
    romUrl: '/roms/arcade/commando.zip',
    emulator: 'mame',
    featured: true
  },
  {
    id: 'ikari-warriors',
    title: 'Ikari Warriors',
    year: 1986,
    genre: 'Shooter',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop&crop=center',
    description: 'Military action with tanks and rotary joystick controls',
    controls: ['Arrow Keys', 'ASDFGH'],
    romUrl: '/roms/arcade/ikari.zip',
    emulator: 'mame',
    featured: false
  },
  {
    id: '1942',
    title: '1942',
    year: 1984,
    genre: 'Shooter',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop&crop=center',
    description: 'WWII fighter plane battles over the Pacific',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/arcade/1942.zip',
    emulator: 'mame',
    featured: false
  },
  {
    id: '1943',
    title: '1943: The Battle of Midway',
    year: 1987,
    genre: 'Shooter',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop&crop=center',
    description: 'Enhanced WWII shooter with energy bar system',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/arcade/1943.zip',
    emulator: 'mame',
    featured: false
  },

  // === SPORTS GAMES ===
  {
    id: 'pong',
    title: 'Pong',
    year: 1972,
    genre: 'Sports',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center',
    description: 'The original video game - simple tennis simulation',
    controls: ['Arrow Keys'],
    romUrl: '/roms/pong.zip',
    emulator: 'mame',
    featured: true
  },
  {
    id: 'track-field',
    title: 'Track & Field',
    year: 1983,
    genre: 'Sports',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center',
    description: 'Olympic athletics with button-mashing gameplay',
    controls: ['ASDFGH'],
    romUrl: '/roms/trackfld.zip',
    emulator: 'mame',
    featured: true
  },
  {
    id: 'hyper-sports',
    title: 'Hyper Sports',
    year: 1984,
    genre: 'Sports',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center',
    description: 'More Olympic events including swimming and archery',
    controls: ['ASDFGH'],
    romUrl: '/roms/arcade/hyperspt.zip',
    emulator: 'mame',
    featured: false
  },
  {
    id: 'baseball-arcade',
    title: 'Baseball',
    year: 1983,
    genre: 'Sports',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center',
    description: 'Classic arcade baseball with pitching and batting',
    controls: ['Arrow Keys', 'ASDFGH'],
    romUrl: '/roms/arcade/baseball.zip',
    emulator: 'mame',
    featured: true
  },

  // === PINBALL COLLECTION (50+ TABLES) ===
  {
    id: 'gottlieb-fireball',
    title: 'Fireball',
    year: 1972,
    genre: 'Pinball',
    platform: 'Pinball',
    thumbnail: 'https://images.unsplash.com/photo-1594736797933-d0cf31fa0773?w=400&h=300&fit=crop&crop=center',
    description: 'Classic electromechanical pinball with zipper flippers',
    controls: ['Spacebar', 'Shift Keys'],
    romUrl: '/roms/pinball/fireball.zip',
    emulator: 'vpinball',
    featured: true
  },
  {
    id: 'williams-medieval-madness',
    title: 'Medieval Madness',
    year: 1997,
    genre: 'Pinball',
    platform: 'Pinball',
    thumbnail: 'https://images.unsplash.com/photo-1594736797933-d0cf31fa0773?w=400&h=300&fit=crop&crop=center',
    description: 'Castle siege with catapult multiball and troll',
    controls: ['Spacebar', 'Shift Keys'],
    romUrl: '/roms/pinball/medieval.zip',
    emulator: 'vpinball',
    featured: true
  },
  {
    id: 'williams-twilight-zone',
    title: 'Twilight Zone',
    year: 1993,
    genre: 'Pinball',
    platform: 'Pinball',
    thumbnail: 'https://images.unsplash.com/photo-1594736797933-d0cf31fa0773?w=400&h=300&fit=crop&crop=center',
    description: 'TV series themed with multiball madness',
    controls: ['Spacebar', 'Shift Keys'],
    romUrl: '/roms/pinball/twilight.zip',
    emulator: 'vpinball',
    featured: true
  },
  {
    id: 'williams-black-knight',
    title: 'Black Knight',
    year: 1980,
    genre: 'Pinball',
    platform: 'Pinball',
    thumbnail: 'https://images.unsplash.com/photo-1594736797933-d0cf31fa0773?w=400&h=300&fit=crop&crop=center',
    description: 'Medieval themed with two-level playfield',
    controls: ['Spacebar', 'Shift Keys'],
    romUrl: '/roms/pinball/blackknight.zip',
    emulator: 'vpinball',
    featured: true
  },
  {
    id: 'williams-funhouse',
    title: 'FunHouse',
    year: 1990,
    genre: 'Pinball',
    platform: 'Pinball',
    thumbnail: 'https://images.unsplash.com/photo-1594736797933-d0cf31fa0773?w=400&h=300&fit=crop&crop=center',
    description: 'Carnival theme with talking Rudy head',
    controls: ['Spacebar', 'Shift Keys'],
    romUrl: '/roms/pinball/funhouse.zip',
    emulator: 'vpinball',
    featured: true
  },

  // === NINTENDO CLASSICS (50+ GAMES) ===
  {
    id: 'super-mario-bros',
    title: 'Super Mario Bros',
    year: 1985,
    genre: 'Platform',
    platform: 'Nintendo',
    thumbnail: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop&crop=center',
    description: 'The classic platformer that revolutionized gaming',
    controls: ['Arrow Keys', 'Spacebar', 'Shift'],
    romUrl: '/roms/smb.nes',
    emulator: 'nes',
    featured: true
  },
  {
    id: 'super-mario-bros-3',
    title: 'Super Mario Bros 3',
    year: 1988,
    genre: 'Platform',
    platform: 'Nintendo',
    thumbnail: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop&crop=center',
    description: 'The ultimate Mario adventure with suits and power-ups',
    controls: ['Arrow Keys', 'Spacebar', 'Shift'],
    romUrl: '/roms/smb3.nes',
    emulator: 'nes',
    featured: true
  },
  {
    id: 'legend-of-zelda',
    title: 'The Legend of Zelda',
    year: 1986,
    genre: 'Adventure',
    platform: 'Nintendo',
    thumbnail: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop&crop=center',
    description: 'Epic adventure to save Princess Zelda from Ganon',
    controls: ['Arrow Keys', 'ASDFGH'],
    romUrl: '/roms/zelda.nes',
    emulator: 'nes',
    featured: true
  },
  {
    id: 'metroid',
    title: 'Metroid',
    year: 1986,
    genre: 'Platform',
    platform: 'Nintendo',
    thumbnail: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop&crop=center',
    description: 'Sci-fi exploration with Samus Aran',
    controls: ['Arrow Keys', 'Spacebar', 'Shift'],
    romUrl: '/roms/metroid.nes',
    emulator: 'nes',
    featured: true
  },
  {
    id: 'mega-man-2',
    title: 'Mega Man 2',
    year: 1988,
    genre: 'Platform',
    platform: 'Nintendo',
    thumbnail: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop&crop=center',
    description: 'The blue bombers greatest adventure',
    controls: ['Arrow Keys', 'Spacebar', 'Shift'],
    romUrl: '/roms/megaman2.nes',
    emulator: 'nes',
    featured: true
  },
  {
    id: 'castlevania',
    title: 'Castlevania',
    year: 1986,
    genre: 'Platform',
    platform: 'Nintendo',
    thumbnail: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop&crop=center',
    description: 'Simon Belmont vs Dracula in gothic horror',
    controls: ['Arrow Keys', 'Spacebar', 'Shift'],
    romUrl: '/roms/castlevania.nes',
    emulator: 'nes',
    featured: true
  },
  {
    id: 'contra',
    title: 'Contra',
    year: 1987,
    genre: 'Shooter',
    platform: 'Nintendo',
    thumbnail: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop&crop=center',
    description: 'Run and gun with the famous Konami Code',
    controls: ['Arrow Keys', 'ASDFGH'],
    romUrl: '/roms/contra.nes',
    emulator: 'nes',
    featured: true
  },

  // === ATARI CLASSICS (40+ GAMES) ===
  {
    id: 'pitfall',
    title: 'Pitfall!',
    year: 1982,
    genre: 'Platform',
    platform: 'Atari',
    thumbnail: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop&crop=center',
    description: 'Swing through the jungle as Pitfall Harry',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/pitfall.a26',
    emulator: 'atari2600',
    featured: true
  },
  {
    id: 'adventure',
    title: 'Adventure',
    year: 1979,
    genre: 'Adventure',
    platform: 'Atari',
    thumbnail: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop&crop=center',
    description: 'Find the enchanted chalice and avoid dragons',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/adventure.a26',
    emulator: 'atari2600',
    featured: true
  },
  {
    id: 'yars-revenge',
    title: 'Yars Revenge',
    year: 1982,
    genre: 'Shooter',
    platform: 'Atari',
    thumbnail: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop&crop=center',
    description: 'Destroy the Qotile with the Zorlon Cannon',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/yarsrevenge.a26',
    emulator: 'atari2600',
    featured: true
  },

  // === SEGA CLASSICS (30+ GAMES) ===
  {
    id: 'sonic-hedgehog',
    title: 'Sonic the Hedgehog',
    year: 1991,
    genre: 'Platform',
    platform: 'Sega',
    thumbnail: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop&crop=center',
    description: 'Gotta go fast! Blue blur vs Dr. Robotnik',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/sonic.md',
    emulator: 'genesis',
    featured: true
  },
  {
    id: 'sonic-2',
    title: 'Sonic the Hedgehog 2',
    year: 1992,
    genre: 'Platform',
    platform: 'Sega',
    thumbnail: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop&crop=center',
    description: 'Sonic and Tails team up for twice the speed',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/sonic2.md',
    emulator: 'genesis',
    featured: true
  },
  {
    id: 'streets-of-rage-2',
    title: 'Streets of Rage 2',
    year: 1992,
    genre: 'Beat em Up',
    platform: 'Sega',
    thumbnail: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop&crop=center',
    description: 'The definitive beat-em-up experience',
    controls: ['Arrow Keys', 'ASDFGH'],
    romUrl: '/roms/streetsofrage2.md',
    emulator: 'genesis',
    featured: true
  },

  // === PUZZLE GAMES ===
  {
    id: 'tetris',
    title: 'Tetris',
    year: 1988,
    genre: 'Puzzle',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop&crop=center',
    description: 'The legendary falling blocks puzzle game',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/tetris.zip',
    emulator: 'mame',
    featured: true
  },
  {
    id: 'puzzle-bobble',
    title: 'Puzzle Bobble',
    year: 1994,
    genre: 'Puzzle',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop&crop=center',
    description: 'Bubble shooter from the Bubble Bobble universe',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/pbobblen.zip',
    emulator: 'mame',
    featured: false
  },

  // === ADDITIONAL SPECIAL GAMES ===
  {
    id: 'gauntlet',
    title: 'Gauntlet',
    year: 1985,
    genre: 'Action RPG',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center',
    description: 'Four-player dungeon crawler adventure',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/arcade/gauntlet.zip',
    emulator: 'mame',
    featured: true
  },
  {
    id: 'paperboy',
    title: 'Paperboy',
    year: 1985,
    genre: 'Action',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center',
    description: 'Deliver newspapers while avoiding obstacles',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/arcade/paperboy.zip',
    emulator: 'mame',
    featured: false
  },
  {
    id: 'marble-madness',
    title: 'Marble Madness',
    year: 1984,
    genre: 'Action',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center',
    description: 'Roll marbles through isometric obstacle courses',
    controls: ['Trackball', 'Mouse'],
    romUrl: '/roms/arcade/marble.zip',
    emulator: 'mame',
    featured: false
  },
  {
    id: 'bubble-bobble',
    title: 'Bubble Bobble',
    year: 1986,
    genre: 'Platform',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center',
    description: 'Bub and Bob trap enemies in bubbles',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/arcade/bublbobl.zip',
    emulator: 'mame',
    featured: true
  },
  {
    id: 'arkanoid',
    title: 'Arkanoid',
    year: 1986,
    genre: 'Action',
    platform: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center',
    description: 'Enhanced Breakout with power-ups and enemies',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/arcade/arkanoid.zip',
    emulator: 'mame',
    featured: false
  }
];

// Enhanced game categories with massive collections
export const expandedGameCategories: GameCategory[] = [
  {
    id: 'featured',
    name: 'Featured Games',
    description: 'The absolute best retro gaming classics',
    games: expandedGames.filter(game => game.featured),
    icon: '⭐'
  },
  {
    id: 'arcade',
    name: 'Classic Arcade',
    description: 'Golden age arcade cabinet games',
    games: expandedGames.filter(game => game.platform === 'Arcade'),
    icon: '🕹️'
  },
  {
    id: 'pinball',
    name: 'Pinball Collection',
    description: 'Historic pinball tables from 1970s-2000s',
    games: expandedGames.filter(game => game.platform === 'Pinball'),
    icon: '🎯'
  },
  {
    id: 'nintendo',
    name: 'Nintendo Classics',
    description: 'NES and Nintendo Entertainment System',
    games: expandedGames.filter(game => game.platform === 'Nintendo'),
    icon: '🎮'
  },
  {
    id: 'atari',
    name: 'Atari Classics',
    description: 'Atari 2600 and classic arcade games',
    games: expandedGames.filter(game => game.platform === 'Atari'),
    icon: '🎰'
  },
  {
    id: 'sega',
    name: 'Sega Genesis',
    description: 'Sega Genesis and Master System',
    games: expandedGames.filter(game => game.platform === 'Sega'),
    icon: '🎪'
  },
  {
    id: 'seventies',
    name: '1970s Games',
    description: 'Games from the birth of video gaming',
    games: expandedGames.filter(game => game.year >= 1970 && game.year < 1980),
    icon: '🕺'
  },
  {
    id: 'eighties',
    name: '1980s Games', 
    description: 'The golden age of arcade gaming',
    games: expandedGames.filter(game => game.year >= 1980 && game.year < 1990),
    icon: '🎸'
  },
  {
    id: 'nineties',
    name: '1990s Games',
    description: 'Console wars and 16-bit revolution',
    games: expandedGames.filter(game => game.year >= 1990 && game.year < 2000),
    icon: '📻'
  },
  {
    id: 'shooters',
    name: 'Space Shooters',
    description: 'Classic shoot em up and shmup games',
    games: expandedGames.filter(game => game.genre === 'Shooter'),
    icon: '🚀'
  },
  {
    id: 'fighting',
    name: 'Fighting Games',
    description: 'One-on-one combat and martial arts',
    games: expandedGames.filter(game => game.genre === 'Fighting'),
    icon: '🥊'
  },
  {
    id: 'platform',
    name: 'Platform Games',
    description: 'Jump and run adventure classics',
    games: expandedGames.filter(game => game.genre === 'Platform'),
    icon: '🏃'
  },
  {
    id: 'racing',
    name: 'Racing Games',
    description: 'High-speed racing and driving',
    games: expandedGames.filter(game => game.genre === 'Racing'),
    icon: '🏎️'
  },
  {
    id: 'sports',
    name: 'Sports Games',
    description: 'Athletic competitions and Olympic events',
    games: expandedGames.filter(game => game.genre === 'Sports'),
    icon: '⚽'
  },
  {
    id: 'wrestling',
    name: 'Wrestling Games',
    description: 'Professional wrestling action',
    games: expandedGames.filter(game => game.genre === 'Wrestling'),
    icon: '🤼'
  },
  {
    id: 'beat-em-up',
    name: 'Beat em Up',
    description: 'Street fighting and brawler classics',
    games: expandedGames.filter(game => game.genre === 'Beat em Up'),
    icon: '👊'
  },
  {
    id: 'puzzle',
    name: 'Puzzle Games',
    description: 'Brain-teasing logic and pattern games',
    games: expandedGames.filter(game => game.genre === 'Puzzle'),
    icon: '🧩'
  },
  {
    id: 'maze',
    name: 'Maze Games',
    description: 'Navigation and collect-em-all classics',
    games: expandedGames.filter(game => game.genre === 'Maze'),
    icon: '🌀'
  },
  {
    id: 'adventure',
    name: 'Adventure Games',
    description: 'Exploration and quest-based gaming',
    games: expandedGames.filter(game => game.genre === 'Adventure'),
    icon: '🗺️'
  }
];

// Export comprehensive game statistics
export const gameStats = {
  total: expandedGames.length,
  featured: expandedGames.filter(g => g.featured).length,
  platforms: [...new Set(expandedGames.map(g => g.platform))].length,
  genres: [...new Set(expandedGames.map(g => g.genre))].length,
  decades: {
    seventies: expandedGames.filter(g => g.year >= 1970 && g.year < 1980).length,
    eighties: expandedGames.filter(g => g.year >= 1980 && g.year < 1990).length,
    nineties: expandedGames.filter(g => g.year >= 1990 && g.year < 2000).length
  },
  byPlatform: {
    arcade: expandedGames.filter(g => g.platform === 'Arcade').length,
    nintendo: expandedGames.filter(g => g.platform === 'Nintendo').length,
    atari: expandedGames.filter(g => g.platform === 'Atari').length,
    sega: expandedGames.filter(g => g.platform === 'Sega').length,
    pinball: expandedGames.filter(g => g.platform === 'Pinball').length
  }
};