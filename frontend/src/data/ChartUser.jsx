import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {PureComponent, useState} from "react";
import Api from "../api/Api.jsx";

const ChartUser = () => {

    const data = [
        {
            name: 'tet',
            user: 2400,
        },

    ];
const {http} = Api()
const [user , setUser] = useState([])
const response = http.get('/users').then(response => {
    setUser(response.data)
})

        return (
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    barSize={20}
                >
                    <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="user" fill="#8884d8" background={{ fill: '#eee' }} />
                </BarChart>
            </ResponsiveContainer>
        );

}

export default ChartUser