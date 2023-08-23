interface ISearchState {
  searchInput: string;
  searchQuery: string;
}

type SearchAction =
  | { type: "USER_INPUT"; payload: string }
  | { type: "SEARCH_CLICKED"; payload: string };

// interface ReducerProps {
//   state: ISearchState;
//   action: SearchAction;
// }

export const INITIAL_STATE: ISearchState = {
  searchInput: "",
  searchQuery: "",
};

export const searchReducer = (state: ISearchState, action: SearchAction) => {
  switch (action.type) {
    case "USER_INPUT":
      return {
        ...state,
        searchInput: action.payload,
      };
    case "SEARCH_CLICKED":
      return {
        ...state,
        searchQuery: action.payload,
      };
    default:
      return state;
  }
};
