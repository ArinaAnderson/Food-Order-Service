import React from 'react';
import { Link, useSearchParams } from "react-router-dom";

const Cart = () => {
  return (
    <main className="cart">
      <div className="center">
        <h1 className="title">Cart</h1>
      </div>
    </main>
  );
};
// className="btn btn--orange"
export default Cart;

// Original filters to filter vans by type with use of Link:
/*
  <Link to="?type=simple" className="vans__filter-link">Simple</Link>
  <Link to="?type=rugged" className="vans__filter-link">Rugged</Link>
  <Link to="?type=luxury" className="vans__filter-link">Luxury</Link>
  <Link to="." className="vans__filter-link">Clear</Link>
*/

// onChange={(e) => setFilter(generateSearchParamString('type', 'simple'))}
