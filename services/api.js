const BASE_URL = 'https://fakestoreapi.com';

export async function getAllProducts() {
  const res = await fetch(`${BASE_URL}/products`, {
    next: { revalidate: 3600 } // Revalidate every hour
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  
  return res.json();
}

export async function getProductById(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    next: { revalidate: 3600 }
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }
  
  return res.json();
}

export async function getProductIds() {
  const products = await getAllProducts();
  return products.map(product => product.id.toString());
}