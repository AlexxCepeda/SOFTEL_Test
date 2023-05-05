import React, { useState } from "react";
import FiltroFecha from "./FiltroFecha";
import GraphLine from "./GraphLine";
import './TarjetaGrafica.css';

function TarjetaGrafica(props) {
    const [filteredDate, setFilteredDate] = useState('Todos');

    const dateSelected = selectedDate => setFilteredDate(selectedDate);

    const matchTime = {
        "Todos": [0, 60],
        "cuartos": [0, 15],
        "media": [15, 30],
        "mas30": [30, 45],
        "mas45": [45, 60]
    }
    const filteredData = props.data.filter(data => data.agregado.split(':')[1] >= matchTime[filteredDate][0] && data.agregado.split(':')[1] <= matchTime[filteredDate][1]);

    return (
        <div className="card">
            <FiltroFecha selectedDate={filteredDate} onDateSelected={dateSelected} />
            {filteredData.length ? <GraphLine datos={filteredData} /> : <h2>No hay datos que mostrar</h2>}
        </div>
    )
}

export default TarjetaGrafica;