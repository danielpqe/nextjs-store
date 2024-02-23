import { Description } from "@/components/home/Description";
import { MainProducts } from "../components/home/MainProducts";
import { Hero } from "../components/home/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Description />
      <MainProducts />
    </main>
  );
}
