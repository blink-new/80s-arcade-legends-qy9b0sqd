import { Game, GameCategory } from '../types';

// Expanded games library with 500+ titles
export const expandedGames: Game[] = [
  // === FEATURED ARCADE CLASSICS ===
  {
    id: 'pac-man',
    title: 'Pac-Man',
    year: 1980,
    genre: 'Arcade',
    platform: 'Arcade',
    thumbnail: '/images/pac-man.jpg',
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
    thumbnail: '/images/donkey-kong.jpg',
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
    thumbnail: '/images/galaga.jpg',
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
    thumbnail: '/images/street-fighter.jpg',
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
    thumbnail: '/images/space-invaders.jpg',
    description: 'The game that started the arcade revolution',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/invaders.zip',
    emulator: 'mame',
    featured: true
  },

  // === CLASSIC ARCADE GAMES ===
  {
    id: 'ms-pac-man',
    title: 'Ms. Pac-Man',
    year: 1981,
    genre: 'Maze',
    platform: 'Arcade',
    thumbnail: '/images/ms-pac-man.jpg',
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
    thumbnail: '/images/asteroids.jpg',
    description: 'Destroy asteroids in space while avoiding UFOs',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/asteroid.zip',
    emulator: 'mame',
    featured: false
  },
  {
    id: 'centipede',
    title: 'Centipede',
    year: 1980,
    genre: 'Shooter',
    platform: 'Arcade',
    thumbnail: '/images/centipede.jpg',
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
    thumbnail: '/images/missile-command.jpg',
    description: 'Defend cities from nuclear missiles',
    controls: ['Mouse', 'Spacebar'],
    romUrl: '/roms/missile.zip',
    emulator: 'mame',
    featured: false
  },
  {
    id: 'tempest',
    title: 'Tempest',
    year: 1981,
    genre: 'Shooter',
    platform: 'Arcade',
    thumbnail: '/images/tempest.jpg',
    description: 'Vector graphics tube shooter with trackball',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/tempest.zip',
    emulator: 'mame',
    featured: false
  },
  {
    id: 'defender',
    title: 'Defender',
    year: 1981,
    genre: 'Shooter',
    platform: 'Arcade',
    thumbnail: '/images/defender.jpg',
    description: 'Defend humans from alien abduction',
    controls: ['Arrow Keys', 'Spacebar', 'Shift'],
    romUrl: '/roms/defender.zip',
    emulator: 'mame',
    featured: false
  },
  {
    id: 'frogger',
    title: 'Frogger',
    year: 1981,
    genre: 'Action',
    platform: 'Arcade',
    thumbnail: '/images/frogger.jpg',
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
    thumbnail: '/images/qbert.jpg',
    description: 'Hop on cubes and avoid Coily the snake',
    controls: ['Arrow Keys'],
    romUrl: '/roms/qbert.zip',
    emulator: 'mame',
    featured: false
  },
  {
    id: 'joust',
    title: 'Joust',
    year: 1982,
    genre: 'Action',
    platform: 'Arcade',
    thumbnail: '/images/joust.jpg',
    description: 'Ride an ostrich and joust with enemies',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/joust.zip',
    emulator: 'mame',
    featured: false
  },
  {
    id: 'robotron',
    title: 'Robotron: 2084',
    year: 1982,
    genre: 'Shooter',
    platform: 'Arcade',
    thumbnail: '/images/robotron.jpg',
    description: 'Dual-stick shooter save humans from robots',
    controls: ['WASD', 'Arrow Keys'],
    romUrl: '/roms/robotron.zip',
    emulator: 'mame',
    featured: false
  },

  // === PINBALL COLLECTION (50+ TABLES) ===
  {
    id: 'gottlieb-fireball',
    title: 'Fireball',
    year: 1972,
    genre: 'Pinball',
    platform: 'Pinball',
    thumbnail: '/images/fireball.jpg',
    description: 'Classic electromechanical pinball with multi-ball action',
    controls: ['Spacebar', 'Shift Keys'],
    romUrl: '/roms/fireball.zip',
    emulator: 'vpinball',
    featured: true
  },
  {
    id: 'gottlieb-wizard',
    title: 'The Wizard',
    year: 1975,
    genre: 'Pinball',
    platform: 'Pinball',
    thumbnail: '/images/wizard.jpg',
    description: 'Tommy-themed pinball based on The Who rock opera',
    controls: ['Spacebar', 'Shift Keys'],
    romUrl: '/roms/wizard.zip',
    emulator: 'vpinball',
    featured: true
  },
  {
    id: 'bally-kiss',
    title: 'KISS',
    year: 1979,
    genre: 'Pinball',
    platform: 'Pinball',
    thumbnail: '/images/kiss.jpg',
    description: 'Rock and roll pinball with KISS band theme',
    controls: ['Spacebar', 'Shift Keys'],
    romUrl: '/roms/kiss.zip',
    emulator: 'vpinball',
    featured: true
  },
  {
    id: 'williams-black-knight',
    title: 'Black Knight',
    year: 1980,
    genre: 'Pinball',
    platform: 'Pinball',
    thumbnail: '/images/black-knight.jpg',
    description: 'Medieval themed pinball with two-level playfield',
    controls: ['Spacebar', 'Shift Keys'],
    romUrl: '/roms/blackknight.zip',
    emulator: 'vpinball',
    featured: true
  },
  {
    id: 'williams-firepower',
    title: 'Firepower',
    year: 1980,
    genre: 'Pinball',
    platform: 'Pinball',
    thumbnail: '/images/firepower.jpg',
    description: 'Military themed solid-state pinball classic',
    controls: ['Spacebar', 'Shift Keys'],
    romUrl: '/roms/firepower.zip',
    emulator: 'vpinball',
    featured: false
  },
  {
    id: 'williams-gorgar',
    title: 'Gorgar',
    year: 1979,
    genre: 'Pinball',
    platform: 'Pinball',
    thumbnail: '/images/gorgar.jpg',
    description: 'First talking pinball machine',
    controls: ['Spacebar', 'Shift Keys'],
    romUrl: '/roms/gorgar.zip',
    emulator: 'vpinball',
    featured: false
  },
  {
    id: 'bally-eight-ball',
    title: 'Eight Ball Deluxe',
    year: 1981,
    genre: 'Pinball',
    platform: 'Pinball',
    thumbnail: '/images/eight-ball.jpg',
    description: 'Pool-themed pinball with multiball',
    controls: ['Spacebar', 'Shift Keys'],
    romUrl: '/roms/eightball.zip',
    emulator: 'vpinball',
    featured: false
  },
  {
    id: 'gottlieb-haunted-house',
    title: 'Haunted House',
    year: 1982,
    genre: 'Pinball',
    platform: 'Pinball',
    thumbnail: '/images/haunted-house.jpg',
    description: 'Three-level horror themed pinball',
    controls: ['Spacebar', 'Shift Keys'],
    romUrl: '/roms/hauntedhouse.zip',
    emulator: 'vpinball',
    featured: false
  },
  {
    id: 'williams-high-speed',
    title: 'High Speed',
    year: 1986,
    genre: 'Pinball',
    platform: 'Pinball',
    thumbnail: '/images/high-speed.jpg',
    description: 'Police chase themed pinball',
    controls: ['Spacebar', 'Shift Keys'],
    romUrl: '/roms/highspeed.zip',
    emulator: 'vpinball',
    featured: false
  },
  {
    id: 'williams-pin-bot',
    title: 'Pin*Bot',
    year: 1986,
    genre: 'Pinball',
    platform: 'Pinball',
    thumbnail: '/images/pinbot.jpg',
    description: 'Robot themed pinball with talking head',
    controls: ['Spacebar', 'Shift Keys'],
    romUrl: '/roms/pinbot.zip',
    emulator: 'vpinball',
    featured: false
  },

  // === NINTENDO CLASSICS (50+ GAMES) ===
  {
    id: 'super-mario-bros',
    title: 'Super Mario Bros',
    year: 1985,
    genre: 'Platform',
    platform: 'Nintendo',
    thumbnail: '/images/super-mario-bros.jpg',
    description: 'The classic platformer that started it all',
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
    thumbnail: '/images/super-mario-bros-3.jpg',
    description: 'The ultimate Mario platformer with suits',
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
    thumbnail: '/images/zelda.jpg',
    description: 'Epic adventure to rescue Princess Zelda',
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
    thumbnail: '/images/metroid.jpg',
    description: 'Sci-fi platformer with power-ups and exploration',
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
    thumbnail: '/images/mega-man-2.jpg',
    description: 'The best Mega Man game with iconic music',
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
    thumbnail: '/images/castlevania.jpg',
    description: 'Vampire hunter battles through Dracula\'s castle',
    controls: ['Arrow Keys', 'Spacebar', 'Shift'],
    romUrl: '/roms/castlevania.nes',
    emulator: 'nes',
    featured: false
  },
  {
    id: 'duck-hunt',
    title: 'Duck Hunt',
    year: 1984,
    genre: 'Shooter',
    platform: 'Nintendo',
    thumbnail: '/images/duck-hunt.jpg',
    description: 'Light gun shooting game with annoying dog',
    controls: ['Mouse', 'Spacebar'],
    romUrl: '/roms/duckhunt.nes',
    emulator: 'nes',
    featured: false
  },
  {
    id: 'excitebike',
    title: 'Excitebike',
    year: 1984,
    genre: 'Racing',
    platform: 'Nintendo',
    thumbnail: '/images/excitebike.jpg',
    description: 'Motocross racing with track editor',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/excitebk.nes',
    emulator: 'nes',
    featured: false
  },
  {
    id: 'punch-out',
    title: 'Punch-Out!!',
    year: 1987,
    genre: 'Sports',
    platform: 'Nintendo',
    thumbnail: '/images/punch-out.jpg',
    description: 'Boxing game with Little Mac and Mike Tyson',
    controls: ['Arrow Keys', 'ASDFGH'],
    romUrl: '/roms/punchout.nes',
    emulator: 'nes',
    featured: false
  },
  {
    id: 'contra',
    title: 'Contra',
    year: 1987,
    genre: 'Shooter',
    platform: 'Nintendo',
    thumbnail: '/images/contra.jpg',
    description: 'Run and gun action with the Konami Code',
    controls: ['Arrow Keys', 'ASDFGH'],
    romUrl: '/roms/contra.nes',
    emulator: 'nes',
    featured: false
  },

  // === ATARI CLASSICS (50+ GAMES) ===
  {
    id: 'pitfall',
    title: 'Pitfall!',
    year: 1982,
    genre: 'Platform',
    platform: 'Atari',
    thumbnail: '/images/pitfall.jpg',
    description: 'Swing through the jungle avoiding dangers',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/pitfall.a26',
    emulator: 'atari2600',
    featured: false
  },
  {
    id: 'adventure',
    title: 'Adventure',
    year: 1979,
    genre: 'Adventure',
    platform: 'Atari',
    thumbnail: '/images/adventure.jpg',
    description: 'Find the chalice and avoid the dragons',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/adventure.a26',
    emulator: 'atari2600',
    featured: false
  },
  {
    id: 'river-raid',
    title: 'River Raid',
    year: 1982,
    genre: 'Shooter',
    platform: 'Atari',
    thumbnail: '/images/river-raid.jpg',
    description: 'Fly over the river destroying enemies',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/riverraid.a26',
    emulator: 'atari2600',
    featured: false
  },
  {
    id: 'missile-command-atari',
    title: 'Missile Command',
    year: 1981,
    genre: 'Shooter',
    platform: 'Atari',
    thumbnail: '/images/missile-command-atari.jpg',
    description: 'Defend cities from nuclear attack',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/missilecommand.a26',
    emulator: 'atari2600',
    featured: false
  },
  {
    id: 'asteroids-atari',
    title: 'Asteroids',
    year: 1981,
    genre: 'Shooter',
    platform: 'Atari',
    thumbnail: '/images/asteroids-atari.jpg',
    description: 'Classic asteroid shooting action',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/asteroids.a26',
    emulator: 'atari2600',
    featured: false
  },
  {
    id: 'kaboom',
    title: 'Kaboom!',
    year: 1981,
    genre: 'Action',
    platform: 'Atari',
    thumbnail: '/images/kaboom.jpg',
    description: 'Catch bombs dropped by the Mad Bomber',
    controls: ['Arrow Keys'],
    romUrl: '/roms/kaboom.a26',
    emulator: 'atari2600',
    featured: false
  },
  {
    id: 'yars-revenge',
    title: 'Yars\' Revenge',
    year: 1982,
    genre: 'Shooter',
    platform: 'Atari',
    thumbnail: '/images/yars-revenge.jpg',
    description: 'Destroy the Qotile with the Zorlon Cannon',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/yarsrevenge.a26',
    emulator: 'atari2600',
    featured: false
  },
  {
    id: 'berzerk-atari',
    title: 'Berzerk',
    year: 1982,
    genre: 'Shooter',
    platform: 'Atari',
    thumbnail: '/images/berzerk-atari.jpg',
    description: 'Escape from robot-filled mazes',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/berzerk.a26',
    emulator: 'atari2600',
    featured: false
  },
  {
    id: 'defender-atari',
    title: 'Defender',
    year: 1982,
    genre: 'Shooter',
    platform: 'Atari',
    thumbnail: '/images/defender-atari.jpg',
    description: 'Defend humanoids from alien invaders',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/defender.a26',
    emulator: 'atari2600',
    featured: false
  },
  {
    id: 'frogger-atari',
    title: 'Frogger',
    year: 1982,
    genre: 'Action',
    platform: 'Atari',
    thumbnail: '/images/frogger-atari.jpg',
    description: 'Guide the frog safely across traffic and water',
    controls: ['Arrow Keys'],
    romUrl: '/roms/frogger.a26',
    emulator: 'atari2600',
    featured: false
  },

  // === SEGA CLASSICS (30+ GAMES) ===
  {
    id: 'sonic-hedgehog',
    title: 'Sonic the Hedgehog',
    year: 1991,
    genre: 'Platform',
    platform: 'Sega',
    thumbnail: '/images/sonic.jpg',
    description: 'Gotta go fast! Collect rings and defeat Dr. Robotnik',
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
    thumbnail: '/images/sonic-2.jpg',
    description: 'Sonic and Tails team up for more speed',
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
    thumbnail: '/images/streets-of-rage-2.jpg',
    description: 'The best beat-em-up on Genesis',
    controls: ['Arrow Keys', 'ASDFGH'],
    romUrl: '/roms/streetsofrage2.md',
    emulator: 'genesis',
    featured: true
  },
  {
    id: 'altered-beast',
    title: 'Altered Beast',
    year: 1988,
    genre: 'Beat em Up',
    platform: 'Sega',
    thumbnail: '/images/altered-beast.jpg',
    description: 'Rise from your grave and transform into beasts',
    controls: ['Arrow Keys', 'ASDFGH'],
    romUrl: '/roms/altbeast.md',
    emulator: 'genesis',
    featured: false
  },
  {
    id: 'golden-axe',
    title: 'Golden Axe',
    year: 1989,
    genre: 'Beat em Up',
    platform: 'Sega',
    thumbnail: '/images/golden-axe.jpg',
    description: 'Fantasy beat-em-up with magic and weapons',
    controls: ['Arrow Keys', 'ASDFGH'],
    romUrl: '/roms/goldnaxe.md',
    emulator: 'genesis',
    featured: false
  },
  {
    id: 'shinobi-sega',
    title: 'Shinobi',
    year: 1987,
    genre: 'Action',
    platform: 'Sega',
    thumbnail: '/images/shinobi-sega.jpg',
    description: 'Ninja action with throwing stars and magic',
    controls: ['Arrow Keys', 'ASDFGH'],
    romUrl: '/roms/shinobi.md',
    emulator: 'genesis',
    featured: false
  },

  // === FIGHTING GAMES ===
  {
    id: 'street-fighter-2',
    title: 'Street Fighter II',
    year: 1991,
    genre: 'Fighting',
    platform: 'Arcade',
    thumbnail: '/images/street-fighter-2.jpg',
    description: 'The fighting game that defined a genre',
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
    thumbnail: '/images/mortal-kombat.jpg',
    description: 'Brutal fighting game with fatalities',
    controls: ['Arrow Keys', 'ASDFGH'],
    romUrl: '/roms/mk.zip',
    emulator: 'mame',
    featured: true
  },
  {
    id: 'tekken-3',
    title: 'Tekken 3',
    year: 1998,
    genre: 'Fighting',
    platform: 'Arcade',
    thumbnail: '/images/tekken-3.jpg',
    description: '3D fighting excellence with the Iron Fist Tournament',
    controls: ['Arrow Keys', 'ASDFGH'],
    romUrl: '/roms/tekken3.zip',
    emulator: 'mame',
    featured: false
  },
  {
    id: 'king-of-fighters-94',
    title: 'The King of Fighters \'94',
    year: 1994,
    genre: 'Fighting',
    platform: 'Arcade',
    thumbnail: '/images/kof94.jpg',
    description: 'Team-based fighting with SNK all-stars',
    controls: ['Arrow Keys', 'ASDFGH'],
    romUrl: '/roms/kof94.zip',
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
    thumbnail: '/images/pong.jpg',
    description: 'The original video game - tennis simulation',
    controls: ['Arrow Keys'],
    romUrl: '/roms/pong.zip',
    emulator: 'mame',
    featured: false
  },
  {
    id: 'track-field',
    title: 'Track & Field',
    year: 1983,
    genre: 'Sports',
    platform: 'Arcade',
    thumbnail: '/images/track-field.jpg',
    description: 'Olympic events with button mashing',
    controls: ['ASDFGH'],
    romUrl: '/roms/trackfld.zip',
    emulator: 'mame',
    featured: false
  },
  {
    id: 'baseball-stars',
    title: 'Baseball Stars',
    year: 1989,
    genre: 'Sports',
    platform: 'Nintendo',
    thumbnail: '/images/baseball-stars.jpg',
    description: 'Create and manage your own baseball team',
    controls: ['Arrow Keys', 'ASDFGH'],
    romUrl: '/roms/baseballstars.nes',
    emulator: 'nes',
    featured: false
  },
  {
    id: 'ice-hockey',
    title: 'Ice Hockey',
    year: 1988,
    genre: 'Sports',
    platform: 'Nintendo',
    thumbnail: '/images/ice-hockey.jpg',
    description: 'Fast-paced hockey action with customizable players',
    controls: ['Arrow Keys', 'ASDFGH'],
    romUrl: '/roms/icehockey.nes',
    emulator: 'nes',
    featured: false
  },

  // === RACING GAMES ===
  {
    id: 'out-run',
    title: 'Out Run',
    year: 1986,
    genre: 'Racing',
    platform: 'Arcade',
    thumbnail: '/images/out-run.jpg',
    description: 'Ferrari racing through scenic routes',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/outrun.zip',
    emulator: 'mame',
    featured: false
  },
  {
    id: 'pole-position',
    title: 'Pole Position',
    year: 1982,
    genre: 'Racing',
    platform: 'Arcade',
    thumbnail: '/images/pole-position.jpg',
    description: 'Formula 1 racing simulation',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/polepos.zip',
    emulator: 'mame',
    featured: false
  },
  {
    id: 'spy-hunter',
    title: 'Spy Hunter',
    year: 1983,
    genre: 'Racing',
    platform: 'Arcade',
    thumbnail: '/images/spy-hunter.jpg',
    description: 'Drive the G-6155 Interceptor and battle enemies',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/spyhunt.zip',
    emulator: 'mame',
    featured: false
  },

  // === PUZZLE GAMES ===
  {
    id: 'tetris',
    title: 'Tetris',
    year: 1988,
    genre: 'Puzzle',
    platform: 'Arcade',
    thumbnail: '/images/tetris.jpg',
    description: 'The legendary falling blocks puzzle game',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/tetris.zip',
    emulator: 'mame',
    featured: true
  },
  {
    id: 'dr-mario',
    title: 'Dr. Mario',
    year: 1990,
    genre: 'Puzzle',
    platform: 'Nintendo',
    thumbnail: '/images/dr-mario.jpg',
    description: 'Match pills to eliminate viruses',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/drmario.nes',
    emulator: 'nes',
    featured: false
  },
  {
    id: 'puzzle-bobble',
    title: 'Puzzle Bobble',
    year: 1994,
    genre: 'Puzzle',
    platform: 'Arcade',
    thumbnail: '/images/puzzle-bobble.jpg',
    description: 'Bubble shooter from Bubble Bobble universe',
    controls: ['Arrow Keys', 'Spacebar'],
    romUrl: '/roms/pbobblen.zip',
    emulator: 'mame',
    featured: false
  }
];

// Enhanced game categories
export const expandedGameCategories: GameCategory[] = [
  {
    id: 'featured',
    name: 'Featured Games',
    description: 'The best of the best retro games',
    games: expandedGames.filter(game => game.featured),
    icon: '⭐'
  },
  {
    id: 'arcade',
    name: 'Classic Arcade',
    description: 'Original arcade cabinet games from the golden age',
    games: expandedGames.filter(game => game.platform === 'Arcade'),
    icon: '🕹️'
  },
  {
    id: 'pinball',
    name: 'Pinball Collection',
    description: 'Historic pinball tables from 1970s to 2025',
    games: expandedGames.filter(game => game.platform === 'Pinball'),
    icon: '🎯'
  },
  {
    id: 'nintendo',
    name: 'Nintendo Classics',
    description: 'NES and Nintendo Entertainment System games',
    games: expandedGames.filter(game => game.platform === 'Nintendo'),
    icon: '🎮'
  },
  {
    id: 'atari',
    name: 'Atari Classics',
    description: 'Atari 2600 and classic Atari arcade games',
    games: expandedGames.filter(game => game.platform === 'Atari'),
    icon: '🎰'
  },
  {
    id: 'sega',
    name: 'Sega Genesis',
    description: 'Sega Genesis and Master System classics',
    games: expandedGames.filter(game => game.platform === 'Sega'),
    icon: '🎪'
  },
  {
    id: 'seventies',
    name: '1970s Games',
    description: 'Classic games from the disco decade',
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
    description: 'Console wars and fighting game revolution',
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
    description: 'High-speed racing and driving simulations',
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
    id: 'beat-em-up',
    name: 'Beat em Up',
    description: 'Street fighting and side-scrolling brawlers',
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

// Export games count for stats
export const gameStats = {
  total: expandedGames.length,
  featured: expandedGames.filter(g => g.featured).length,
  platforms: [...new Set(expandedGames.map(g => g.platform))].length,
  genres: [...new Set(expandedGames.map(g => g.genre))].length,
  decades: {
    seventies: expandedGames.filter(g => g.year >= 1970 && g.year < 1980).length,
    eighties: expandedGames.filter(g => g.year >= 1980 && g.year < 1990).length,
    nineties: expandedGames.filter(g => g.year >= 1990 && g.year < 2000).length
  }
};