import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./product-card"; // Certifique-se de que o caminho está correto

interface Product {
  id: number;
  nome: string;
  descricao: string;
  foto_produto: string;
  produtorId: number;
  createdAt: string;
  updatedAt: string;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://extensao-8-semestre-si-2025-2.onrender.com/api/produto"
        );
        setProducts(response.data);
      } catch (err) {
        setError("Erro ao carregar os produtos.");
        console.error("Erro ao buscar produtos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center text-amber-600">Carregando produtos...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center mb-10">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          imageSrc={`https://extensao-8-semestre-si-2025-2.onrender.com/uploads/${product.foto_produto}`}
          title={product.nome}
          description={product.descricao}
          created={product.createdAt}
        />
      ))}
    </div>
  );
};

export default ProductList;
