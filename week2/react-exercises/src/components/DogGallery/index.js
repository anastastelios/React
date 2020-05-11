import React, { useState } from 'react';
import DogButton from '../DogButton';
import DogPhoto from '../DogPhoto/index';

const DogGallery = () => {
    let [dogPhotos, setDogPhotos] = useState([]);


    // const getDogPhoto = async () => {
    //     const response = await fetch('https://dog.ceo/api/breeds/image/random')
    //     const data = await response.json()
    //     setDogPhotos(prevState => {
    //         return ([...prevState, data.message]);
    //     })
    // }

    const getDogPhoto = () => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                setDogPhotos(prevState => {
                    return ([...prevState, data.message]);
                })
            })
            .catch(err => console.error(err))
    }

    // const returnedGallery = dogPhotos.map(photo => {
    //     return (
    //         <DogPhoto photo={photo} />
    //     )
    // })

    return (
        <>
            <DogButton getDog={getDogPhoto} />
            {dogPhotos.length > 0 ? dogPhotos.map((photo, index) => <DogPhoto photo={photo} key={index} />) : <h2>Please click to get your dog!</h2>}
        </>
    )
}

export default DogGallery