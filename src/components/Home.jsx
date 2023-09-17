import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Header from './Header/Header'
import Products from './products/Products'

const Home = props => {
  
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [subTotal, setSubtotal] = useState(0);
  const handleClick = (product) => {

  // totalCost
    let totalCost = product.price;
    carts.forEach(cart => {
      totalCost = totalCost + cart.price;
    }
    );

    // tax
    const tax = totalCost * 10 / 100;
    const taxes = tax.toFixed(2);



    //shipping
    let shipping = product.shipping;
    carts.forEach(cart => {
      shipping = shipping + cart.shipping;
    });

    //subtotal

    const subTotal = totalCost - tax + shipping;
    const subTotals = subTotal.toFixed(2);

    setSubtotal(subTotals);
    setTaxes(taxes);
    setShipping(shipping);
    setTotalCost(totalCost);
      setCarts([...carts, product]);
  };
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
    .then(data=>setProducts(data))
  },[])
  return (
    <div>
      <Header carts={carts} totalCost={totalCost} shipping={shipping} taxes={taxes} subTotal={subTotal} />
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-12'>
         {
        products.map(product => <Products product={product} handleClick={handleClick} key={product.key} />)
      }
     </div>
    </div>
  )
}

Home.propTypes = {

}

export default Home
