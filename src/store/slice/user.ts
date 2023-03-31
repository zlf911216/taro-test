import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserInfo = {
  id: number;
  avatar: string;
  completeInfo: number;
  mobile: string;
  openid: string;
  token: string;
  sex: 1 | 2;
  userAccount: string;
  userName: string;
};
type InitialState = {
  userInfo?: UserInfo;
  city: string;
};

const initialState: InitialState = {
  city: "未知",
};

const rootSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    clear: (state) => {
      state.userInfo = undefined;
      state.city = "未知";
    },
  },
});

export const user = rootSlice.reducer;
export const actions = rootSlice.actions;
