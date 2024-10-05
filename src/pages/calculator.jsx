import React, { useState } from "react";
import Appname from "../components/appname";
import Buttonscal from "../components/calcomponent/buttonscal";
import Container from "../components/Custom/container";
import "bootstrap/dist/css/bootstrap.min.css";

const calculator = () => {
  const [invalue, setinvalue] = useState("");
  const inputvalues = (e) => {
    if (e === "C") {
      setinvalue("");
    } else if (e === "=") {
      setinvalue(eval(invalue));
    } else {
      setinvalue((prevInvalue) => prevInvalue + e);
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Appname title="Calculator" />
          </div>
        </div>
      </div>
      <div className="container center-flex">
        <div className="card-b">
          <input type="text" className="input-cal" value={invalue} />
          <div className="operations-cal">
            <Container>
              <Buttonscal handlecalculation={inputvalues} />
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default calculator;
