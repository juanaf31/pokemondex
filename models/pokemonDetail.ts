export interface PokemonDetailAttributes {
  abilities: any[];
  base_experience: number;
  game_indices: any[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: any[];
  name: string;
  order: number;
  past_types: any[];
  species: any[];
  sprites: SpritesAttribute;
  stats: StatsAttribute[];
  types: TypesAttribute[];
  weight: number;
}

interface TypesAttribute {
  slot: number;
  type: StatAttribute;
}

interface StatsAttribute {
  base_stat: number;
  effort: number;
  stat: StatAttribute;
}

interface StatAttribute {
  name: string;
  url: string;
}

interface SpritesAttribute {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: SpritesOtherAttribute;
}

interface SpritesOtherAttribute {
  dream_world: DreamWorldAttribute;
  official_work: OfficialWorkAttribute;
}
interface DreamWorldAttribute {
  front_default: string;
  front_female: string;
}
interface OfficialWorkAttribute {
  front_default: string;
}
