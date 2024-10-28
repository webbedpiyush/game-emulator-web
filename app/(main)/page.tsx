import GameCategory from "@/components/GameCategory";
import CategorySlider from "@/components/Sliders/CategorySlider";
import HeroSlider from "@/components/Sliders/HeroSlider";
import {
  getGameCategories,
  getGamesByCategoryId,
  getGamesBySelectedCategories,
} from "@/lib/gameQueries";

export default async function Home() {
  // const gameCategories = await getGameCategories();
  // const category = await getGamesByCategoryId(5);

  const [gameCategories, category] = await Promise.all([
    getGameCategories(),
    getGamesByCategoryId(5),
  ]);

  const selectedCategoryIds = [1, 2, 5];
  const multipleCategories = await getGamesBySelectedCategories(
    selectedCategoryIds
  );
  return (
    <>
      <HeroSlider />
      <CategorySlider gameCategories={gameCategories} />
      <GameCategory category={category} />
    </>
  );
}
