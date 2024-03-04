import React from 'react';
import User from './User';
import UserCard from './UserCard';
import './UserListView.css';

interface Props {
    users: User[];
}

const UserListView: React.FC<Props> = ({ users }) => {
    return (
        <React.Fragment>
            <div className="user-list-view">
                {users.map(user => <UserCard key={user.id} user={user} />)}
            </div>
        </React.Fragment>
    );
}

export default UserListView;