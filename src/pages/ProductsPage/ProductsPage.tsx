// import React from 'react'
import Banner from './components/Banner/Banner'
import ProductTable from './components/ProductTable/ProductTable'
import styles from './ProductsPage.module.less'

function ProductsPage() {
  return (
    <div className={`${styles.wrapper} pt-[80px]`}>
      <Banner></Banner>
      <ProductTable></ProductTable>
    </div>
  )
}

export default ProductsPage
