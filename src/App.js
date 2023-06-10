import './App.css';
import React, { useState } from 'react';
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import SearchBar from "./components/SearchBar";

function App() {
  const [food, setFood] = useState(foods);
  const [inputText, setInputText] = useState("");

  const onFormSubmit = (name, image, calories, servings) => {
    const updatedFood = [...food];
    updatedFood.push({
      name: name,
      image: image,
      calories: calories,
      servings: servings
    });
    setFood(updatedFood);
  }

  const updateKeyword = (event) => {
    setInputText(event.target.value);
  };

  const filteredFood = food.filter((val) => {
    if (inputText === "") {
      return val;
    } else if (val.name.toLowerCase().includes(inputText.toLowerCase())) {
      return val;
    }
    return null;
  });

  const deleteFood = (name) => {
    const updatedFood = [...food];
    console.log(updatedFood)
    return setFood(
      updatedFood.filter(a =>
        name !== a.name
      )
    )
  }


  return (
    <div className="">
      <AddFoodForm addFoodForm={onFormSubmit} />
      <SearchBar keyword={inputText} onChange={updateKeyword} />
      <FoodBox foodList={filteredFood} deleteFood={deleteFood} />
    </div>
  );
}

export default App;
