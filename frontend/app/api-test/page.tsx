import TestForm from "@/components/ui/forms/testForm";

export default async function page() {
  //const apiresponse = await fetch(`${process.env.API_URL}/products`);

  const { products } = await fetch(`${process.env.API_URL}/products`).then(
    (res) => res.json()
  );

  return <TestForm products={ products }/>;
}
