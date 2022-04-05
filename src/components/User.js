import React from 'react';

const User = ({user}) => {
    const {id, name, username, email, address: {street, city}} = user;
    return (
        <div>

                <h2>Id:{id} name: {name} username: {username}</h2>
                <p>{email}</p>
            <p>Street: {street}, city: {city}</p>

        </div>
    );
};

export default User;