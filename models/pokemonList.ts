export interface PokemonListAttributes {
  count: number;
  next: string;
  previous: string;
  results: ResultAttribute[];
}

interface ResultAttribute {
  name: string;
  url: string;
}
