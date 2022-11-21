import React, {useContext, useEffect, useState} from 'react'
import AuthContext from '../context/AuthContext'

const CreateNote = () => {
    const {user, authToken} = useContext(AuthContext)
    const [title, setTitle] = useState("")
    const [text, setText] = useState("");
    console.log(user)

    const createNote = async (e) => {
        e.preventDefault();
        await fetch('http://127.0.0.1:8000/api/notes/', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${authToken.access}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: user.user_id,
                title: title,
                text: text
            }),
        })
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            window.location.replace('/')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    
    return (
      <form onSubmit={createNote}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="text"
          placeholder="Note Text"
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    );
}

export default CreateNote