import TestForm from "@/components/ui/forms/testForm";

export default async function page() {
  const apiUrl = process.env.API_URL || "http://localhost:8081/api";
  //const apiresponse = await fetch(`${process.env.API_URL}/products`);

  const { products } = await fetch(`${apiUrl}/products`).then(
    (res) => res.json()
  );

  return <TestForm products={ products }/>;
}
