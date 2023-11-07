import React, { useState } from "react";

function NoteArea(props) {
  // creating State variable to store the current note with empty
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    // Using object destructuring, the name and value properties are extracted from the event target
    // Updates the note state by creating a new object
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }
  // Function to submit the note
  function submitNote(event) {
    //  Check if the note title and content are empty and does not allow to submit
    if (note.title.trim() === "" && note.content.trim() === "") {
      event.preventDefault();
      return;
    }
    //calling the onAdd prop function passed from the parent component and pass the note as an argument
    props.onAdd(note);
    // Reseting the note state to empty value
    setNote({ title: "", content: "" });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}
export default NoteArea;
