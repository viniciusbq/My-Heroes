// Interfaces para o estado do personagem
export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: {
    available: number;
    collectionURI: string;
    items: Comic[];
  };
}

export interface Comic {
  items: Items[];
  id: number;
  title: string;
  comics?: any;
  description?: string;
  resourceURI?: string;
  collectionURI?: string;
  thumbnail?: {
    path: string;
    extension: string;
  };
}

export interface Items {
  pageCount: number;
  description: string;
  images: any;
  title: string;
  modified: string;
  id: number | null;
  name: string;
  resourceURI?: string;
}

// Interfaces para o estado de gerenciamento
export interface CharacterState {
  character: Character[];
  currentCharacterLength: number;
  selectedCharacter: Character | null;
}
export interface PaginationState {
  currentPage: number;
}

export interface FavoritesState {
  favorites: Character[];
  showFavorites: boolean;
}

export interface LoadingState {
  isLoading: boolean;
}

// Interfaces para os componentes
export interface IHeroeCardProps {
  character: Character;
  isFavorite: boolean;
  onFavoriteClick: () => void;
}

export interface IHeroeDetailCardProps {
  heroe: Character | null;
}

export interface TagContainerProps {
  activate?: string;
}
