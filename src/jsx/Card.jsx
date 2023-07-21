import React, {useState, useEffect} from "react";
import load from '../assets/loading-screen-loading.gif'

export default function Card(props){

    // function handleClick(){
    //     console.log(props.id  + "clicked!")
    // }

    const [image, setImage] = useState({img: load, name: 'loading...'})

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/' + props.id, {mode: 'cors'})
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                setImage({img: response.sprites.front_default, name: response.name});
            });
      }, [])
    

    return (
        <div onClick={props.refreshDisplay}>
            <figure>
                <img src={image.img}  />
                <figcaption>{image.name}</figcaption>
            </figure>
        </div>
    )
}