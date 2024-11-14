import { createSlice } from "@reduxjs/toolkit";


export const ArticleSlice = createSlice({
    name: "article",
    initialState: [],
    reducers: {
        addArticleList: (state,action) => {
            //action.payload es un array de articulos
            console.log(action)
           
            return [...state,...action.payload]
      

        }
    }
})

export const {addArticleList} = ArticleSlice.actions