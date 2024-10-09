/* eslint-disable node/no-unsupported-features/es-syntax */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store/rootReducer'

// 定义 CommonSnackbar 的类型
// interface CommonSnackbar {
//   severity: 'error' | 'info' | 'success' | 'warning';
//   message: string;
//   duration: number;
//   open: boolean;
// }

// 定义初始状态的类型
interface MenuState {
  open:boolean
}

const initialState: MenuState = {
  open:false,
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    // setCommonSnackbar: (state, action: PayloadAction<Partial<CommonSnackbar>>) => {
    //   state.commonSnackbar = { ...state.commonSnackbar, ...action.payload };
    // },
    setOpen: (state, action: PayloadAction<Partial<boolean>>) => {
        state.open = action.payload;
      },
  },
});

export const selectMenu = (state: RootState) => state.menuSlice;

export const { setOpen } = menuSlice.actions;

export default menuSlice.reducer;