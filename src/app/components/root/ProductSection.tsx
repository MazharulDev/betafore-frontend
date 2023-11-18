"use client";

import { useShowAllProductsQuery } from "@/redux/api/productApi";
import ProductCard from "../card/ProductCard";
import { IProduct } from "@/types";

const ProductSection = () => {
  const { data } = useShowAllProductsQuery(undefined);
  return (
    <div>
      <div>
        <h2 className="text-center text-3xl font-bold my-3">Products</h2>
      </div>
      <div className="container md:grid grid-cols-2 gap-4 w-fit mx-auto p-12">
        {data?.slice(0, 2)?.map((product: IProduct) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
