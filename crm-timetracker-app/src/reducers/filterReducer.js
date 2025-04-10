export const initialFilters = {
  status: [],
  category: [],
  company: [],
};

export function filterReducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      const current = state[action.key];
      const updated = current.includes(action.value)
        ? current.filter((v) => v !== action.value)
        : [...current, action.value];
      return {
        ...state,
        [action.key]: updated,
      };

    case "RESET_FILTERS":
      return initialFilters;
    default:
      return state;
  }
}
