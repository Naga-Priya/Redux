import React from 'react';

function User(props) {
    const {name,email} = props.user;
    return (
        <div>
            <h1>{name}</h1>
            <h1>{email}</h1>
        </div>
    );
}

export default User;