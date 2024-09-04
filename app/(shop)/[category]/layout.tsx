import { ReactNode } from "react";

import { title } from "@/components/atoms/Typography";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export async function generateMetadata({
  params: { category },
}: {
  params: {
    category: string;
  };
}) {
  const decodedCategory = decodeURIComponent(category);
  const categoryStr =
    decodedCategory.charAt(0).toUpperCase() + decodedCategory.slice(1);

  return {
    title: `${categoryStr}`,
    description: `Check our products in category - ${categoryStr}`,
  };
}

export default async function CategoryLayout({
  children,
  params: { category },
}: {
  children: ReactNode;
  params: {
    category: string;
  };
}) {
  const decodeCategory = decodeURIComponent(category);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Breadcrumbs
        list={[
          {
            label: "All categories",
            link: "/",
          },
          {
            label: decodeCategory,
            link: `/${category}`,
          },
        ]}
      />
      <div>
        <h1 className={`${title()} capitalize`}>{decodeCategory}</h1>
      </div>
      {children}
    </section>
  );
}
