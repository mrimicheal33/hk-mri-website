import Image from "next/image";
import { getProductImage } from "@/data/products";

interface ProductImageProps {
  productId: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
}

/**
 * Must be placed inside a parent with:
 *   className="relative w-full aspect-[ratio] overflow-hidden"
 */
export function ProductImage({
  productId,
  alt,
  priority = false,
  className = "object-contain object-center",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px",
}: ProductImageProps) {
  return (
    <Image
      src={getProductImage(productId)}
      alt={alt}
      fill
      priority={priority}
      className={className}
      sizes={sizes}
    />
  );
}
