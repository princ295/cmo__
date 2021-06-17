import React from "react";

import Loader from "react-loader-spinner";
const LoaderStatus = () => {
  return (
      <Loader
        type="Puff"
        color="#00BFFF"
        height={50}
        width={40}
        timeout={30000} //3 secs
      />

  );
}
 
export default LoaderStatus;