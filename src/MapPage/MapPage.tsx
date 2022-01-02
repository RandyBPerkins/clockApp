import React from "react";

function MapPage() {
  const [counter, updateCounter] = React.useState(0);

  const onClickFunction = () => {
    updateCounter(counter + 1);
  };

  return (
    <>
      <h1>Maryland Map page</h1>
    </>
  );
}

export default MapPage;
