import { MouseEvent, useState } from "react";
import './votes';
import './AdDesigner.css'

export default function AdDesigner() {
    const [count, setCount] = useState(20);
    const [background, setBackground] = useState('white');
    const [vote, setvote] = useState('');

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
   };

   const lightMode = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
   ) => {
    event.preventDefault();
    setBackground('white');
   };

   const darkMode = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
   ) => {
    event.preventDefault();
    setBackground('black');
   };
  

    return (
        <div className="Votes">
            <h2>Ad Designer</h2>
            <div className="vote-selection">Vote For</div>
            <h3>What to Support</h3>
            <button>Chocolate</button> <button>Vanilla</button> <button>Strawberry</button>
            <h3>Color Theme</h3>
            <button onClick={lightMode}>Light</button> <button onClick={darkMode}>Dark</button>
            <h3>Font Size</h3>
            <button onClick={downPixels}>Down</button> <p>{count}</p> <button onClick={upPixels}>Up</button>
        </div>
    )
}