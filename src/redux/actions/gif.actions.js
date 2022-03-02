export const Add_Fav = "Add Fav"
export const Remove_Fav = "Remove Fav"
export const Set_Search = "Set Search"
export const Clear_Gifs = "Clear Gifs"

export const addFav = (gif) => {
    return { type: Add_Fav, payload: gif}
}

export const removeFav = (id) => {
    return { type: Remove_Fav, payload: id }
}

export const setSearch = (searchResults) => {
    return { type: Set_Search, payload: searchResults}
}

export const clearGifs = () => {
    return { type: Clear_Gifs }
}