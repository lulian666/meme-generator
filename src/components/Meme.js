import React from "react"
import memesData from "../memesData"

export default function Meme(){
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/26br.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    return (
        <main className="main">
            <div className="form">
                <input className="form--input" placeholder="text" type="text" />
                <input className="form--input" placeholder="text" type="text" />
                <button className="form--button" onClick={getMemeImage}>
                    Get a new meme image  🖼
                </button>
            </div>
            <img src={meme.randomImage} className="meme--image" alt="meme"/>
        </main>
        
    )
}