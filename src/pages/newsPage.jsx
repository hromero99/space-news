import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addArticleList } from "../features/article/articleSlice"


export const NewsPage = () => {

    const dispatch = useDispatch()
    const articleData = useSelector((state) => state.article)
    useEffect(() => {

        const fetchArticles = async () => {
            const response = await fetch('https://api.spaceflightnewsapi.net/v4/blogs/?limit=10')
            const articleJsonData = await response.json();
            dispatch(addArticleList(articleJsonData.results))
        }
        fetchArticles()
    },[])
    console.log(articleData)
    return <>
        <h4>News Section</h4>
        {articleData.map((article,index) => <>
            <h4>{article.title}</h4>
            <h4>{article.summary}</h4>

        </>)}
    </>
}