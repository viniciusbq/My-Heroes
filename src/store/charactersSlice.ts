import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character, CharacterState } from '../types';

const initialState: CharacterState = {
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
    setCurrentCharactersLength(state, action: PayloadAction<number | any>) {
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
