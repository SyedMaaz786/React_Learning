import { useState } from "react"; 
import './Lottery.css';
import { genRandomNum, sum } from "./helper";


export default function Lottery() {
    let [ticket, setTicket] = useState([genRandomNum(3)]);
    let isWinning = sum(ticket) === 15;
    let buyticket = () => {
        setTicket(genRandomNum(3));
    }
    return (
        <div>
            <h3>Lottery Game!</h3>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
                <h3>{isWinning && "Congratulations you won!"}</h3>
            </div>
            <br></br>
            <button onClick={buyticket}>Buy New Ticket</button>
        </div>
    )
}