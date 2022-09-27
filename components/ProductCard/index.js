import React from 'react'
import Link from 'next/link'
import styles from '../../styles/components/ProductCard/ProductCard.module.css'
export default function ProductCard({p}) {
  return (
    <Link href={'/products/'+ p.id}>
      <div className={styles.product_card}>
          <div className={styles.product_image}>
            <img src={p.image}/>
          </div>
          <br/>
          <div className={styles.product_info}>
            <h5>{p.title}</h5>
            <h6>${p.price}</h6>
          </div>
      </div>
        </Link>
  )
}