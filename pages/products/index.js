import styles from '../../styles/Products.module.css'
import Navbar from '../../components/Navbar'
import ProductCard from '../../components/ProductCard'
import { useEffect, useState } from 'react';

function Products({products}) {
  const [avgRating, setAvgRating] = useState(0);

    useEffect(
      () => {
        const averageRating = products.reduce(
          (average, currentProduct) => 
          average + currentProduct.rating.rate,0);
        setAvgRating((averageRating/products.length).toFixed(1))
      },
      [],
    );

    return (
      <div className={styles.products}>
        <Navbar average_rating={avgRating} />
        {products.map(p => <ProductCard p={p}/>)}
      </div>
    )
  }
  Products


  export async function getStaticProps() {
    const res = await fetch('https://fakestoreapi.com/products')
    const products = await res.json()

    return {
      props: {
        products
      },
    }
  }


  export default Products