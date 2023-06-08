import { Link } from "react-router-dom";

export default function List(){
    const cars = ["Fiat","Audi","BMW"];
    const style = {
        backgroundColor: 'red',
        fontSize: '20px',
        color:'white'
    }
    return(
        <>
        <nav>
            <Link to="/">Home Page</Link>
            <Link to="/list">List Page</Link>
        </nav>
        <ul style={style}>
            {cars.map((car, index) => 
                <li key={index}>{car}</li>)}
        </ul>
        </>
    )
}