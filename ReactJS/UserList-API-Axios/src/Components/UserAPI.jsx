import React, { useEffect, useState } from 'react'
import axios from 'axios';

const UserAPI = () => {
  const url = 'https://jsonplaceholder.typicode.com/users';

  const [users, setUsers] = useState([]);

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

  const getUsers = async () => {
    try {
      const response = await axios.get(url);
      // console.log(response);
      setUsers(response.data);
    }
    catch (error) {
      console.log(error);
    }
  }

  const postUser = async () => {
    try {
      const response = await axios.post(url, newUser);
      setUsers([...users, response.data]);
    }
    catch (error) {
      console.log(error);
    }
  }

  // console.log(users);
  useEffect(() => {
    getUsers();
  }, []);

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
      <button onClick={postUser}>Add User</button>
    </div>
  )
}

export default UserAPI