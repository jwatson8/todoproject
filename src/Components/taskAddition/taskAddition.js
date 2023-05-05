import React, { useState } from 'react';
import './taskAddition.css';
import { Display } from '../tasks/tasks';

export function TaskAddition() {

    const [task, setTask] = useState('');
    const [items, setItems] = useState([]);

    function addItem() {
        if (!task){
            alert('Please enter a new task');
            return;
        }

        const item = {
            id: Math.round(Math.random()*1000),
            value: task
        }

        setItems(oldList => [...oldList, item]);
        setTask('');
    }

    function deleteItem(id) {
        const newList = items.filter((item) => item.id !== id);
        setItems(newList);
    }

    const ulStyle = {
        listStyle: 'none'
    }

    const divStyle = {
        width: '40%',
        height: '80%',
        backgroundColor: 'black',
        color: 'white',
        top: '45%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
        borderRadius: '5px',
        overflow: 'auto',
        border: '8px solid blue'
    }

    const buttonStyle = {
        backgroundColor: 'lightBlue'
    }

    return (
        <Display addItem={addItem} task={task} setTask={setTask} items={items} setItems={setItems} deleteItem={deleteItem} ulStyle={ulStyle} divStyle={divStyle} buttonStyle={buttonStyle}/>
    )

    /*return (
        <div style={divStyle}>
            <h1>Todo</h1>
            <input type='text' value={task} onChange={e => setTask(e.target.value)}/>
            <button onClick={addItem}>+</button>
            <ul>
                {items.map((item) => {
                    return (
                        <li key={item.id} style={ulStyle}>{item.value} <button onClick={() => {deleteItem(item.id)}}>-</button></li>
                    )
                })}
            </ul>
        </div>
    )*/
}

/*import { Tasks } from '../tasks/tasks';

export function TaskAddition() {
    let addition;
    let count = 0;
    let lst = [];
    const add = () => {
        addition = document.querySelector('.taskAddition').value;
        lst.push(addition);
        count ++;
        console.log(lst)
    }
    return (
        <div>
            <h1>Write you task here:</h1>
            <input type='text' className='taskAddition'/>
            <button className='add' onClick={add}>+</button>
            <ul>
            {lst.map(todo => {
                return (<li>{todo}</li>);
            })}
            </ul>
        </div>
    )
}*/