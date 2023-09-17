import React from 'react'
import PropTypes from 'prop-types'

const Products = ({ product,handleClick }) => {
  const { seller, name, img, price, shipping ,stock} = product;
  console.log(product);
  return (
    <div className=''>
      <div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
          <img src={img } alt={seller} className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
          <h2 className="card-title">Seller : {seller }</h2>
          <p>{name}</p>
          <p className=' font-semibold'>Stock : {stock} </p>
          <p className=' font-semibold'>Price : {price }</p>
          <p className=' font-semibold'>Shipping : {shipping }</p>
    <div className="card-actions">
      <button onClick={()=>handleClick(product)} className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    </div>
  )
}

Products.propTypes = {
  product: PropTypes.object,
  handleClick:PropTypes.func,
}

export default Products
