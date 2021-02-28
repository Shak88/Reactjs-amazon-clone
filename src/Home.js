import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
        />

        <div className="home__row">
          <Product
            title="The Lean Startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5}
          />
          <Product
            title="Keyboard"
            image="https://m.media-amazon.com/images/I/71534uC+JfL._AC_UL320_.jpg 1x, https://m.media-amazon.com/images/I/71534uC+JfL._AC_UL480_FMwebp_QL65_.jpg 1.5x, https://m.media-amazon.com/images/I/71534uC+JfL._AC_UL640_FMwebp_QL65_.jpg 2x, https://m.media-amazon.com/images/I/71534uC+JfL._AC_UL800_FMwebp_QL65_.jpg 2.5x, https://m.media-amazon.com/images/I/71534uC+JfL._AC_UL960_FMwebp_QL65_.jpg"
            price={14.45}
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home__row">
          <Product />
        </div>
      </div>
      <div className="checkout__right">
        <h2>The subtotal goes here</h2>
      </div>
    </div>
  );
}

export default Home;
