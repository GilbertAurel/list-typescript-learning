import React from "react";
import { IState as IProps } from "../App";

export const List: React.FC<IProps> = ({ people }) => {
  const RenderList = (): JSX.Element[] => {
    return people.map((person) => (
      <li className="List">
        <div className="List-header">
          <img src={person.url} className="List-img" />
          <h2>{person.name}</h2>
        </div>
        <p>{person.age}</p>
        <p className="List-note">{person.note}</p>
      </li>
    ));
  };

  return <ul>{RenderList()}</ul>;
};

export default List;
