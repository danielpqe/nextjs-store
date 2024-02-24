import Image from "next/image";
import styles from "./MainProducts.module.sass";

type Product = {
  id: number;
  title: string;
  body_html: string;
  vendor: string;
  product_type: string;
  created_at: string;
  handle: string;
  updated_at: string;
  published_at: string;
  template_suffix: null | string;
  published_scope: string;
  tags: string;
  status: string;
  admin_graphql_api_id: string;
  images: [
    {
      id: number;
      alt: null | string;
      position: number;
      product_id: number;
      created_at: string;
      updated_at: string;
      admin_graphql_api_id: string;
      width: number;
      height: number;
      src: string;
      variant_ids: number[];
    }
  ];
};

const getProducts = async () => {
  try {
    const response = await fetch(
      `${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`,
      {
        headers: new Headers({
          "X-Shopify-Access-Token": process.env.SHOPIFY_API_KEY || "",
        }),
      }
    );
    const { products } = await response.json();
    return products;
  } catch (error) {
    console.log(error);
  }
};

export const MainProducts = async () => {
  const products: Product[] = await getProducts();

  return (
    <section className={styles.MainProducts}>
      <h3>✨ New products released!</h3>
      <div className={styles.MainProducts__grid}>
        {products.map((product) => {
          const imageSrc = product.images[0].src;
          return (
            <article key={product.id}>
              <p>{product.title}</p>
              <Image src={imageSrc} fill alt={product.title} loading="eager" />
            </article>
          );
        })}
      </div>
    </section>
  );
};
