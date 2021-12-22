import React, { useState, useEffect } from "react";
import "./css/style.css";

const TempApp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Indore");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=695e9c16d4e6c5372bbf5ca775ec4ae3`;
      const response = await fetch(url);
      const resJson = await response.json();
      console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <div className="box">
      <div className="inputData">
        <div className="inputField">
      <input
            type="search"
            className="inputField"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {!city ? (
          <div className="errMsg">No Data Found</div>
        ) : (
          <>
            <div className="info">
              <h2 className="location">
                <i className="fas fa-street-view"></i> {search}
              </h2>
              <h1 className="temp">{city.temp}°C</h1>
              <h3 className="tempmin_max">Min : {city.temp_min}°C | Max : {city.temp_max}°C</h3>
            </div>
          </>
        )}
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
      </div>
    </div>
  );
};

export default TempApp;
