"use client";
import React from "react";
import CategoryCard from "./CategoryCard";
import { useGetCategoriesQuery } from "@/redux/features/category/categoryApi";
import CategoryLoading from "@/components/loader/CategoryLoading";
import NotFoundCard from "@/components/card/NotFoundCard";
import ServerErrorCard from "@/components/card/ServerErrorCard";
import { ICategory } from "@/types/category.type";

const PopularCategories = () => {
  const { data, isLoading, isError } = useGetCategoriesQuery(undefined);
  const categories = data?.data || [];

  let content: React.ReactNode;

  if (isLoading) {
    return <CategoryLoading />;
  }

  if (!isLoading && !isError && categories?.length === 0) {
    content = <NotFoundCard title="There is no categories" />;
  }

  if (!isLoading && !isError && categories?.length > 0) {
    content = (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories?.map((category: ICategory, index: number) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </>
    );
  }

  if (!isLoading && isError) {
    content = <ServerErrorCard />;
  }

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Popular Category
        </h2>
        {content}
      </section>
    </>
  );
};

export default PopularCategories;
