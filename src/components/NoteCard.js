import {useEffect, useState} from "react";

function NoteCard(props) {
    const [date, setDate] = useState('')

    useEffect(() => {
        const noteDate = new Date(props.updateDate),
            currentDate = new Date()
        let value

        if (noteDate.toISOString().split('T')[0] === currentDate.toISOString().split('T')[0]) {
            value = noteDate.toLocaleTimeString().replace(/:\d{2}/, '')
        } else {
            value = noteDate.toLocaleDateString()
        }

        setDate(value)
    }, [])

    return (
        <div className="note-card">
            <div className="d-flex justify-space-between">
                <div className="note-card_title">{ props.title }</div>
                <span>{ date }</span>
            </div>
            <div className="note-card_subtitle">{ props.subtitle }</div>
        </div>
    )
}

export default NoteCard