import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  isAuthentificate: boolean
}

const initialState: AuthState = {
  isAuthentificate: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    auth: (state) => {
      state.isAuthentificate = true
    },
    deauth: (state) => {
      state.isAuthentificate = false
    },
  },
})

export const { auth, deauth } = authSlice.actions

export default authSlice.reducer