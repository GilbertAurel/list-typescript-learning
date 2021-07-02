import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface IState {
  people: {
    name: string;
    url: string;
    age: number;
    note?: string;
  }[];
}

export const App: React.FC = () => {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      url: "https://www.mainbasket.com/thumbs/extra-large/uploads/post/2021/03/04/LeBron_James_Istirahat_Lebih_Awal.jpg",
      age: 36,
      note: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, perspiciatis?",
    },
  ]);

  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
};

export default App;
