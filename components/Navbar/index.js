import React from 'react'
import Link from 'next/link'
import styles from '../../styles/components/Navbar/Navbar.module.css'

export default function Navbar({average_rating}) {
  /*
  * Navbar - Shows on top on every page
  */
    const NAV_IMG = 'https://dh3yyy4wyj8lf.cloudfront.net/ekt-storefront/img-sites/elektra-io/header_icn-logo-elektra.svg'
  return (
    <div className={styles.nav} >
        <div className={styles.nav_wrapper} >
            <div className={styles.logo}>
                <Link href='/products/'>
                  <img src={NAV_IMG}/>
                </Link>
            </div>
          <span>Rating promedio: <b>{average_rating}</b></span>
        </div>
    </div>
  )
}
