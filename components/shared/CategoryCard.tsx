import React from "react";
import { CardHeader, CardBody, CardFooter, Card } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import Link from "next/link";

const CategoryCard = ({
  title,
  description,
  link,
}: {
  title: string;
  description?: string;
  link: string;
}) => {
  return (
    <Card className="w-full">
      <CardHeader className="flex gap-3">
        <p className="text-md capitalize">{title}</p>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="text-small">
          {description ??
            "Lorem ipsum lorem dolores lorem ispum lorem dolores."}
        </p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button
          as={Link}
          className="text-sm font-normal w-full text-default-600 bg-default-100"
          href={link}
          variant="flat"
        >
          See products
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CategoryCard;
