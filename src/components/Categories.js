function Categories({ categories, displayedCat, setDisplayedCat }) {
    return (
        <div>
            <label htmlFor="cat-select">Sélectionner une catégorie </label>
            <select
                name="categories"
                id="cat-select"
                onChange={(e) => setDisplayedCat(e.target.value)}
            >
                <option value="">👇</option>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Categories
