import "./TempForm.css";
import React, { Fragment, useRef, useState } from "react";
import Button from "../UI/Button";
import axios from "axios";
import TempCity from "./TempCity";

function TempForm() {
  const [tempDetails, setTempDetails] = useState({});

  const [isSearched, setIsSearched] = useState(false);

  const inputChange = useRef();
  // const apiKey = "46693a11407034d7367e82ab39d396d7";
  const apiKey = "45e43b6c016a03745ea3dd5b24b221f7";

  const findCitySubmitHandler = (cityName) => {
    if (!cityName) {
      return;
    }
    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey;
    axios
      .get(apiURL)
      .then((res) => {
        setTempDetails(res.data);
        setIsSearched(true);
      })
      .catch((err) => {
        console.log(err, "error");
      });
    
  };

  function changeComponent() {
    findCitySubmitHandler(inputChange.current.value);
  }
  function findMoreCity() {
    setIsSearched(false);
  }

  return (
    <Fragment>
      {!isSearched && (
        <div className="row tempForm  text-center">
          <div className="col-12">
            <h1>Weather</h1>
          </div>
          <div>
            <div className="col-12 py-5">
              <input className="tempForm_input_focused" ref={inputChange} />
            </div>
            <div>
              <Button
                type="submit"
                onClick={changeComponent}
                className=" py-2 my-3 tempForm_button"
              >
                Find Weather
              </Button>
            </div>
          </div>
        </div>
      )}
      {isSearched && (
        <TempCity data={tempDetails} findMoreCity={findMoreCity} />
      )}
    </Fragment>
  );
}
export default TempForm;
