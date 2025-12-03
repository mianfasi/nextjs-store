// app/products/[id]/page.js
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductById } from "@/services/api";
import AddToCartButton from "@/components/AddToCartButton";

// FORCE RUNTIME
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;
export const dynamicParams = true;

// -------- FIXED generateMetadata ---------
export async function generateMetadata(props) {
  const { params } = props;
  const resolved = await params; // IMPORTANT FIX
  const id = resolved.id;

  // avoid external fetch during Vercel build
  if (process.env.VERCEL === "1") {
    return {
      title: "Product - NextStore",
      description: "Product details page",
    };
  }

  const product = await getProductById(id);
  if (!product) {
    return { title: "Product Not Found - NextStore" };
  }

  return {
    title: `${product.title} - NextStore`,
    description: product.description?.slice(0, 150) ?? "Product details",
  };
}

// -------- FIXED PAGE COMPONENT ----------
export default async function ProductDetailPage(props) {
  const { params } = props;
  const resolved = await params; // IMPORTANT FIX
  const id = resolved.id;

  const product = await getProductById(id);
  if (!product) return notFound();

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          ← Back to Products
        </Link>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Replace next/image to avoid remote issues */}
            <img
              src={product.image}
              alt={product.title}
              style={{ maxWidth: "100%", maxHeight: "400px", objectFit: "contain" }}
            />

            <div>
              <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
              <p className="text-gray-500 mb-6">{product.description}</p>

              <p className="text-4xl font-bold text-blue-600 mb-6">
                ${Number(product.price).toFixed(2)}
              </p>

              <AddToCartButton product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
