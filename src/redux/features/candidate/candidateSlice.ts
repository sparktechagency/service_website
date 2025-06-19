/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit'

type TInitialState = {
  overview: {
    favoriteJobCount: number;
    applicationCount: number;
    jobAlertCount: number;
    newAlertCount: number;
    recentlyApplied: any[];
  };
};

 const initialState: TInitialState = {
   overview: {
     favoriteJobCount: 0,
     applicationCount: 0,
     jobAlertCount: 0,
     newAlertCount: 0,
     recentlyApplied: [],
   },
 };


const candidateSlice = createSlice({
  name: 'candidate',
  initialState: initialState,
  reducers: {
    SetCandidateOverview: (state, action) => {
      state.overview=action.payload
    },
  }
})

export const { SetCandidateOverview } = candidateSlice.actions

const candidateSliceReducer = candidateSlice.reducer;
export default candidateSliceReducer;