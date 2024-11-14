import { createContext } from "react";



export const NewsContext = createContext()



export const newsReducer = (state, action) => {
    if (action.type === 'addNews') {
        return [...action.payload,...state]
    }
    throw Error('Unknown action.');
}
