import axios from "axios";
import { baseUrl } from "./App";

const NoteForm = ({setNotes, newNote, setNewNote, notes}) => {
   const formStyle = {
        display: "flex",
        justifyContent: "left",
        flexDirection: "column",
        alignItems: "left",
   }
   const buttonStyle = {
    width: "150px",
    height: "30px",
    marginTop: "30px",
    backgroundColor: "rgb(80, 17, 230)",
    fontSize: "1rem",
    color: "white",
    border: "0",
    borderRadius: "10px"
   }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
    console.log(event.target.value);
  };

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      date: new Date().toISOString(),  
    };

    axios
      .post(baseUrl, noteObject)
      .then((response) => {
        console.log(response);
        setNotes(notes.concat(response.data))
        setNewNote("");
      });
  };

  return (
    <form style={formStyle} onSubmit={addNote}>
      <input value={newNote} onChange={handleNoteChange} />
      <button style={buttonStyle}>save</button>
    </form>
  );
  
};

export default NoteForm;