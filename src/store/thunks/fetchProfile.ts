import { createAsyncThunk } from "@reduxjs/toolkit";
import { $api } from "../../http/api";
import { IProfile } from "../../types/profile.types";

export const getProfile = createAsyncThunk(
    'profile/getProfile',
    async (a:string,thunkAPI) => {
      try {
        const response = await $api.get<IProfile>(`/${a}`)
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue("Не удалось найти")
      }
    }
  )