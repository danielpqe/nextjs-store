// import { useState } from "react";

const getProducts = async () => {
  const response = await fetch(
    `${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json?`,
    {
      headers: {
        "X-Shopify-Access-Token": process.env.SHOPIFY_API_KEY || "",
      },
    }
  );
  return await response.json();
};

type ProductsProps = {
  id: string;
  title: string;
};

export const MainProducts = async () => {
  // const [products, setProducts] = useState<Array<ProductsProps>>([]);
  const productsResponse = await getProducts();
  console.log(productsResponse);
  // setProducts(productsResponse.products);

  return (
    <footer>
      <h2>Main Products</h2>
      {/* <ul>
        {products.map((product) => {
          return <li key={product.id}>{product.title}</li>;
        })}
      </ul> */}
    </footer>
  );
};
