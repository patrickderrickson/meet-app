import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";


const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];

const EventGenre = ({ events }) => {
    const [data, setData] = useState([]); 
    
    useEffect(() => {
            const data = genres.map((genre) => {
                const value = events.filter(({ summary }) =>
          summary.split(' ').includes(genre)
        ).length;
                return { name: genre, value};
        }).filter(d => d.value > 0);

    setData(data); }, [events]);

return (
    <ResponsiveContainer height={400} >
        <PieChart margin-left={200}  height={400} width={400}>
            <Pie
                data={data}
                cx={200}
                cy={200}
                labelLine={false}
                outerRadius={80}
                fill="#800080"
                dataKey="value"
                label={({ name, percent }) => ` ${name} ${(percent * 100).toFixed(0)}%`}
            >
            </Pie>
        </PieChart>
    </ResponsiveContainer>
      )
    };

export default EventGenre;