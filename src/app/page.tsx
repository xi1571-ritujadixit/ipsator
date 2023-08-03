import Products from "./components/Products";
import { base_URL } from "./environment";

async function getProductsData() {
    const res = await fetch(`${base_URL}/products`);
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

async function getCategoriesData() {
    const res = await fetch(`${base_URL}/categories`);
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export default async function Home() {
    const products = await getProductsData();
    const categories = await getCategoriesData();

    return (
        <main className="m-10">
            <Products products={products} categories={categories} />
        </main>
    );
}
