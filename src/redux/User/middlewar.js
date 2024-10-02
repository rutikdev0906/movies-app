import userSlice from "./userSlice"

const fetchUserMiddleware = () => {
    return async function(dispatch){
        try{
            dispatch(userSlice.actions.userLoading());
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
            if(!response.ok){
                throw new Error('Failed to fetch user data');
            }
            const user = await response.json();
            console.log('userData: ', user);
            dispatch(userSlice.actions.userData(user));
        } catch(error){
            dispatch(userSlice.actions.userError());
            console.error('Error fetching user data:', error);
        } finally{
            dispatch(userSlice.actions.userLoading(false));
        }
    }
}

export default fetchUserMiddleware;