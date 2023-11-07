import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import NoteArea from "./NoteArea";

function App() {
  // creating a State variable to store the notes
  const [notes, setNotes] = useState([]);

  // Function to add a new note to the notes in array
  // Create a new array by spread operator the previous notes and the newNote is added in array notes
  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }
  // Function to delete a note from the notes array based on its index
  // Using the filter method to create a new array of notes excluding the note with the specified index
  // If the note's index matches the given id, delete it.

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <NoteArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
