import React from "react";
import { useSearchParams } from "react-router-dom";
import { dummyProducts } from "../../data/products";
import { Search as SearchIcon } from "lucide-react";
import CustomerLayout from "../../components/Customer/CustomerLayout";
import ProductCard from "../../components/Customer/ProductCard";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const results = dummyProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <CustomerLayout>
      <div className="mb-6">
        <h1 className="text-xl font-bold text-gray-900">
          Search results for "{query}"
        </h1>
        <p className="text-sm text-gray-500">{results.length} items found</p>
      </div>

      {results.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center flex flex-col items-center">
          <SearchIcon className="w-12 h-12 text-gray-300 mb-4" />
          <h2 className="text-lg font-bold text-gray-900">No products found</h2>
          <p className="text-gray-500 text-sm">
            Try searching for something else like "Milk" or "Snacks".
          </p>
        </div>
      )}
    </CustomerLayout>
  );
};

export default Search;
