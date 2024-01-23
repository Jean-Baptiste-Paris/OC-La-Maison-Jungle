import { plantList } from "../datas/plantList";

const plantCategories = plantList.reduce((categories, plant) =>
  categories.includes(plant.category) ? categories : categories.concat(plant.category), [])

function ShoppingList() {
  return (
    <div>
      <ul className="lms-categories">
        {plantCategories.map((category, index) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
      <ul className="lms-plant-list">
        {plantList.map(({id, name, isBestSale}) => (
          <li key={id} className='lmj-plant-item'>
            {name}{isBestSale && <span>🔥</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
