"use client";

import React from "react";
import Link from "next/link";

const Breadcrumbs = ({
  list,
}: {
  list: {
    label: string;
    link: string;
  }[];
}) => {
  return (
    <div>
      <ul className="flex gap-2 text-bold text-sm">
        {list.map((el, index) => {
          if (index === list.length - 1) {
            return (
              <li key={index}>
                <Link href={el.link}>{el.label}</Link>
              </li>
            );
          } else {
            return (
              <>
                <li key={index}>
                  <Link href={el.link}>{el.label}</Link>
                </li>
                <li key={`${index}-separator`}>/</li>
              </>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
