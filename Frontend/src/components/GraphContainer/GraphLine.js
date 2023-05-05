import React from "react";
import { CartesianGrid, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend, Line } from 'recharts'
import './GraphLine.css'
function GraphLine(props) {
    const data = props.datos
    return (
        <div className="graph-comp">
            <ResponsiveContainer width="95%" height={400}>
                <LineChart
                    data={data}
                    width={500}
                    height={500}
                    margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="agregado" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="valor" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default GraphLine;