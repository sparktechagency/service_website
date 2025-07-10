import { ISubscriptionStatus } from '@/types/subscription.type'
import { createSlice } from '@reduxjs/toolkit'

type TInitialState = {
    subscription_status: ISubscriptionStatus |  null
}

const initialState: TInitialState = {
  subscription_status: null
}

export const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {
    SetSubscriptionStatus: (state, action) => {
      state.subscription_status=action.payload;
    }
  },
})

export const { SetSubscriptionStatus } = subscriptionSlice.actions;

const subscriptionSliceReducer = subscriptionSlice.reducer;
export default subscriptionSliceReducer;