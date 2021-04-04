import React, { useState } from "react";
import "./GridBoard.css";
import Node from "../Node/Node";

const GridBoard = () => {
  const gridHeight = 15;
  const gridLenght = 20;

  const gridArrayHeight: Array<[]> = [];
  const gridArrayLenght: Array<[]> = [];

  for (var i = 0; i < gridHeight; i++) {
    gridArrayHeight.push([]);
  }

  for (i = 0; i < gridLenght; i++) {
    gridArrayLenght.push([]);
  }

  const [grid, setGrid] = useState<Array<Array<nodeStatusProps>>>([[]]);
  const [startingNode, setStartingNode] = useState([-1, -1]);
  const [endingNode, setEndingNode] = useState([-1, -1]);

  return (
    <div className="game-container">
      <div className="grid-board-container">
        <table className="grid-board">
          {gridArrayHeight.map((_row, rowNumber) => {
            return (
              <tr>
                {gridArrayLenght.map((_col, colNumber) => {
                  return (
                    <Node
                      x={colNumber}
                      y={rowNumber}
                      setStart={setStartingNode}
                      setEnd={setEndingNode}
                      start={startingNode}
                      end={endingNode}
                    />
                  );
                })}
              </tr>
            );
          })}
        </table>
      </div>
      <div>
        Starting {startingNode[0]},{startingNode[1]} Ending {[endingNode[0]]},
        {endingNode[1]}
      </div>
    </div>
  );
};

export default GridBoard;

interface nodeStatusProps {
  nodeStatus: string;
  setNodeStatus: React.Dispatch<React.SetStateAction<string>>;
}
