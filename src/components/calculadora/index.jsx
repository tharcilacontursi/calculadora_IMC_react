import { useState } from "react"

import styles from './Calculadora.module.css'

const Calculadora = () => {

    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setIMC] = useState(null);


    const calculaImc = () => {
        const pesoKg = parseFloat(peso);
        const alturaM = parseFloat(altura) / 100; //divide por esse valor para converter cm -> metros
        if (pesoKg > 0 && alturaM > 0) {
            const calculaImc = pesoKg / (alturaM * alturaM);
            setIMC(calculaImc);
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
                    <h2>Seu IMC é: {imcFormatado}</h2>
                    <h4>Aqui está a tabela de classificação do IMC de acordo com a Organização Mundial da Saúde (OMS): </h4>
                    <div className={styles.containerList}>
                    <ul>
                        <li className={styles.imcItem} >Abaixo do peso: IMC {"<"} 18,5 </li>
                        <li className={styles.imcItem} >Peso normal: 18,5 ≤ IMC {"<"} 25 </li>
                        <li className={styles.imcItem} >Sobrepeso: 25 ≤ IMC {"<"} 30 </li>
                        <li className={styles.imcItem} > Obesidade grau I: 30 ≤ IMC {"<"} 35 </li>
                        <li className={styles.imcItem} > Obesidade grau II (severa): 35 ≤ IMC {"<"} 40 </li>
                        <li className={styles.imcItem} >Obesidade grau III (mórbida): IMC {"≥"} 40 </li>
                    </ul>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }

    return (
        <body>
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
        </body>
    )
}




export default Calculadora;