import { ReactNode } from "react";

export default async function ProductLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section className="w-full max-w-screen-md mx-auto flex flex-col items-center justify-center gap-8 py-8 md:py-10">
      {children}
    </section>
  );
}
