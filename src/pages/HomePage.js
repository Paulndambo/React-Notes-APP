
import React, {useContext, useState, useEffect} from 'react';
import AuthContext from '../context/AuthContext'
import { Link } from 'react-router-dom';

const HomePage = () => {
  let {user, authToken} = useContext(AuthContext)

  let [notes, setNotes] = useState([])
  
  useEffect(() => {
    //const response = await
    getNotes()
  }, [])

  let getNotes = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/notes/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + String(authToken.access)
        },
    })
    let data = await response.json()
    setNotes(data)
    //console.log('Notes', data)
  }
  console.log('Notes', notes)

  /*
    <p>My Notes</p>
    <ul>
      {notes.map((note) => {
        return <li>{note.title}</li>
      })}
    </ul>
  */

  return (
    <>
      {user ? (
        <>
        <Link to={`/create-note`}>CreateNote</Link>
          <ul>
            {notes.map((note) => {
              return <li key={note.id}>{note.title}</li>;
            })}
          </ul>
        </>
      ) : (
        window.location.replace("/login")
      )}
    </>
  );
}

export default HomePage