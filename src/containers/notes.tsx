import * as React from 'react';
import './notes.css';
import ListItem from "../components/listItem";

interface INotesProps{
    notes : string[],
    showNote(event:any):void,
    onRemove(event:any):void
}

class Notes extends React.Component<INotesProps, {}> {
    constructor(props:INotesProps) {
        super(props);
    }


    public getNotesList(){
        return this.props.notes.map((note, inx)=>{
            return <ListItem onRemove={this.props.onRemove} note={note} key={inx}/>
        });
    }

    public render() {
        const notesList = this.getNotesList();
        return (
            <div className="notes-wrapper">
                <h1>My notes</h1>
                <ul onDoubleClick={this.props.showNote}>{notesList}</ul>
            </div>
        );
    }
}

export default Notes;