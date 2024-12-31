import { useEffect, useState } from "react";
import { ImagePicker } from "./SrcToElement";
import { ImageArrayGrabberJS } from "./ImageArrayGrabberJS";

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
            let choice = Math.floor(Math.random() * 80)
            while (randomIndices.includes(choice)) {
                choice = Math.floor(Math.random() * 80)
            }
            randomIndices.push(choice)
        }

        console.log(randomIndices)

        return (
            <div id="three-by-three-grid">

            </div>
        )
    }


}