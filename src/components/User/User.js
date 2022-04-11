import React from 'react';

const User = ({user}) => {
    const {id, name, username} = user
    return (
        <div>
            <h2>ID:{id} Name: {name} Username: {username}</h2>
        </div>
    );
};

export {User};