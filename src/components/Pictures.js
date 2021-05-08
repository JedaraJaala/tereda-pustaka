import "./Pictures.scss";
import React, { useEffect, useState } from "react";
import { Settings } from "react-feather";

export default function Pictures({ Images }) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter + 1) % 4);
    }, 8000);

    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div className="picture">
      <img src={Images[counter].url}></img>
    </div>
  );
}
