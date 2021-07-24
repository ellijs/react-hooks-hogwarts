import { useState } from 'react'

function Hog({ hog }) {
    const { name, image, specialty, weight, greased, "highest medal achieved":medal} = hog

    const [ isClicked, setIsClicked ] = useState(false)
    
    const handleFrontBack = () => {
        setIsClicked(!isClicked)
    }

    const Front = () => {
        return(
              <div onClick={handleFrontBack} class="pigTile">
                <h3>{name}</h3>
                <img style={{width: "100%"}} src={image} alt={name}></img>
              </div>
           
        )
    }

    const Back = () => {
        return(
            <div onClick={handleFrontBack} class="pigTile">
                <p class="achievementText">{specialty}</p>
                <p class="achievementText">{weight}</p>
                <p class="achievementText">{greased? "Greased" : "Not Greased"}</p>
                <p class="achievementText">{medal}</p>
            </div>
        )
    }

    return(
        <li class="ui eight wide column">
            { isClicked? <Back /> : <Front /> }
        </li>
    )
}

export default Hog