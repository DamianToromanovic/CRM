export const initialContact = {
  id: "",
  name: "",
  email: "",
  phone: "",
  status: "",
  category: "",
  company: "",
  notes: "",
  createdAt: "",
  lastContact: "",
};

export function contactReducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PHONE":
      return { ...state, phone: action.payload };
    case "SET_STATUS":
      return { ...state, status: action.payload };
    case "SET_CATEGORY":
      return { ...state, category: action.payload };
    case "SET_COMPANY":
      return { ...state, company: action.payload };
    case "SET_NOTES":
      return { ...state, notes: action.payload };
    case "SET_LASTCONTACT":
      return { ...state, lastContact: action.payload };
    case "SET_CREATEDAT":
      return { ...state, createdAt: action.payload };
    case "RESET":
      return { initialContact };
    case "LOAD_CONTACT":
      return action.payload;

    default:
      break;
  }
}
