import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

interface characterState {
  character: Character[];
  currentCharacterLength: number;
}

const initialState: characterState = {
  character: [],
  currentCharacterLength: 0,
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
  },
});

export const { setCharacters, setCurrentCharactersLength } =
  characterSlice.actions;
export default characterSlice.reducer;
