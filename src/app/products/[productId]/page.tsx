import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/products/ProductDetail";
import { SonoEyeDetail } from "@/components/products/SonoEyeDetail";
import { products, getProductById } from "@/data/products";
import { getLocalizedProduct } from "@/data/product-translations";
import { getDictionary } from "@/i18n/get-dictionary";
import { getLocale } from "@/i18n/get-locale";

interface ProductPageProps {
  params: Promise<{ productId: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({ productId: product.id }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { productId } = await params;
  const locale = await getLocale();
  const t = getDictionary(locale).metadata;
  const product = getProductById(productId);
  if (!product) return { title: t.productNotFound };

  const localized = getLocalizedProduct(product, locale);
  return {
    title: `${product.brand} ${product.name}`,
    description: localized.tagline,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { productId } = await params;
  const product = getProductById(productId);
  if (!product) notFound();

  if (product.id === "sonoeye") {
    return <SonoEyeDetail />;
  }

  return <ProductDetail product={product} />;
}
