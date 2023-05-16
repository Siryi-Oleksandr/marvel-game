import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://mocki.io';
const API_KEY = '5c32f1e9-1ad6-47f0-a54e-57bfd711b362';

export const fetchCards = createAsyncThunk(
  'cards/fetchCards',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/v1/${API_KEY}`);
      return response.data;
    } catch (error) {}
  }
);
