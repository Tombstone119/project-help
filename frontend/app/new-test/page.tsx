import { revalidatePath } from "next/cache";
import Button from "./button";

interface TProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  images: string[];
  ratings: number;
  reviews: number;
}

export default async function MyPage() {
  const { products } = await fetch("http://localhost:8081/api/products").then(
    (res) => res.json()
  );

  async function formSubmitHandler(formData: FormData) {
    "use server";
    const id = formData.get("_id");
    const rawFormData = {
      name: formData.get("name"),
      description: formData.get("description"),
      price: formData.get("price"),
      category: formData.get("category"),
      stock: formData.get("stock"),
      ratings: formData.get("ratings"),
    };
    try {
      await fetch(`http://localhost:8081/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rawFormData),
      });
    } catch (error) {
      console.error(error);
    }
    revalidatePath("/new-test");
  }

  return (
    <div className="flex gap-2 p-2">
      {(products as TProduct[]).map((product) => (
        <form
          action={formSubmitHandler}
          key={product._id}
          className="flex flex-col gap-2 border-2 p-2 border-cyan-600"
        >
          <input type="hidden" name="_id" defaultValue={product._id} />
          <input type="text" name="name" defaultValue={product.name} />
          <input
            type="text"
            name="description"
            defaultValue={product.description}
          />
          <input type="text" name="price" defaultValue={product.price} />
          <input type="text" name="category" defaultValue={product.category} />
          <input type="text" name="stock" defaultValue={product.stock} />
          <input type="text" name="ratings" defaultValue={product.ratings} />
          <Button />
        </form>
      ))}
    </div>
  );
}
