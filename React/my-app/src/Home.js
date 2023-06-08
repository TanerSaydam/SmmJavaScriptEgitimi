import { useState } from "react"
import { Link } from "react-router-dom";

export default function Home() {
    const [inputs, setInputs] = useState({});    

    //const person = {};
    //person.name = "Taner";

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(val=> ({...val, [name]: value}))
    }

    function save(e){
        e.preventDefault();
        console.log(inputs);
        
    }
   
    return (
        <>
        <nav>
            <Link to="/">Home Page</Link>
            <Link to="/list">List Page</Link>
        </nav>

            <form onSubmit={save}>
                <div>
                    Kullanıcı Adı
                    <input 
                    name="userName"
                    onChange =
                        {handleChange}
                    />
                </div>
                <br />
                <div>
                    Şifre
                    <input 
                    name="password"
                    onChange =
                        {handleChange}
                    />
                </div>
                <br />
                <div>
                    <button>Giriş Yap</button>
                </div>
            </form>
        </>
    )
}