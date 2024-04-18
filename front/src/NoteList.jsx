import { useEffect } from "react";
import axios from "axios";
import { baseUrl } from "./App"

const NoteList = ({notes, setNotes}) => {
    const listaStyle = {
        display: "flex",
        flexDirection: "column",
        marginBottom: "10px",
        backgroundColor: "white",
        
        
      }
    const notasStyle = {
        margin: "5px 0" 
        
    }
   
  useEffect(() => {
    console.log("effect");
    axios.get(baseUrl).then((response) => {
      setNotes(response.data);
    });
  }, []);

  return(
  <ul style={listaStyle}>
    <div style={notasStyle}>
        {notes.map((note) => (
        <li key={note.id}>{note.content}</li>
        ))}
    </div>
  </ul>
  )
};

export default NoteList;