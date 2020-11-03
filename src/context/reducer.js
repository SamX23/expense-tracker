export const initialState = {
  transaction: [
    {
      id: 1,
      text: "Makan",
      amount: -120,
    },
    {
      id: 2,
      text: "Bensin",
      amount: 25,
    },
  ],
};

export function reducer(state, action) {
  switch (action.type) {
    case "PUSH":
      return { ...state, transaction: [...state.transaction, action.item] };
    default:
      return state;
  }
}
