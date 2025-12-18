import Link from "next/link";

import { Category } from "@/payload-types";

interface SubCategoryMenuProps {
  category: Category; // TODO: change this
  isOpen: boolean;
  position: { top: number; left: number };
}

export const SubCategoryMenu = ({
  category,
  isOpen,
  position,
}: SubCategoryMenuProps) => {
  if (
    !isOpen ||
    !category.subcategories ||
    category.subcategories.length === 0
  ) {
    return null;
  }

  const backgroundColor = category.color || "#F5F5F5";

  return (
    <div
      className="fixed z-100"
      style={{ top: position.top, left: position.left }}
    >
      {/* Invisible bridge to maintain hover */}
      <div className="h-3 w-60" />
      <div
        style={{ backgroundColor }}
        className="w-60 text-black p-4 rounded-md overflow-hidden border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-x-0.5 -translate-y-0.5"
      >
        <div className="flex flex-col gap-3">
            {(category.subcategories?.docs?.filter(
            (doc): doc is Category => typeof doc !== "string"
            ) ?? []).map((subcategory: Category) => (
            <Link
                key={subcategory.slug}
                href="/"
            >
                {subcategory.name}
            </Link>
            ))}
        </div>
      </div>
    </div>
  );
};