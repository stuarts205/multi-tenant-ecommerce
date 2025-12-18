import React from "react";
import { CategoryDropdown } from "./categories-dropdown";

interface CategoriesProps {
  data: any;
}

export const Categories = ({ data }: CategoriesProps) => {
  return (
    <div className="relative w-full">
      <div className="flex fle-nowrap items-center">
        {data.docs.map((category: any) => (
          <div className="" key={category.id}>
            <CategoryDropdown
              category={category}
              isActive={false}
              isNavigationHovered={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
