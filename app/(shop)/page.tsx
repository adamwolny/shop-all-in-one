import { APIService } from "@/services";
import CategoryCard from "@/components/shared/CategoryCard";
import { title } from "@/components/atoms/Typography";

export default async function Home() {
  const categories = await APIService.getCategories();

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div>
        <h1 className={title()}>All categories</h1>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
        {categories.map((category, index) => (
          <CategoryCard key={index} link={`/${category}`} title={category} />
        ))}
      </section>
    </section>
  );
}
