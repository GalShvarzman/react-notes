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

    public handleSubmit = (event:any) => {
        event.preventDefault();
        this.setState({notes : this.state.notes.concat(this.state.note), note:""});
    };

    public showNote = (event:any) => {
        event.preventDefault();
        alert(event.target.innerText);
    };

    public onRemove = (event:any) => {
        event.preventDefault();
        const selectedNoteIndex =  this.state.notes.findIndex((note:string)=>{
            return note === event.target.parentElement.innerText;
        });
        if(selectedNoteIndex !== -1){
           this.setState({notes : this.state.notes.filter((note, index)=>{return index !== selectedNoteIndex})});
        }
    };

    public render() {
      return (
      <div className="App">
          <Notes onRemove={this.onRemove} notes={this.state.notes} showNote={this.showNote}/>
          <TextArea note={this.state.note} getNewNote={this.getNewNote} handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
