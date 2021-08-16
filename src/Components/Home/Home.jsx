import React, { useEffect, useState } from "react";
import AqiTable from "../Table/AqiTable";
import "./Home.scss";
import CityCard from "../CityCard/CityCard";
import { useStateValue } from "../../Context-management/StateProvider";
import AllCitiesChart from "../AllCitiesChart/AllCitiesChart";

const BASE_URL = "wss://city-ws.herokuapp.com/";


export default function Home() {
  const [selectedCity, setSelectedCity] = useState("Pune");
  const  dispatch = useStateValue()[1];

  const getSelectedCity = (e) => {
    setSelectedCity(e.target.textContent);
  };

  useEffect(() => {
    const socket = new WebSocket(BASE_URL);
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      dispatch({ type: "AQI_API_CALL", data });
    }
    return () => {
      socket.close();
    }
    //eslint-disable-next-line
  }, []);


  return (
    <>
      <div className="home_container">
        <div className="table_container">
          <CityCard city={selectedCity} />
        </div>
        <div className="charts__container">
          <AqiTable getSelectedCity={getSelectedCity} />
        </div>
      </div>
      <div className="bar_container">
        <AllCitiesChart />
      </div>

      {/* <div className="footer"> Created by <a href="https://github.com/anusha-sci">Anusha</a> </div> */}
    </>
  );
}
