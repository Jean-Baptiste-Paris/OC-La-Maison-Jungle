import { plantList } from "../datas/plantList";

const plantCategories = plantList.reduce((categories, plant) => {
  if (!categories.includes(plant.category)) {
    categories.push(plant.category);
  }
  return categories;
}, []);

function ShoppingList() {
  return (
    <div>
      <ul className="lms-categories">
        {plantCategories.map((category, index) => (
          <li key={`${category}-${index}`}>{category}</li>
        ))}
      </ul>
      <ul className="lms-plants">
        {plantList.map(({id, name}) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
