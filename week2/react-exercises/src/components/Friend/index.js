import React, { useState } from 'react'
import Button from '../Button';
import FriendProfile from '../FriendProfile';

const Friend = props => {
    const [friend, setFriend] = useState({});

    const getFriend = () => {
        fetch('https://www.randomuser.me/api?results=1')
            .then(response => response.json())
            .then(data => {
                setFriend(data.results[0]);
            })
            .catch(err => console.error(err))
    }

    return (
        <>
            <Button getFriend={getFriend} />
            <FriendProfile friend={friend} />
        </>
    )
}

export default Friend