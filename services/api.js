// services/api.js

const API_URL = 'https://fakestoreapi.com';

export async function getAllProducts() {
  try {
    console.log('Fetching all products from:', `${API_URL}/products`);
    
    const response = await fetch(`${API_URL}/products`, {
      next: { revalidate: 3600 },
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    console.log('Response status:', response.status);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Products received:', data.length);
    
    return data;
  } catch (error) {
    console.error('Error in getAllProducts:', error);
    // Return empty array instead of throwing to prevent build failures
    return [];
  }
}

export async function getProductById(id) {
  try {
    console.log('Fetching product:', id);
    
    const response = await fetch(`${API_URL}/products/${id}`, {
      next: { revalidate: 3600 },
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    console.log('Product response status:', response.status);
    
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Product received:', data.title);
    
    return data;
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    return null;
  }
}

export async function getProductsByCategory(category) {
  try {
    const response = await fetch(`${API_URL}/products/category/${category}`, {
      next: { revalidate: 3600 },
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching products by category ${category}:`, error);
    return [];
  }
}

export async function getAllCategories() {
  try {
    const response = await fetch(`${API_URL}/products/categories`, {
      next: { revalidate: 3600 },
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}