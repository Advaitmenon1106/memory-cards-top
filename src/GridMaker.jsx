import { useEffect, useState } from "react";
import { ImagePicker } from "./SrcToElement";
import { ImageArrayGrabberJS } from "./ImageArrayGrabberJS";
import './GridMaker.css'
import { OnClickFunction } from "./ImageClickFunction";

export function GridMaker() {
    const [imgArray, setImageArray] = useState(null)
    const resultsPromise = ImageArrayGrabberJS(1)

    useEffect(() => {
        resultsPromise.then((photos) => {
            console.log(photos.photos)
            setImageArray(photos.photos)

        })
    }, [])

    if (imgArray) {
        // Pick random numbers

        const randomIndices = []

        for (let i = 0; i < 9; i++) {
            let choice = Math.floor(Math.random() * imgArray.length)
            while (randomIndices.includes(choice)) {
                choice = Math.floor(Math.random() * imgArray.length)
            }
            randomIndices.push(choice)
        }

        console.log(randomIndices)

        return (
            <div id="three-by-three-grid">
                {randomIndices.map((index)=>(
                    <img key={imgArray[index].id} src={imgArray[index].src.medium} id={imgArray[index].id} onClick={(event)=>OnClickFunction(event)}></img>
                ))}
            </div>
        )
    }

}