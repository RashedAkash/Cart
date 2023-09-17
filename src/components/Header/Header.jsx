import React from 'react'
import PropTypes from 'prop-types'
import { FaBeer, FaHome, FaShopify } from 'react-icons/fa';

const Header = ({ carts,totalCost,shipping,taxes,subTotal }) => {
  console.log(carts);
  return (
    <div>
      <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">AkashShop</a>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost bg-gray-400  btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span className="badge badge-sm indicator-item">{carts.length }</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
                <span className="font-bold text-lg">{carts.length} Items</span>
                <hr />
                <ol className=' list-decimal p-3'>
                  {
                    carts.map(cart => (
                       <li className='mb-2' key={cart.name}>
                      {cart.name}
                    </li>
                    ))
                  }
                </ol>
                <hr />
                <span className="text-info text-xl">Total Cost: $ {totalCost} </span>
                <hr />
                <span className="text-info text-xl">Tax: $ {taxes} </span>
                <hr />
                <span className="text-info text-xl">Shipping :$ {shipping} </span>
                <hr />
                <span className="text-info text-xl">Sub Total :$ {subTotal} </span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar bg-gray-400 ml-4">
        <FaHome />
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    </div>
  )
}

Header.propTypes = {
  carts: PropTypes.array,
  totalCost: PropTypes.any,
  shipping: PropTypes.number,
  taxes: PropTypes.number,
  subTotal:PropTypes.number
}

export default Header
