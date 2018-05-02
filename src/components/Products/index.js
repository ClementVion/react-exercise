import React, { Component } from 'react'
import './index.css'
import HoverCard from '../HoverCard'

const products = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png'];

function ProductsList(props) {
  const productsList = props.products.map((product, index) =>
    <li className="Products__Item">
      <div className="Products__HoverCard">
        <HoverCard />
      </div>
      <img src={"img/jeans/" + product} alt={product} key={index} />
    </li>
  );
  return (
    <ul className="Products__List"> {productsList} </ul>
  );
}

class Products extends Component {

  render() {
    return(
      <section className="Products">

        <ProductsList products={products} />

      </section>
    )
  }

}

export default Products
