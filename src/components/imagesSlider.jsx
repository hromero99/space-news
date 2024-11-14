import { useContext } from "react"
import { ImagesContext } from "../context/imagesContext"



export const ImagesSliderComponent = () => {
    
    const images = useContext(ImagesContext)
    console.log(images)
    return <>
    
    </>
}