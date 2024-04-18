
import { useState } from "react";
import NoteList from "./NoteList";
import Header from "./Header";
import NoteForm from "./NoteForm";
export const baseUrl = 'http://localhost:3001/api/notes'



const App = () => {
  const [newNote, setNewNote] = useState("");
  const [notes, setNotes] = useState([]);

  return (
    <div>
      <Header/>
      <NoteList notes={notes} setNotes={setNotes}/>
      <NoteForm setNotes={setNotes} newNote={newNote} setNewNote={setNewNote} notes={notes}/>
    </div>
  );
};

export default App;