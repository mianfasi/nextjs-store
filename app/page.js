import { Suspense } from 'react';
import Hero from '@/components/Hero';
import ProductList from '@/components/ProductList';
import LoadingSpinner from '@/components/LoadingSpinner';
import { getAllProducts } from '@/services/api';

export const revalidate = 3600; // Revalidate every hour

async function FeaturedProducts() {
  const products = await getAllProducts();
  // Show only first 8 products as featured
  const featuredProducts = products.slice(0, 8);
  
  return <ProductList products={featuredProducts} />;
}

export default function Home() {
  return (
    <div>
      <Hero />
      <Suspense fallback={<LoadingSpinner />}>
        <FeaturedProducts />
      </Suspense>
    </div>
  );
}