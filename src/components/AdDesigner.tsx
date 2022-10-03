import { MouseEvent, useRef, useState } from "react";
import './votes.tsx';
import './AdDesigner.css';
import { isDisabled } from "@testing-library/user-event/dist/utils";

export default function AdDesigner() {
    const [count, setCount] = useState(20);
    const [background, setBackground] = useState('white');
    const [color, setColor] = useState('black');
    const [flavor, setFlavor] = useState('Strawberry');
    

    const upPixels = () => {
        setCount(count + 1);
    };

    const downPixels = () => {
        setCount(count - 1);
    };

    const mouseOverButton = (
        event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
    ) => {
        event.preventDefault();
        setBackground('green');
    };

   const style = {
    backgroundColor: background,
    color: color,
    fontSize: count
   };

   const lightMode = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
   ) => {
    event.preventDefault();
    setBackground('white');
    setColor('black');
   };

   const darkMode = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
   ) => {
    event.preventDefault();
    setBackground('black');
    setColor('white');
   };

  

    return (
        <div className="Votes">
            <h2>Ad Designer</h2>
            <div className="vote-selection" style={style}>
                <span>Vote For</span>
                <br></br>
                <br></br>
                <span style={{fontSize: 15 + count + "px", fontFamily: 'Caveat' + 'cursive'}}>{flavor}</span>
            </div>
            <h3>What to Support</h3>
            <button onClick={(e) => setFlavor("Chocolate")}>Chocolate</button> <button onClick={() => setFlavor("Vanilla")}>Vanilla</button> <button onClick={() => setFlavor("Strawberry")}>Strawberry</button>
            <h3>Color Theme</h3>
            <button onClick={(e) => lightMode(e)}>Light</button> <button onClick={(e) => darkMode(e)}>Dark</button>
            <h3>Font Size</h3>
            <button onClick={downPixels}>Down</button> <p>{count}</p> <button onClick={upPixels}>Up</button>
        </div>
    )
}