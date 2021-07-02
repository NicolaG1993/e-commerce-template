import Categories from "./Categories";
import allCategories from "./data/allCategories";
export default function Shop() {
    return (
        <section>
            <div className="medium-box">
                <h2>SHOP</h2>
            </div>

            <div className="medium-box">
                <h3>Choose a category</h3>
                <Categories categories={allCategories} />
            </div>
            <div className="medium-box"></div>
        </section>
    );
}
