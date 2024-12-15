import { useEffect, useState } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const allMeals = {
  meals: [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
      pic: "sushi",
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
      pic: "schnitzel",
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
      pic: "BarbecueBurger",
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
      pic: "greenBowl",
    },
  ],
};

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //const [httpError, setHttpError] = useState();

  // If Loading data rom extral source, using the following code:

  useEffect(() => {
    var responseData = allMeals.meals;
    const loadedMeals = [];

    for (const key in responseData) {
      loadedMeals.push({
        id: key,
        name: responseData[key].name,
        description: responseData[key].description,
        price: responseData[key].price,
        img: responseData[key].pic.toLowerCase(),
      });
    }
    setMeals(loadedMeals);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <section className="text-center text-white">
        <p>Loading...</p>
      </section>
    );
  }

  // if (httpError) {
  //   return (
  //     <section className="text-center text-red-500">
  //       <p>{httpError}</p>
  //     </section>
  //   );
  // }

  const mealsList = meals.map((meal) => (
    <MealItem
      onShowMealDetail={props.onShowMealDetail}
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      img={meal.img}
    />
  ));

  return (
    <section className="max-w-[60rem] w-[90%] my-8  mx-auto animate-meals-appear">
      <Card>
        <ul className="list-none m-0 p-0">{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
