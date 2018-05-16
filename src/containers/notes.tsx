import * as React from 'react';
import './notes.css';
import ListItem from "../components/listItem";

interface INotesProps{
    notes : string[]
}

interface INotesState{
    notes : string[]
}

class Notes extends React.Component<INotesProps, INotesState> {
    constructor(props:INotesProps) {
        super(props);
        this.state = {notes:this.props.notes};
    }

    public getNotesList(){
        return this.props.notes.map((note, inx)=>{
            return <ListItem note={note} key={inx}/>
        });
    }

    public componentDidUpdate(){debugger
        if (this.state.notes !== this.props.notes){
            this.setState({notes: this.props.notes});
        }
    }

    public render() {
        const notesList = this.getNotesList();
        return (
            <ul>{notesList}</ul>
        );
    }
}

export default Notes;