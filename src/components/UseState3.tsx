import { useState } from 'react';
type ProductsType = {
  id: number;
  name: string;
}[];

const UseState3 = () => {
  const [products, setProducts] = useState<ProductsType>([]);
  const newProducts = () => {
    setProducts([
      ...products,
      {
        id: products.length,
        name: 'こんにちはReact',
      },
    ]);
  };

  return (
    <div>
      <button onClick={newProducts}>新しいプロダクト</button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} id:{product.id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseState3;
