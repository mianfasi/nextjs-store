// services/api.js

const API_URL = 'https://fakestoreapi.com';

export async function getAllProducts() {
  try {
    const response = await fetch(`${API_URL}/products`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    // Return empty array to prevent build failure
    return [];
  }
}

export async function getProductById(id) {
  try {
    const response = await fetch(`${API_URL}/products/${id}`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    // Return null to trigger notFound() in the page
    return null;
  }
}

export async function getProductsByCategory(category) {
  try {
    const response = await fetch(`${API_URL}/products/category/${category}`, {
      next: { revalidate: 3600 },
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