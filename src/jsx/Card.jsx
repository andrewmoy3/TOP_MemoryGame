import React, {useState, useEffect} from "react";
import load from '../assets/loading-screen-loading.gif'

export default function Card({id, reshuffle}){

    const handleClick = () => {
        reshuffle(id);
      };

    const [image, setImage] = useState({img: load, name: 'loading...'})

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/' + id, {mode: 'cors'})
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                setImage({img: response.sprites.front_default, name: response.name});
            });
      }, [])
    

    return (
        <div className='pokemon' onClick={handleClick}>
            <figure>
                <img src={image.img}  />
                <figcaption>{image.name}</figcaption>
            </figure>
        </div>
    )
}