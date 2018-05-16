import * as React from 'react';

const ListItem = (props:any)=>{
    return(
        <li>{props.note}<input className="remove" type="button" onClick={props.onRemove} value="Remove"/></li>
    )
};

export default ListItem;