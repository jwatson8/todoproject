import React from 'react';

export function Display(props) {
    return (
        <div style={props.divStyle}>
            <h1>Todo</h1>
            <input type='text' value={props.task} onChange={e => props.setTask(e.target.value)}/>
            <button onClick={props.addItem} style={props.buttonStyle}>+</button>
            <ul>
                {props.items.map((item) => {
                    return (
                        <li key={item.id} style={props.ulStyle}>{item.value} <button onClick={() => {props.deleteItem(item.id)}}>-</button></li>
                    )
                })}
            </ul>
        </div>
    )
}