import { Title } from "@/components";
import { redirect } from "next/navigation";
import { ProductForm } from "./ui/ProductForn";
import { getCategories } from "@/actions/category/get-categories";
import { getProductBySlug } from "@/actions/product/get-product-by-slug";

interface Props {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = params;

  const [product, categories] = await Promise.all([
    getProductBySlug(slug),
    getCategories(),
  ]);

  // Todo: new
  if (!product && slug !== "new") {
    redirect("/admin/products");
  }

  const title = slug === "new" ? "Nuevo producto" : "Editar producto";

  return (
    <>
      <Title title={title} />

      <ProductForm product={product ?? {}} categories={categories} />
    </>
  );
}
