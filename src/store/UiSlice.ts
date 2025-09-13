import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ToastState {
  message: string;
  type: 'success' | 'error' | 'info' | null;
  visible: boolean;
}

interface UIState {
  toast: ToastState;
}

const initialState: UIState = {
  toast: {
    message: '',
    type: null,
    visible: false,
  },
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showToast(state, action: PayloadAction<{ message: string; type: 'success' | 'error' | 'info' }>) {
      state.toast.message = action.payload.message;
      state.toast.type = action.payload.type;
      state.toast.visible = true;
    },
    hideToast(state) {
      state.toast.visible = false;
      state.toast.message = '';
      state.toast.type = null;
    },
  },
});

export const { showToast, hideToast } = uiSlice.actions;
export default uiSlice.reducer;
