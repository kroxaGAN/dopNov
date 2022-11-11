
import React from "react";
import '../App.css';

type PropsType={
    name:string
    callback:()=>void
}

export const Button =(props:PropsType)=>{
        const {name,callback}=props
    const onClickHandler=()=>{
        callback()
    }


    return (
        <>
            <button onClick={onClickHandler} className="Button">{name}</button>
        </>

    )
}
