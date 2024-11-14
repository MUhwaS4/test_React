import { configureStore, createSlice } from '@reduxjs/toolkit';

export const amountsSlice = createSlice({
  name: 'amountsSlice', // 슬라이드이름
  initialState: { result: null, list: [], num: 0 }, // 상태 초기값
  reducers: { // 리듀서 함수
    earnings: (state, action) => {
      state.result = state.result + action.num;
      state.list.push({type: "수입", num: action.num, id: state.num});
      state.num = state.num + 1;

      console.log("현재 금액: " + state.result);
      console.log("수입: " + action.num);
    },
    expenditure: (state, action) => {
      state.result = state.result - action.num;
      state.list.push({type: "지출", num: action.num, id: state.num});
      state.num = state.num + 1;

      console.log("현재 금액: " + state.result);
      console.log("지출: " + action.num);
    },
    delete: (state, action) => {
      state.list = state.list.filter(item => item.id !== action.id);
      if (action.text == "수입") {
        state.result = state.result - action.num;
      } else if (action.text == "지출") {
        state.result = state.result + action.num;
      }
    }
  }
})

const store = configureStore({
  reducer: {
    amounts: amountsSlice.reducer
  }
})

export default store;