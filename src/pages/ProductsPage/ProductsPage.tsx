// import React from 'react'
import Banner from './components/Banner/Banner'
import styles from './ProductsPage.module.less'

function ProductsPage() {
  return (
    <div className={`${styles.wrapper} pt-[80px]`}>
      <Banner></Banner>
    </div>
  )
}

export default ProductsPage