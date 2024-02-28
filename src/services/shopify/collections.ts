export { shopifyUrls } from "./urls";
import { shopifyUrls } from "@/services/shopify/urls";
import { env } from "@/config/env";

export const getCollections = async () => {
  try {
    const response = await fetch(shopifyUrls.collections.all, {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_TOKEN,
      }),
    });
    const { smart_collections } = await response.json();
    const transformedSmartCollections = smart_collections.map(
      (collection: any) => {
        return {
          id: collection.id,
          title: collection.title,
          handle: collection.handle,
        };
      }
    );
    return transformedSmartCollections;
  } catch (error) {
    console.log(error);
  }
};

export const getCollectionProducts = async (id: string) => {
  try {
    const response = await fetch(shopifyUrls.collections.products(id), {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_TOKEN,
      }),
    });
    const { products } = await response.json();

    return products;
  } catch (error) {
    console.log(error);
  }
};