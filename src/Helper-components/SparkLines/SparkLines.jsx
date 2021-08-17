import moment from 'moment';
import React from 'react';
import {  Label, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useStateValue } from '../../Context-management/StateProvider';
import "./SparkLines.scss";

function SparkLines({ city }) {
    const [{ aqiData }] = useStateValue();

    const cityData = aqiData[city] && aqiData[city].length > 0 ? aqiData[city].slice(Math.max(aqiData[city].length - 20, 0), aqiData[city].length)
        .map((item, index) => {
            const { aqi, timeStamp } = item;
            return {
                aqi: parseInt(aqi),
                timeStamp: moment.utc(timeStamp).local().format("hh:mm:ss"),
            };
        }) : 0;
    console.log(cityData)
    return (
        <div className="sparkLine_container">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={cityData}
                    margin={{
                        top: 5,
                        right: 15,
                        left: 0,
                        bottom: 12,
                    }}
                >
                    <XAxis dataKey="timeStamp" stroke="#4a797d" tick={{ stroke: '#4a797d', strokeWidth: 0 }} strokeWidth={3} >
                        <Label value="Time" offset={0} position="bottom" fill="#000" style={{ fontWeight: 700 }} />
                    </XAxis>
                    <YAxis type="number" stroke="#4a797d" tick={{ stroke: '#4a797d', strokeWidth: 0 }}  strokeWidth={3} domain={['dataMin-2', 'dataMax+2']}>
                        <Label value='AQI' angle="-90" position="insideLeft"  fill="#000" fontWeight={700} />
                    </YAxis>
                    <Tooltip />
                    <Line type="monotone" dataKey="aqi" stroke="#4a797d" dot={false} strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default SparkLines
