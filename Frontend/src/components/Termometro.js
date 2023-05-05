import React, { useState, useEffect } from 'react';
import axios from 'axios';

import TarjetaGrafica from './GraphContainer/TarjetaGrafica';
import './Termometro.css';

function Termometro() {
    const [push, setPush] = useState(false)
    const [showGraph, setShowGraph] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
        // eslint-disable-next-line
    }, []);

    const getData = async () => {
        try {
            const res = await axios.get("http://localhost:8800/termometro")
            setData(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    const isPushed = () => {
        setPush(!push)
        var d = new Date()
        let time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
        const jsonText = {
            objeto: "termometro",
            valor: push ? 0 : 1,
            agregado: time
        }
        axios.post("http://localhost:8800/", jsonText).then(response => console.log(response))
        getData()
    };
    const isPushedShowButton = () => setShowGraph(!showGraph)
    return (
        <div className='termometro-comp'>
            <div className='termometro__sets'>
                <div
                    className='termometro'
                    style={push ? { "--mainColor": '#E63232' } : { "--mainColor": '#4753df' }}>
                </div>
                <p style={{ color: 'white' }}>Estado actual: {push ? '1' : '0'}</p>
                <div className='termometro__actions'>
                    <button type='button' onClick={isPushed}>Alternar termometro</button>
                    <button type="button" onClick={isPushedShowButton}>{showGraph ? 'Ocultar' : 'Mostrar'} histórico</button>
                </div>
            </div>
            <div>
                {showGraph && <TarjetaGrafica data={data} />}
            </div>
        </div >
    )
}

export default Termometro;