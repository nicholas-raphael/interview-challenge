import React from 'react'
import styles from '../../styles/components/Navbar/Navbar.module.css'

export default function Navbar() {
    const NAV_IMG = 'https://dh3yyy4wyj8lf.cloudfront.net/ekt-storefront/img-sites/elektra-io/header_icn-logo-elektra.svg'
  return (
    <div className={styles.nav} >
        <div className={styles.nav_wrapper} >
            <div className={styles.logo}>
                <img src={NAV_IMG}/>
            </div>
        </div>
    </div>
  )
}
