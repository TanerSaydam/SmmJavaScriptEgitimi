import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

export default function Home(){
    let navigate = useNavigate();
    
    useEffect(()=> {
        authentication()
    });

    function authentication(){
        let token = localStorage.getItem("token");       
        if(token == null){
            navigate("/login");
        }
    }

    return (
        <>
        <h1>Home</h1>
        </>
    )
}