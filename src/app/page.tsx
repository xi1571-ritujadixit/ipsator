import Products from "./components/Products";

async function getProductsData() {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

async function getCategoriesData() {
    const res = await fetch("https://api.escuelajs.co/api/v1/categories");
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
