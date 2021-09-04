import React, { useState, useContext } from 'react'
import { firebase } from '../firebase'
import AuthContext from '../store/auth-context'
import { Typography } from '@material-ui/core'

export const ViewCard = () => {
    const authContext = useContext(AuthContext);
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    //create a reference to the collection
    //then query the data based on the user's matching id
    firebase.firestore().collection("users").where("userId", "==", authContext.token)
        .get()
        .then(docs => {
            const items = [];
            docs.forEach(doc => {
                const data = doc.data()
                data.id = doc.id;
                items.push(data)
            })
            setUsers(items)
            setLoading(false)
        }).catch((err) => {
            alert("Error showing information: ", err)
            console.log(err)
        })

    return (
        <div>
            <Typography variant="h5" gutterBottom>My Business Card</Typography>
            {!authContext.token && <Typography variant="body1">Please log in to view information.</Typography>}
            {loading && <p>Loading...</p>}
            {!loading && users.map((user, i) => (
                <div key={i}>
                    <Typography variant="h6" gutterBottom>{user.name}</Typography>
                    <Typography variant="subtitle2" gutterBottom>{user.occupation}</Typography>
                    <Typography variant="body1" gutterBottom>{user.bio}</Typography>
                </div>
            ))}
        </div>
    )
}