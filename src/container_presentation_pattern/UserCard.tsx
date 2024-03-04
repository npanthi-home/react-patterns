import React from 'react';
import User from './User';
import './UserCard.css';

interface Props {
    user: User;
}

const UserCard: React.FC<Props> = ({ user }) => {
    return (
        <div className="user-card">
            <h2>{user.username}</h2>
            <p>ID: {user.id}</p>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
            <p>City: {user.city}</p>
        </div>
    );
};

export default UserCard;