import React from "react";
import Button from "react-bootstrap/Button";
import Display from "./Display";
import "./Button.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function LandingPage() {
  const [counter, updateCounter] = React.useState(0);

  const onClickFunction = () => {
    updateCounter(counter + 1);
  };

  return (
    <>
      <div className="ButtonContainer">
        <Link to="/maryland">
          <Button active={true} variant={"primary"} size={"lg"}>
            Enter
          </Button>{" "}
        </Link>
      </div>

      <Display message={counter} />
    </>
  );
}

export default LandingPage;
