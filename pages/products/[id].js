import styles from '../../styles/Product.module.css'
import Navbar from '../../components/Navbar'

function Product({product}) {
  return (
<>
    <div>
      <Navbar/>
    </div>


    <div className={styles.product_page}>  


      <div className={styles.product_div}>
        <img src={product.image}/>
      </div>
      <div className={styles.product_text}>
        <p className={styles.product_title}>{product.title}</p>
        <p>${product.price}</p>
        <div className={styles.product_rating}>
          {product.rating.rate}/5
        </div>
        <p className={styles.product_desc}>{product.description}</p>
          <div className={styles.btn}>
            Agregar al carrito
          </div>
      </div>
    </div>
    </>
    )
}
  Product


    // This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://fakestoreapi.com/products')
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}
export async function getStaticProps({params}) {
  const res = await fetch('https://fakestoreapi.com/products/'+params.id)
  const product = await res.json()

  return {
    props: {
      product
    }, // will be passed to the page component as props
  }
}


  export default Product