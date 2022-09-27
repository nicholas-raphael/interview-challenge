import styles from '../../styles/Products.module.css'
import Navbar from '../../components/Navbar'
import ProductCard from '../../components/ProductCard'

function Products({products}) {
    return (
      <div className={styles.products}>
        <Navbar/>
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