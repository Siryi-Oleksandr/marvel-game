import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://mocki.io';
const API_KEY = '2497b5ed-ec57-47d0-bb7e-c68f5c2e7c88';

export const fetchCards = createAsyncThunk(
  'cards/fetchCards',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/v1/${API_KEY}`);
      return response.data;
    } catch (error) {}
  }
);
