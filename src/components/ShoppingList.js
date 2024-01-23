import { plantList } from "../datas/plantList";
import '../styles/ShoppingList.css'
import CareScale from './CareScale'

const plantCategories = plantList.reduce((categories, plant) =>
  categories.includes(plant.category) ? categories : categories.concat(plant.category), [])

function ShoppingList() {
  return (
    <div>
      <ul className="lmj-categories">
        {plantCategories.map((category, index) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {plantList.map(({id, name, isBestSale, light}) => (
          <li key={id} className='lmj-plant-item'>
            {name}{isBestSale && <span>🔥</span>}
            <CareScale scaleValue={light} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
