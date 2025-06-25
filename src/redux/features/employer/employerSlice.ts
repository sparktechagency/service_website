import { createSlice } from '@reduxjs/toolkit'

type TInitialState = {
  overview: {
    totalJobs: number;
    totalApplications: number;
  };
};

 const initialState: TInitialState = {
   overview: {
    totalJobs: 0,
     totalApplications: 0
   },
 };


const employerSlice = createSlice({
  name: 'employer',
  initialState: initialState,
  reducers: {
    SetEmployerOverview: (state, action) => {
      state.overview=action.payload
    },
  }
})

export const { SetEmployerOverview } = employerSlice.actions

const employerSliceReducer = employerSlice.reducer;
export default employerSliceReducer;