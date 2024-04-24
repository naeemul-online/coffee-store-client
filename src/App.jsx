import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  // console.log(coffees);
  const [coffees, setCoffees] = useState(loadedCoffees)
  // console.log(coffees)
  return (
    <>
      <h2 className="text-3xl text-center">
        Hot Hot Cold Coffee: {loadedCoffees.length}{" "}
      </h2>
      <div className="grid grid-cols-2 mx-auto gap-4 m-4 my-8">
      {coffees.map((coffee) => (
            <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees ={setCoffees}></CoffeeCard>
          ))}
      </div>
    </>
  );
}

export default App;
