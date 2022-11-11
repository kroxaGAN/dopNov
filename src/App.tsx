import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./components/Button";

// Hi guys! Let`s reinforce our session:

// 1. Install AXIOS -it`s a library for HTTP requests. We  use it instead method FETCH.
// https://axios-http.com/ru/docs/intro
// yarn add axios

// axios.get('https://jsonplaceholder.typicode.com/todos')
//     .then((res) => {
//         setTodos(res.data)
//     })

//2. Let`s relocate our method map, and wrap it in a new variable:
//const mapTodos=todos.map(el => {...

// return (
//     <div className="App">
//         <button onClick={onClickHandler}>CLEAN POSTS</button>
//         <ul>
//             {mapTodos}
//         </ul>
//     </div>
// );

// 3. Create new button to redisplay  our data

// 4. We are having a problem. The code is duplicated (axios.get...). Let`s create a new function and use it where we need.
//Good luck!


type dataType = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

function App() {
    const [data, setData] = useState<dataType[]>([])
    const [title, setTitle] = useState<string>("Give data")
    const clickButton = () => {
        if (data.length === 0) {
            setTitle("Clean data")
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then(response => response.json())
                .then(json => setData(json))
        } else {
            setTitle("Give data")
            setData([])
        }

    }

    return (
        <div className="App">
            <Button name={title} callback={clickButton}/>
            <ul>
                {
                    data.map((el, index) => {
                        return (
                            <li key={el.id}>
                                <span>{`${el.id} `}</span>
                                <input type={"checkbox"} checked={el.completed} onChange={()=>{}}/>
                                <span>{` ${el.title}`}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default App;
