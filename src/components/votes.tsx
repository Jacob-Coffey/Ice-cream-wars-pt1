import { MouseEvent, useState } from "react";
import './votes.css'

export default function Votes() {
    const [chocolateVote, setChocolateVote] = useState(0);   
    const [vanillaVote, setVanillaVote] = useState(0);   
    const [strawberryVote, setStrawberryVote] = useState(0); 
    
    
    const addChocolateVote = () => {
        setChocolateVote(chocolateVote + 1);
    };

    const addVanillaVote = () => {
        setVanillaVote(vanillaVote + 1);
    };

    const addStrawberryVote = () => {
        setStrawberryVote(strawberryVote + 1);
    };
    const totalVote = chocolateVote + vanillaVote + strawberryVote;
    const chocolatePercent = (chocolateVote / totalVote) * 100;
    const vanillaPercent = (vanillaVote / totalVote) * 100;
    const strawberryPercent = (strawberryVote / totalVote) * 100;

    const chocolateStyles = {
        width: chocolatePercent + "%",
        height: 20 + "px",
        backgroundColor: "brown"
    }
    const vanillaStyles = {
        width: vanillaPercent + "%",
        height: 20 + "px",
        backgroundColor: "beige"
    }
    const strawberryStyles = {
        width: strawberryPercent + "%",
        height: 20 + "px",
        backgroundColor: "pink"
    }

    return (
        <><div className="vote-here">
        <h2>Vote Here</h2>
        <button onClick={addChocolateVote}>Chocolate</button> <button onClick={addVanillaVote}>Vanilla</button> <button onClick={addStrawberryVote}>Strawberry</button>
        {chocolateVote > 0 && <h3>Chocolate: {chocolateVote} {chocolatePercent}%</h3>}
        {chocolateVote > 0 && <div className="choco-percent" style={chocolateStyles}></div>}
        {vanillaVote > 0 && <h3>Vanilla: {vanillaVote} {strawberryPercent}%</h3>}
        {vanillaVote > 0 && <div className="vanilla-percent" style={vanillaStyles}></div>}
        {strawberryVote > 0 && <h3>Strawberry: {strawberryVote} {strawberryPercent}%</h3>}
        {strawberryVote > 0 && <div className="berry-percent" style={strawberryStyles}></div>}
        </div></>
    )
}