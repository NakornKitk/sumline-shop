import CartItem from './CartItem'
import Calculatebar from './Calculatebar'
import { Link } from "react-router-dom";
// import iconCart from "@/assets/images/shopping_cart.png";

function Cart() {
  return (
    <div className="mb-auto mt-[80px]">
      <div className="flex justify-between py-[20px] px-[20px] md:px-[50px] 2xl:px-[175px] bg-[url('https://nakornkitk.github.io/sumline-shop/images/bg.jpg')] bg-fixed md:bg-cover">
          <Link
            to={"/sumline-shop/"}
            className="bg-zinc-200 px-[16px] py-[7px] rounded-[16px] font-semibold hover:scale-105 transform transition duration-2"
          >
            Go to Home page
          </Link>
      </div>
      <div className="flex my-[20px] px-[20px] md:px-[50px] 2xl:px-[175px]">
        <h5 className="text-4xl text-black pr-[10px]">
          My Cart
        </h5>
        <img src='https://nakornkitk.github.io/sumline-shop/images/shopping_cart.png' alt="" className="w-10" />
      </div>
      <div className="py-[20px] px-[20px] md:px-[50px] 2xl:px-[175px] pt-[10px] md:flex md:space-x-[10px] justify-items-center ">
        <CartItem />
        <Calculatebar />
      </div>
  </div>
  )
}

export default Cart