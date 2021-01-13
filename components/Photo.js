import React, { useState, useEffect } from 'react';
import {
  Text,
  Image,
  Dimensions,
} from 'react-native';

const Photo = () => {
    const apiKey = 'aBHCRL4VEsVTo2tFwFo-5xiOS75n-RDSK9vJMgWX714';
    const [photo, setPhoto] = useState('');
    const window = Dimensions.get('window');

    const getPhoto = () => {
        fetch(`https://api.unsplash.com/photos/random?client_id=${apiKey}`)
        .then((response) => response.json())
        .then((json) => {
            const url = json.urls.full;
            setPhoto(url)
        })
        .catch((error) => {
            console.error(error);
        });
    }

    useEffect(() => {
        getPhoto();
        setInterval(() => getPhoto(), 10000);
    }, []);

    if (photo) return <Image style={{ width: window.width, height: window.height}} source={{ uri: `${photo}` }}/>
    else return (console.log('Loading...'), <Text>Loading...</Text>);
}

export default Photo;
