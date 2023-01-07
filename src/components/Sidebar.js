import {useEffect, useState} from "react";
import NoteCard from "./NoteCard";

function Sidebar() {
    const [notes, setNotes] = useState([])

    function addNote() {
        console.log('add note')
    }

    let noNotesElement;
    if (!notes.length) {
        noNotesElement = <div>
            <span>You have no notes</span>
        </div>
    }

    useEffect(() => {
        setNotes(JSON.parse(localStorage.getItem('notes') || []))
    }, [])

    return (
        <div className="sidebar">
            { noNotesElement }
            { notes.map( (note, index) => {
                return <NoteCard
                    key={index}
                    title={note.name}
                    subtitle={note.description}
                    updateDate={note.updateDate}
                />
            }) }
            <div
                className="add-note-btn"
                onClick={addNote}
            >
                + Add note
            </div>
        </div>

    )
}

export default Sidebar