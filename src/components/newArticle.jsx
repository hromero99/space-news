import { useContext, useEffect } from "react"
import { NewsContext } from "../context/newsContext"



export const NewArticleComponent = () => {

    const {newsState,newsDispatch} = useContext(NewsContext)

    console.log(newsState)
    console.log(newsDispatch)

    useEffect(() => {
        if (newsState.length === 0 ){

            fetch('https://api.spaceflightnewsapi.net/v4/articles/?limit=10').then((response) => {
                response.json().then((data) => {
                    console.log(data)
                    newsDispatch({
                        type: "addNews",
                        payload: data.results
                    })
                })
            })
        }

    },[newsState])


    return <article>


    </article>
}