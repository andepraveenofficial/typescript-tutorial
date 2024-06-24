import {FC, useEffect, useState} from 'react'

interface User {
    id: number;
    name: string;
    username: string;
  }

const GetData:FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setUsers(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

      return (
        <div>
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.name} - @{user.username}
              </li>
            ))}
          </ul>
        </div>
      );
}

export default GetData
