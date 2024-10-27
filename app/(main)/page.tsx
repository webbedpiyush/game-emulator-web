import CategorySlider from "@/components/Sliders/CategorySlider";
import HeroSlider from "@/components/Sliders/HeroSlider";
import { getGameCategories } from "@/lib/gameQueries";

export default async function Home() {
  const gameCategories = await getGameCategories();
  return (
    <>
      <HeroSlider />
      <CategorySlider gameCategories={gameCategories} />
    </>
  );
}
