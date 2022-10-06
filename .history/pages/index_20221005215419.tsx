import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { CartItem } from "./api/lib/cartItem";
import type { Product } from "./api/lib/product";

const Home: NextPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [shoppingCartItems, setShoppingCartItems] = useState<CartItem[]>([]);

  function productToCartItem(productTemp: Product[]) {
    const result = [];
    for (let i = 0; i < productTemp.length; i++) {
      const element: CartItem = { product: productTemp[i], numberItems: 0 };
      result.push(element);
    }
    return result;
  }

  useEffect(() => {
    (async () => {
      const productTemp = (await (await fetch("/api/all")).json()) as Product[];
      // console.log(productTemp)
      setProducts(productTemp);
      setShoppingCartItems(productToCartItem(productTemp));
    })();
  }, []);

  function handleAddToCart(product: Product) {
    shoppingCartItems.find();
    // encontrar el producto

    // aumentar el numero items +1
    setShoppingCartProducts([...shoppingCartItems, product]);
  }

  function deleteFromCart(product: Product) {
    // encontrar el producto

    // aumentar el numero items -1
    const itemsTemp = [...shoppingCartProducts];
    const itemsTempFiltered = itemsTemp.filter((obj) => obj !== product);
    console.log(itemsTempFiltered);
    setShoppingCartProducts(itemsTempFiltered);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Centrito</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Centrito Challenge</h1>
        <p>{shoppingCartProducts.length}</p>
        <ul className={styles["product-list"]}>
          {products.map((a) => (
            <li className={styles.product} key={a.name}>
              <div className={styles.name}>{a.name}</div>
              <div className={styles.phone}>{a.price}</div>
              <Image src={a.photo} alt={a.name} width={500} height={500} />
              <div
              // className={styles.phone}
              >
                <button onClick={() => handleAddToCart(a)}>Add</button>
                <button onClick={() => deleteFromCart(a)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Home;
