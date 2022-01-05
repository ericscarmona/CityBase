import React, { useState } from "react";
import * as R from "ramda";

import { animalTranslations, foodTranslations } from "./translations";
import { CardContainer, CardHeader, CardContent } from "./App.styled";

const FoodCard = ({ food, translate, index }) => {
  return (
    <CardContainer index={index}>
      <CardHeader>{translate("name", food)}</CardHeader>
      <CardContent>{translate("meal", food)}</CardContent>
      <CardContent>{translate("description", food)}</CardContent>
    </CardContainer>
  );
};

const AnimalCard = ({ animal, translate, index }) => (
  <CardContainer index={index}>
    <CardHeader>{translate("species", animal)}</CardHeader>
    <CardContent>Biome: {translate("biome", animal)}</CardContent>
    <CardContent>Color: {translate("color", animal)}</CardContent>
  </CardContainer>
);

// FIXME: Add your code here
/**
 *
 * @param {object} dataSet
 *
 * @returns {function}
 */
const createTranslate = (dataSet) => {
  /**
   * @function translatedCardGenerator:
   * @param {React.Component} WrappedComponent
   * @param {string} language
   *
   * @returns {React.Component} with partially applied props
   */
  const translatedCardGenerator = (WrappedComponent, language) => {
    /**
     * @function translate:
     * @param {string} dataProp
     * @param {AnimalData} data
     *
     * @returns {string}
     */
    const translate = (dataProp, data) => {
      return data[dataProp][language];
    };

    if (WrappedComponent === AnimalCard) {
      return (props) => {
        const animal = R.pick([props.animal], dataSet);

        return (
          <WrappedComponent
            animal={animal[props.animal]}
            translate={translate}
            index={props.index}
          />
        );
      };
    } else if (WrappedComponent === FoodCard) {
      return (props) => {
        const food = R.pick([props.food], dataSet);

        return (
          <WrappedComponent
            food={food[props.food]}
            translate={translate}
            index={props.index}
          />
        );
      };
    }
  };

  return translatedCardGenerator;
};

const translateAnimal = createTranslate(animalTranslations);
const translateFood = createTranslate(foodTranslations);

const App = () => {
  const [language, setLanguage] = useState("en");
  const TranslatedAnimalCard = translateAnimal(AnimalCard, language);
  const TranslatedFoodCard = translateFood(FoodCard, language);

  const animals = ["tiger", "lion", "hippo", "platypus"];
  const foods = ["cake", "pizza", "hotdog", "pancake"];

  // Array of React.Components
  const TranslatedAnimalCards = animals.map((a, index) => (
    <TranslatedAnimalCard animal={a} index={index + 1} key={index} />
  ));
  const TranslatedFoodCards = foods.map((f, index) => (
    <TranslatedFoodCard food={f} index={index + 1} key={index} />
  ));

  return (
    <div>
      <select
        id="language"
        value={language}
        onChange={() =>
          setLanguage(
            document.getElementById("language").options[
              document.getElementById("language").selectedIndex
            ].value
          )
        }
      >
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="ru">русский</option>
        <option value="fi">Suomalainen</option>
      </select>
      <div style={{ display: "flex" }}>{TranslatedAnimalCards}</div>
      <div style={{ display: "flex" }}>{TranslatedFoodCards}</div>
    </div>
  );
};

export default App;
