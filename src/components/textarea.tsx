import * as React from 'react';
import './textarea.css';

interface ITextAreaProps{
    note : string
    getNewNote(event:any): void
    handleSubmit(event:any):void
}

class TextArea extends React.Component <ITextAreaProps, {}>{
    constructor(props:ITextAreaProps){
        super(props)
    }

    public render() {
        return (
            <div className="textArea-container">
                <form onSubmit={this.props.handleSubmit}>
                    <h1>Add a note</h1>
                    <textarea value={this.props.note} onChange={this.props.getNewNote}/>
                    <input type="submit" value="Add" disabled={!this.props.note}/>
                </form>
            </div>
        );
    }
}

export default TextArea;
