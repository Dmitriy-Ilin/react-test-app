import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Card {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface CardState {
  cards: Card[];
  likedCards: number[];
  filtered: boolean;
}

const initialState: CardState = {
  cards: [],
  likedCards: [],
  filtered: false,
};

const cardSlice = createSlice({
  name: 'cardList',
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<Card[]>) => {
      state.cards = action.payload;
    },
    likeCard: (state, action: PayloadAction<number>) => {
      state.likedCards.push(action.payload);
    },
    unlikeCard: (state, action: PayloadAction<number>) => {
      state.likedCards = state.likedCards.filter((id) => id !== action.payload);
    },
    removeCard: (state, action: PayloadAction<number>) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
    toggleFilter: (state) => {
      state.filtered = !state.filtered;
    },
  },
});

export const { setCards, likeCard, unlikeCard, removeCard, toggleFilter } =
  cardSlice.actions;
export default cardSlice.reducer;
