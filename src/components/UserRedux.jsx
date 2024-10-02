import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import fetchUserMiddleware from '../redux/User/middlewar';

const UserRedux = () => {
    const { error, isLoading, user } = useSelector((state)=>state.user)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUserMiddleware)
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

export default UserRedux