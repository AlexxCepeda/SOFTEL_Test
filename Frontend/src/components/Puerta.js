import React, { useState, useEffect } from 'react';
import axios from 'axios';

import TarjetaGrafica from './GraphContainer/TarjetaGrafica';
import './Puerta.css';

function Puerta() {
    const [push, setPush] = useState(true)
    const [showGraph, setShowGraph] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const res = await axios.get("http://localhost:8800/puerta")
            setData(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    const isPushed = () => {
        setPush(!push);
        var d = new Date()
        let time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
        const jsonText = {
            objeto: "puerta",
            valor: push ? 1 : 0,
            agregado: time
        }
        axios.post("http://localhost:8800/", jsonText).then(response => console.log(response))
        getData()
    }
    const isPushedShowButton = () => setShowGraph(!showGraph)
    return (
        <div className='puerta-comp'>
            <div className='puerta__sets'>
                <div className={push ? 'puerta' : 'puerta activa'}>
                    <div className="puerta-front">
                        <div className="manija"></div>
                    </div>

                    <div className="fondo-puerta">
                    </div>
                </div>
                <div className='puerta__actions'>
                    <p style={{ color: 'white' }}>Estado actual: {push ? '0' : '1'}</p>
                    <button type="button" onClick={isPushed}>Alternar puerta</button>
                    <button type="button" onClick={isPushedShowButton}>{showGraph ? 'Ocultar' : 'Mostrar'} histórico</button>
                </div>
            </div>
            <div>
                {showGraph && <TarjetaGrafica data={data} />}
            </div>
        </div>
    )
}

export default Puerta;