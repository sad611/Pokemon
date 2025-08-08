export const colors = {
  primary: '#DC2626',
  secondary: '#18202F',
  cardBackground: '#2E3847',
  textPrimary: '#FFFFFF',
  textSecondary: '#BDBDBD',
  imageBackground: '#27313F',
  border: '#1F2937',
  shadow: '#000000',
  statusBar: '#DC2626',
  navigationBar: '#DC2626',
  divider: '#eeeeee',
};

export const colorsLight = {
  primary: '#DC2626',
  secondary: '#18202F',
  cardBackground: '#F3F4F6',
  textPrimary: '#424242',
  textSecondary: '#9E9E9E',
  imageBackground: '#E5E7EB',
  border: '#1F2937',
  shadow: '#000000',
};

export const typeBackground = Object.freeze({
  grass: '#A7C693',
  fire: '#E48A75',
  water: '#8DAFD2',
  electric: '#F5D68F',
  psychic: '#F0A7BF',
  poison: '#C197BB',
  ground: '#D8C59A',
  rock: '#C6B98F',
  bug: '#C7CD7D',
  fighting: '#B88B7B',
  normal: '#BFBBAE',
  fairy: '#E2C8DE',
  ghost: '#9294C2',
  ice: '#A8D7E3',
  dragon: '#9795C1',
  dark: '#9A867E',
  steel: '#C4C4D2',
  default: '#BFBBAE',
});

// export const typeBackground = Object.freeze({
//   grass: '#48D0B0',    // A vibrant, minty green
//   fire: '#FC6C6D',     // A strong, reddish-orange
//   water: '#58ABF6',    // A clear, bright blue
//   electric: '#FFCE4B', // A bold, electric yellow
//   psychic: '#F95587',  // A vivid magenta
//   poison: '#B97FC9',   // A striking lavender
//   ground: '#D2B074',   // A rich, sandy brown
//   rock: '#C5B78C',     // A solid, stony tan
//   bug: '#A6B949',      // A lively lime green
//   fighting: '#D56723', // A deep, rusty orange
//   normal: '#B0B0B0',   // A clean, neutral gray
//   fairy: '#F4B6BC',    // A soft, but distinct, rose pink
//   ghost: '#7B62A3',    // A spooky, muted purple
//   ice: '#74CEC0',      // A cool, icy teal
//   dragon: '#6F38F6',   // A powerful, royal purple/blue
//   dark: '#707070',     // A strong charcoal gray
//   steel: '#B7B7CE',    // A clear, metallic light gray
//   default: '#B0B0B0',  // Use 'normal' as the fallback
// });

export const typeBadge = Object.freeze({
  grass: '#90C366',
  fire: '#E55E40', 
  water: '#6495D0',
  electric: '#F6C753',
  psychic: '#F07DA4',
  poison: '#A961A1',
  ground: '#D1B569',
  rock: '#B9A664',
  bug: '#B1BB41',
  fighting: '#9A563F',
  normal: '#ACA696',
  fairy: '#DAB0D4',
  ghost: '#6164AB',
  ice: '#7BCBE2',
  dragon: '#6663AA',
  dark: '#725649',
  steel: '#ADADC5',
  default: '#ACA696',
});

// export const typeBadge = Object.freeze({ 
//   grass: '#48D0B0',
//   fire: '#F08030', 
//   water: '#6890F0',
//   electric: '#F8D030',
//   psychic: '#F85888',
//   poison: '#A040A0',
//   ground: '#E0C068',
//   rock: '#B8A038',
//   bug: '#A8B820',
//   fighting: '#C03028',
//   normal: '#A8A878',
//   fairy: '#EE99AC',
//   ghost: '#705898',
//   ice: '#98D8D8',
//   dragon: '#7038F8',
//   dark: '#705848',
//   steel: '#B8B8D0',
//   default: '#A8A878',
// });

export const statsColor = Object.freeze({
  hp: '#9EE865',
  attack: '#F5DE69',
  defense: '#F09A65',
  'special-attack': '#66D8F6',
  'special-defense': '#899EEA',
  speed: '#E46CCA',
});

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 20,
  xl: 24,
};

export const borderRadius = {
  small: 8,
  medium: 12,
  large: 16,
};

export const typography = {
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 16,
  },
  caption: {
    fontSize: 14,
  },
};

export const theme = {
  colors,
  spacing,
  typography,
};
