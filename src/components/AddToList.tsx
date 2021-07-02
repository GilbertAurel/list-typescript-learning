import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

export const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    url: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleClick = (): void => {
    if (input.name || input.url || input.age) {
      setPeople([
        ...people,
        {
          name: input.name,
          url: input.url,
          age: parseInt(input.age),
          note: input.note,
        },
      ]);

      setInput({
        name: "",
        age: "",
        url: "",
        note: "",
      });
    }
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="name"
        name="name"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
      />

      <input
        type="text"
        placeholder="url"
        name="url"
        className="AddToList-input"
        value={input.url}
        onChange={handleChange}
      />

      <input
        type="text"
        placeholder="age"
        name="age"
        className="AddToList-input"
        value={input.age}
        onChange={handleChange}
      />

      <textarea
        placeholder="note"
        name="note"
        className="AddToList-input"
        value={input.note}
        onChange={handleChange}
      />

      <button className="AddToList-btn" onClick={handleClick}>
        Add to list
      </button>
    </div>
  );
};

export default AddToList;
