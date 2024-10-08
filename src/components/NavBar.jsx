import React from "react";
import { Link } from "react-router-dom";
import useStore from "@/store/store";
// import iconCart from "@/assets/images/shopping_cart.png";
// import Logo from "@/assets/images/logo.png";

function NavBar() {
  const { cartItems, data } = useStore();
  const cartQuantity = [];
  const wishQuantity = [];

  cartItems.map((item) => {
    cartQuantity.push(item.quantity);
  });

  const totalcartQuantity = cartQuantity.reduce(
    (partialSum, a) => partialSum + a,
    0
  );

  data.filter((item) => {
    if (item.wishstatus === true) {
        return item;}
        }).map((item) => {
          return wishQuantity.push(item.id)
        })

  const totalwishQuantity = wishQuantity.reduce(
    (partialSum) => partialSum + 1,
          0
    );

  
  return (
    <nav className="bg-[#7C9097] fixed w-full z-20 top-0 left-0 px-[20px] md:px-[50px] 2xl:px-[175px]">
      <div className="flex flex-wrap items-center justify-between mx-auto py-4">
        <Link
          to="/sumline-shop/"
          className="text-2xl font-semibold text-white flex"
        >
          <img src="https://nakornkitk.github.io/sumline-shop/images/Logo.png" alt="" className="w-16 pr-[10px] hover:scale-110 transform transition duration-2"/>
          <p className="my-auto hover:underline">Sumline Shop</p>
        </Link>
        <div className="flex">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative hover:scale-110 transform transition duration-2 mr-[10px]">
          <Link to="/sumline-shop/wish" className="text-black">
          <span className="material-symbols-outlined flex">
              favorite
            </span>
            <span className="absolute top-2/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center">
              {totalwishQuantity}
            </span>
            </Link>
          </div>
          
          <div className="w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative hover:scale-110 transform transition duration-2">
            <Link to="/sumline-shop/cart" className="text-white">
              <img src="https://nakornkitk.github.io/sumline-shop/images/shopping_cart.png" alt="" className="w-6" />
              <span className="absolute top-2/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center">
                {totalcartQuantity}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
