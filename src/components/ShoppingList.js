import { plantList } from "../datas/plantList"
import "../styles/ShoppingList.css"
import PlantItem from "./PlantItem"

const plantCategories = plantList.reduce(
  (categories, plant) =>
    categories.includes(plant.category)
      ? categories
      : categories.concat(plant.category),
  []
)

function ShoppingList() {
  return (
    <div>
      <ul className="lmj-categories">
        {plantCategories.map((category, index) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {plantList.map(({ id, cover, name, water, light }) => (
          <PlantItem
            id={id}
            cover={cover}
            name={name}
            water={water}
            light={light}
          />
        ))}
      </ul>
    </div>
  )
}

export default ShoppingList
