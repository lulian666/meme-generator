import React from "react"
// import memesData from "../memesData"

export default function Meme(){
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/26br.jpg"
    })

    const [allMemeImages, setAllMeme] = React.useState([])

    React.useEffect(() => {
        // fetch("https://api.imgflip.com/get_memes")
        //     .then(res => res.json())
        //     .then(data => setAllMemeImages(data.data.memes))
        
        async function getMemes(){
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMeme(data.data.memes)
        }

        getMemes()
    }, [])

    function getMemeImage() {
        const memesArray = allMemeImages
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        console.log(event.target)
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
    return (
        <main className="main">
            <div className="form">
                <input 
                    className="form--input" 
                    placeholder="Top Text" 
                    type="text" 
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    className="form--input" 
                    placeholder="Bottom Text" 
                    type="text" 
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button" 
                    onClick={getMemeImage}
                >
                    Get a new meme image  🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="meme"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            
        </main>
        
    )
}