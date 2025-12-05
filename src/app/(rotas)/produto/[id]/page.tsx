"use client";

import { useParams } from "next/navigation";
import ProductDisplay from "./components/product-display";

const ProductPage = () => {
  const params = useParams();
  const productId = Number(params.id); // Assuming the dynamic route is [productId]

  if (isNaN(productId)) {
    return <div className="text-center text-red-600">ID do produto inválido.</div>;
  }

  return (
    <div className="h-screen w-full">
      <ProductDisplay id={productId} />
    </div>
  );
};

export default ProductPage;
