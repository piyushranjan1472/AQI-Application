import React from 'react';
import "./CityCard.scss";
import ReactSpeedometer from "react-d3-speedometer";
import InformationCard from '../../Helper-components/InformationCard/InformationCard';
import { useStateValue } from '../../Context-management/StateProvider';
import { COLORS } from '../../Helper-components/Utility/Utils';

function CityCard({ city }) {
    const [{ aqiData }] = useStateValue();



    const cityCurrentAqi = aqiData[city] && aqiData[city].length > 0 ? (aqiData[city][aqiData[city].length - 1].aqi) : 0;

    const customSegmentLabels = [{
        text: "Good",
        position: "INSIDE",
        color: "#fff"
    }, {
        text: "SAT",
        position: "INSIDE",
        color: "#fff"
    }, {
        text: "Moderate",
        position: "INSIDE",
        color: "#fff"
    }, {
        text: "Poor",
        position: "INSIDE",
        color: "#fff"
    }, {
        text: "Very Poor",
        position: "INSIDE",
        color: "#fff"
    }, {
        text: "Severe",
        position: "INSIDE",
        color: "#fff"
    }];

    return (
        <div className="card_container">
            <div className="speedometer_container">
                <div className="city_name">Live status of {city}</div>
                <ReactSpeedometer
                    maxValue={500}
                    width={450}
                    height={300}
                    ringWidth={40}
                    customSegmentStops={[0, 50, 100, 200, 300, 400, 500]}
                    customSegmentLabels={customSegmentLabels}
                    segmentColors={COLORS}
                    value={parseInt(cityCurrentAqi?.toFixed(2))}
                />
                <InformationCard />

            </div>
        </div>
    )
}

export default CityCard
