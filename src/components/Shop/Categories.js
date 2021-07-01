import { Link } from "react-router-dom";

export default function Categories({ categories }) {
    return (
        <div className="categories-wrap">
            {categories.map((category, i) => (
                <Link
                    to={`/shop/${category.id}`}
                    className="category"
                    key={category.id + i}
                >
                    <img src={category.picUrl} />
                    <h3>{category.title}</h3>
                </Link>
            ))}
        </div>
    );
}
