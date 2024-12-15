import { createClient } from "pexels"
import { useState } from "react";

export function Image_Grabber() {
    // const endpoint_generic_part = "https://api.pexels.com/v1/"
    const client = createClient('w93M0NVwaG2KkpiVWcIizUINC4lWLaUP9siQKz7dknMuIgR7lfgUrOoL');
    const [imageUrl, changeUrl] = useState('')

    const query = 'road';

    client.photos.search({ query }).then(photos => {
        console.log(photos.photos[0].src.large)
        changeUrl(photos.photos[0].src.large)
    })

    if (imageUrl) {
        return (
            <img src={imageUrl}></img>
        )
    }
}