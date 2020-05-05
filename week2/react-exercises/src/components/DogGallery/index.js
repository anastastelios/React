import React, { useState } from 'react';
import DogButton from '../DogButton';
import DogPhoto from '../DogPhoto/index';

const DogGallery = () => {
    let [dogPhotos, setDogPhotos] = useState([]);

    const getDogPhoto = () => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                setDogPhotos(prevState => {
                    prevState.push(data.message);
                })
            })
            .catch(err => console.error(err))
    }

    const returnedGallery = dogPhotos.map(photo => {
        return (
            <DogPhoto src='photo' />
        )
    })

    return (
        <>
            <DogButton getDog={getDogPhoto} />
            {returnedGallery}
        </>
    )
}

export default DogGallery