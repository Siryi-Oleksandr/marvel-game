import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6468a17860c8cb9a2cae21db.mockapi.io';

export const fetchCards = createAsyncThunk(
  'cards/fetchCards',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/marvel/heroes`);
      return response.data;
    } catch (error) {}
  }
);
