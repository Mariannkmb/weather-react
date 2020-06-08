import React from "react";
import Loader from "react-loader-spinner";

export default function LoaderSpinner() {
  return (
    <Loader
      type="Puff"
      color="#00BFFF"
      height={50}
      width={50}
      timeout={3000}
      className="Loader"
    />
  );
}
