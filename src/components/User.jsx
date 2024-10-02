import React, { useEffect, useState } from 'react'

const User = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchUserData = async()=>{
            try{
                setIsLoading(true);
                const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
                if(!response.ok){
                    throw new Error('Failed to fetch user data');
                }
                const data = await response.json();
                setUser(data);
                setIsLoading(false);
            } catch(e){
                setError(true);
                setIsLoading(false);
                console.error(e);
            } finally{
                console.log('Fetch operation complete');
            }
        }
        fetchUserData();
    },[]);

    if(isLoading){
        return <div>Loading...</div>
    }
    if(error){
        return <div>Error fetching user data</div>
    }

  return (
    <div>
        <h2>User Details</h2>
        <p>User ID: {user?.id}</p>
        <p>User Name: {user?.name}</p>
        <p>User Email: {user?.email}</p>
        <p>User Address: {user?.address?.street}, {user?.address?.suite}, {user?.address?.city}, {user?.address?.zipcode}</p>
        <p>User Phone: {user?.phone}</p>
        <p>User Website: {user?.website}</p>
        <p>User Company: {user?.company?.name}, {user?.company?.catchPhrase}, {user?.company?.bs}</p>
    </div>
  )
}

export default User