import React, { useContext } from 'react'
import {ShopContest} from '../context/ShopContest'
import {useParams} from 'react-router-dom' 
import Breadcrums from '../components/Breadcrums/Breadcrums';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DiscriptionBox from '../components/DiscriptionBox/DiscriptionBox';

const Product = () => {
  const {all_product}= useContext(ShopContest);
  //const {prodductId}=useParams();
  const { productId } = useParams(); 
console.log('Product ID from URL:', productId);

  const product=all_product.find((e)=>e.id===Number(productId));
  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <DiscriptionBox/>
    </div>
  )
}

export default Product
