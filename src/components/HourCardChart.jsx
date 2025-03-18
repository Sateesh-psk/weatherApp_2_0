import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const HourCardChart = (props) => {
  return (
    <>
      <div className=" w-6 ml-2 h-36">
        <ResponsiveContainer width="50%" height="100%">
          <LineChart data={props.data}>
            <YAxis domain={[props.mini, props.maxi]} hide />
            <Line type="monotone" dataKey="value" stroke="#f0f0c3" strokeWidth={2} dot={{ r: 4, fill: "#f0f0c3" }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <h2 className={` my-3 `}>{parseInt(props.data[0].value)}{props.units}</h2>
    </>
  )
}

export default HourCardChart