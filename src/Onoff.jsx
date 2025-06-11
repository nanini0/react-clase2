import { useState } from "react";

function Onof(){
    const [valor,setValor] = useState('On');
    const onof =()=>{
        setValor(valor === 'on'?'of':'on');

    }
    const buttonStyle = {
        color: 'white',
        backgroundColor: valor === 'on' ? '#FFD700' : '#FF0000', // Amarillo para On, Rojo para Off
        transition: 'background-color 0.3s ease' // Transición suave
    }
    return(
        <div>
            <button onClick={onof} style={buttonStyle}>
                {valor}
            </button>
        </div>
    )
}
export default Onof;