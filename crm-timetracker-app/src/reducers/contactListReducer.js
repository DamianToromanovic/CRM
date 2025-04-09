export const initialContactList = [];

export const contactListReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((contact) => contact.id !== action.payload.id);
    case "UPDATE":
      return state.filter((c) =>
        c.id === action.payload.id ? action.payload : c
      );
    case "RESET_ALL":
      return initialContactList;

    default:
      return state;
  }
};
