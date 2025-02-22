import React from 'react'

import { useGetUsersQuery, usePostUserMutation } from '../Redux/Slices/API/usersApiSlice';

const Users = () => {
    // Using a query hook automatically fetches data and returns query values
    const { data:users } = useGetUsersQuery()
    console.log(users);

    const newUser = {
        "id": 101,
        "name": "John wick",
        "username": "JohnW",
        "email": "Johnw@april.biz",
        "address": "",
        "phone": "8596748596",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    }

    const [postUser] = usePostUserMutation();

    const addUser = async () => {
        try {
            const response = postUser(newUser);
            console.log(response);
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Users List</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users && users.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <button onClick={addUser}>Add User</button>
        </div>
    )
}

export default Users