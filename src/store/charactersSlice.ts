import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Comic {
  items: Items[];
  id: number;
  title: string;
  comics?: any;
  description?: string;
  resourceURI?: string;
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
  modified: string | number | Date;
  id: number | null;
  name: string;
  resourceURI?: string;
}

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

interface characterState {
  character: Character[];
  currentCharacterLength: number;
  selectedCharacter: Character | null;
}

const initialState: characterState = {
  character: [],
  currentCharacterLength: 0,
  selectedCharacter: null,
};

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setCharacters(state, action: PayloadAction<Character[]>) {
      state.character = action.payload;
    },
    setCurrentCharactersLength(state, action: PayloadAction<Character[]>) {
      state.currentCharacterLength = action.payload.length;
    },
    setSelectedCharacter(state, action: PayloadAction<any>) {
      state.selectedCharacter = action.payload;
    },
  },
});

export const {
  setCharacters,
  setCurrentCharactersLength,
  setSelectedCharacter,
} = characterSlice.actions;
export default characterSlice.reducer;
