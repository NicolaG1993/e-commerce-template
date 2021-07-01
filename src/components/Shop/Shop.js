import Categories from "./Categories";
import allCategories from "./data/allCategories";
export default function Shop() {
    return (
        <section>
            <h2>SHOP</h2>
            <div>
                <h3>Choose a category</h3>
                <Categories categories={allCategories} />
            </div>
        </section>
    );
}
