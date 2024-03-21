import { useState } from "react"

import styles from './Calculadora.module.css'

const Calculadora = () => {
    
    const [peso, setPeso] = useState ('');
    const [altura, setAltura] = useState ('');
    const [imc, setIMC] = useState(null);


const calculaImc = () => {
    const pesoKg = parseFloat(peso);
    const alturaM = parseFloat(altura) / 100; //divide por esse valor para converter cm -> metros
    if (pesoKg > 0 && alturaM > 0) {
        const calculaImc = pesoKg / (alturaM * alturaM);
        setIMC (calculaImc); 
    }
    else {
        setIMC(null);
    }
};

const exibeIMC = () => {
    if (imc !== null) {
        const imcFormatado = imc.toFixed(1); //coloquei isso pra o resultado da divisao vir só com um número depois da vírula
        return (
            <div>
                <h3>Seu IMC é: {imcFormatado}</h3>
            </div>
        );
    } else{
        return null;
    }
}

return(
    <div className={styles.container}>
        <div>
    <h1>Calcule seu IMC</h1>
    <div>
        <label>
            Peso (kg):
            <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
        </label>
    </div>
    <div>
        <label>
            Altura:
            <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
        </label>
    </div>
    <div>
    <button onClick={calculaImc}>Calcular IMC </button>
    </div>
    {exibeIMC()}
    </div>
    </div>
)
}




export default Calculadora;