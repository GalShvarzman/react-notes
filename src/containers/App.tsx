import * as React from 'react';
import './App.css';

import TextArea from "../components/textarea";
import Notes from "./notes";

interface IAppProps {
}

interface IAppState{
    note : string
    notes : string[]
}

class App extends React.Component<IAppProps, IAppState> {
    constructor(props:any) {
        super(props);
        this.state = {note:"", notes:[]};
    }

    public getNewNote = (event:any) => {
        this.setState({note: event.target.value});
    };

    public addNote(note:string){
        this.state.notes.push(note);
    }

    public handleSubmit = (event:any) => {
        event.preventDefault();
        this.addNote(this.state.note);
        this.setState({notes : this.state.notes, note:""});
    };

    public showNote = (event:any) => {

    };


    public render() {
      return (
      <div className="App">
          <Notes notes={this.state.notes} showNote={this.showNote}/>
          <TextArea note={this.state.note} getNewNote={this.getNewNote} handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
