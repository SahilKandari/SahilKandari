import React from "react";
import Button from "../UI/Button";
import "./TempCity.css";

function TempCity(props) {
  const data = props.data;
  function findMoreSubmitHandler() {
    props.findMoreCity();
  }

  console.log(data, "data");
  const temprature = (data.main.temp - 273.5).toFixed(1);
  const cityName = data.name + ",";
  const country = data.sys.country;
  const weather = data.weather[0].main;

  return (
    <div className="row tempCity text-center">
      <div className="col-12  ">
        <h2>{temprature}°C</h2>
      </div>
      <div className="col-12 tempCity_button">
        <Button onClick={findMoreSubmitHandler} >
          Find More Temp
        </Button>
      </div>
      <div className="col-sm-12 col-md-6  tempCity_location ">
        <div className="row ">
          <h3 className="col-sm-12 col-md-8 text-end">{cityName}</h3>
          <h3 className="col-sm-12 col-md-4 text-start"> {country}</h3>
        </div>
      </div>
      <div className=" col-sm-12 col-md-6  tempCity_weather text-end ">
        <h3>{weather}</h3>
      </div>
    </div>
  );
}
export default TempCity;
