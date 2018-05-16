import * as React from 'react';
import './textarea.css';

// import logo from './logo.svg';

interface ITextAreaProps{
    note : string
    getNote(event:any): void
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
                    <h1>write note</h1>
                    <textarea onChange={this.props.getNote}>{this.props.note}</textarea>
                    <input type="submit" value="Submit"/>
                </form>


            </div>
        );
    }
}

export default TextArea;
