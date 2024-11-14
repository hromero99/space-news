import { configureStore } from "@reduxjs/toolkit";
import { ArticleSlice } from "../features/article/articleSlice";


export const store = configureStore({
    reducer: {
        article: ArticleSlice.reducer
    }
})