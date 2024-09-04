import React from "react";
import { Image } from "@nextui-org/image";

const ProductDescription = ({
  title,
  image,
  description,
}: {
  title: string;
  image?: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col gap-8 items-center">
      {!!image && (
        <div className="my-8">
          <Image
            isZoomed
            alt={title}
            className="object-contain bg-white rounded-xl p-8"
            src={image}
            width={500}
          />
        </div>
      )}
      <p className="text-small text-center">{description}</p>
    </div>
  );
};

export default ProductDescription;
