import React from 'react';
import './FiltroFecha.css';

const FiltroFecha = (props) => {

    const filterHandler = (e) => {
        props.onDateSelected(e.target.value);
    }
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filtrar por tiempo</label>
                <select value={props.selectedDate} onChange={filterHandler}>
                    <option value='Todos'>Todos los registros</option>
                    <option value='cuartos'>Primeros 15 minutos</option>
                    <option value='media'>Entre 15 y 30 minutos</option>
                    <option value='mas30'>Entre 30 y 45 minutos</option>
                    <option value='mas45'>Entre 45 y 60 minutos</option>
                </select>
            </div>
        </div>
    );
};

export default FiltroFecha;