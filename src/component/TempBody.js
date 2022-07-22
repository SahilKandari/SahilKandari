import React, { Fragment, useState } from "react";
import "./TempBody.css";
import Sun from "../asset/Sun.jpg";
import TempForm from "./TempForm";
function TempBody() {
  return (
    <Fragment>
      <img className="tempBodyImg" src={Sun} />
      <TempForm />
    </Fragment>
  );
}
export default TempBody;
