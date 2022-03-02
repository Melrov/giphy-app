import { Add_Fav, Remove_Fav, Set_Search, Clear_Gifs } from "../actions";

const inititalState = {
  search: [],
  fav: [],
};

export default function gifReducer(state = inititalState, action) {
  switch (action.type) {
    case Add_Fav:
      return { ...state, favs: [...state.favs, action.payload] };
    case Remove_Fav:
      return {
        ...state,
        favs: state.fav.filter((val) => {
          val.id !== action.payload;
        }),
      };
    case Set_Search:
      return { ...state, search: action.payload };
    case Clear_Gifs:
      return { ...state, search: "", favs: [] };
    default:
      return state;
  }
}
