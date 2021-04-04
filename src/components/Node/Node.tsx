import React, { useState } from "react";
import "./Node.css";

const Node = ({ x, y, setStart, setEnd, start, end }: NodeProps) => {
  const [className, setClassName] = useState("node-container");
  var endingNode = false;
  var startingNode = false;
  const toggleNode = () => {
    //Set first>?
    if (start[0] === -1) {
      setStart(() => [x, y]);
      setClassName(() => "node-container startingNode");
    } else if (end[0] === -1) {
      setEnd(() => [x, y]);
      setClassName(() => "node-container endingNode");
    } else alert("Starting and ending positions have already been set");
  };

  return <th className={className} onClick={toggleNode}></th>;
};

export default Node;

interface NodeProps {
  x: number;
  y: number;
  setStart: React.Dispatch<React.SetStateAction<number[]>>;
  setEnd: React.Dispatch<React.SetStateAction<number[]>>;
  start: Array<number>;
  end: Array<number>;
}
