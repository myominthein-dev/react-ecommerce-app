import React from 'react'
import Container from '../components/Container'
import ProductCardDetail from '../components/Product-card-detail'
import BreadCrumb from '../components/BreadCrumb'

const ProductDetail = () => {
  return (
    <Container className={"flex flex-col justify-between"}>
        <BreadCrumb>
          Product-details
        </BreadCrumb>
       <ProductCardDetail/>
    </Container>
  )
}

export default ProductDetail