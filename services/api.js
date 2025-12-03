const API_URL = "https://fakestoreapi.com";

async function safeFetch(url) {
  try {
    // runtime-only, no caching at build time
    const res = await fetch(url, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // log for debugging (will appear in Vercel logs)
    console.log("[safeFetch] GET", url, "status:", res.status);

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      const err = new Error(`HTTP error! status: ${res.status} ${text}`);
      err.status = res.status;
      throw err;
    }

    return await res.json();
  } catch (err) {
    // bubble error up so callers can decide
    console.error("[safeFetch] error fetching", url, err);
    throw err;
  }
}

export async function getAllProducts() {
  try {
    return await safeFetch(`${API_URL}/products`);
  } catch (error) {
    // return empty array at runtime so UI can render fallback
    return [];
  }
}

export async function getProductById(id) {
  if (!id) return null;
  try {
    return await safeFetch(`${API_URL}/products/${id}`);
  } catch (error) {
    if (error && error.status === 404) return null;
    return null;
  }
}

export async function getProductsByCategory(category) {
  if (!category) return [];
  try {
    return await safeFetch(`${API_URL}/products/category/${encodeURIComponent(category)}`);
  } catch (error) {
    return [];
  }
}

export async function getAllCategories() {
  try {
    return await safeFetch(`${API_URL}/products/categories`);
  } catch (error) {
    return [];
  }
}
