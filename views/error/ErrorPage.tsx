import React, { ReactNode } from "react";

import { title as styledTitle } from "@/components/atoms/Typography";

const ErrorPage = ({ title, button }: { title: string; button: ReactNode }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mb-8">
        <h1 className={styledTitle()}>{title}</h1>
      </div>
      {button}
    </div>
  );
};

export default ErrorPage;
