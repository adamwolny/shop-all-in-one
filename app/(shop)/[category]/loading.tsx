import { APIService } from "@/services";
import ProductCard, {ProductLoadingCard} from "@/components/shared/ProductCard";

export default async function CategoryLoading() {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
      <ProductLoadingCard />
      <ProductLoadingCard />
      <ProductLoadingCard />
      <ProductLoadingCard />
    </section>
  );
}
