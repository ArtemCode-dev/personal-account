import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IProfile } from "../../types/profile.types";
import { getProfile } from "../thunks/fetchProfile";

interface IProfileSlice {
    profileData:IProfile
    isLoading: boolean
}

const initialState:IProfileSlice = {
    profileData: {
        info: {
            icon: '',
            name: '',
            full_name: '',
            status: true,
            tag: '',
            study_group: '',
            student_number: '',
            phone_number: '',
            social_media: {
                discord: '',
                steam: '',
                vk: '',
            },
        },
        reservation: [],
        tournaments: [],
        achievements: [],
        teams: [],
        friends:[],
    },
    isLoading: true,
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {

    },
    //можно переписать на  RTK query
    extraReducers: {
        [getProfile.fulfilled.type]: (state, action: PayloadAction<IProfile>) => {
          state.isLoading = false;
          state.profileData = action.payload;
        },
        [getProfile.pending.type]: (state) => {
          state.isLoading = true;
        },
        [getProfile.rejected.type]: (state,  action: PayloadAction<string>) => {
          state.isLoading = false;
        },
      }
})

export const {reducer: profileReducer, actions: profileActions} = profileSlice;