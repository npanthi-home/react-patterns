import React, { useEffect, useState } from 'react';
import UserListView from './UserListView';
import userData from './user_list.json';
import User from './User';

const UserListContainer: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        setUsers(userData);
        /* You can call the API here */
    }, [])

    return (
        <UserListView users={users} />
    );
}

export default UserListContainer;