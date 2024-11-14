import { useContext } from "react"
import { NewsContext } from "../context/newsContext"
import { NewArticleComponent } from "../components/newArticle"
import { ImagesSliderComponent } from "../components/imagesSlider"



export const NewsPage = () => {
    
  
    return <>
    
        <NewArticleComponent/>
        <ImagesSliderComponent/>
    </>
}