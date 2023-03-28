import React from 'react'
import Axios from 'axios'
const User = () => {

    let [users, setUsers] = React.useState([])

    //useEffect(() => { }, []);//functional comp life cycle method
    React.useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setUsers(response.data)
            })
            .catch()
    }, []);
    return (
        <div>
            <h3>User Data</h3>
            <h4>{JSON.stringify(users)}</h4>
            
        </div>
    )
}

export default User