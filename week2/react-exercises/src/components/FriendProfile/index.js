import React from 'react'

const FriendProfile = props => {
    return (
        <>
            {props.friend.name && <ul>
                <li>Name: {props.friend.name.first} {props.friend.name.last}</li>
                <li>Address: {props.friend.location.street.name} {props.friend.location.street.number}</li>
                <li>Country: {props.friend.location.country}</li>
                <li>Email: {props.friend.email}</li>
                <li>Phone: {props.friend.phone}</li>
            </ul>
            }
        </>
    )
}

export default FriendProfile