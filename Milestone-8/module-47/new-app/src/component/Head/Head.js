import React, { useEffect, useState } from 'react';
import User from '../User/User';

const Head = () => {
    const [users, setUsers] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    return (
        <div>
            {
                users.map(user => <User key={user.id} name={user}/>)
            }
        </div>
    );
};
export default Head;