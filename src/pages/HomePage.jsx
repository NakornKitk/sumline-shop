import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ProductList from "@/components/home/ProductList";
import SearchBar from "@/components/home/SearchBar";
// import iconShopee from "@/assets/images/shopee-icon.png";
// import iconLine from '@/assets/images/LINE_Brand_icon.png'
// import iconInstagram from '@/assets/images/ig-instagram-icon.png'
// import Logo from "@/assets/images/logo.png";
// import icon from "@/assets/images/thread-ball-icon.svg";

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="md:h-80 py-[20px] flex bg-[url('https://nakornkitk.github.io/sumline-shop/images/bg.jpg')] bg-fixed md:bg-cover mt-[80px] px-[20px] md:px-[50px] 2xl:px-[175px]">
        <div className="w-[50%] pl-[7%] m-auto">
          <p className="text-white text-2xl md:text-4xl font-bold">Looking for your favorite Yarn bag?</p>
          <p className="text-white text-1xl md:text-3xl">Order it at sumline shop...</p>
          <div className="pr-[10px] pt-[10px] flex">
            <a
                href={"https://shopee.co.th/sumline.shop"}
                className="w-10 mr-[10px] hover:scale-110 transform transition duration-2"
              >
                <img src="https://nakornkitk.github.io/sumline-shop/images/shopee-icon.png" alt=""/>
              </a>
              <a
                href={"https://www.instagram.com/sumline.shop"}
                className="w-10 mr-[10px] pt-[5px] hover:scale-110 transform transition duration-2"
              >
                <img src="https://nakornkitk.github.io/sumline-shop/images/ig-instagram-icon.png" alt=""/>
              </a>
              <a
                href={"https://line.me/R/ti/p/@719ojtgk"}
                className="w-10 mr-[10px] pt-[5px] hover:scale-110 transform transition duration-2"
              >
                <img src="https://nakornkitk.github.io/sumline-shop/images/LINE_Brand_icon.png" alt=""/>
              </a>
          </div>
        </div>
        <div className="pt-[20px] md:pt-[0px] min-w-[50%] m-auto">
          <img
            src="https://nakornkitk.github.io/sumline-shop/images/Logo.png"
            alt=""
            className="h-40 md:h-60 mx-auto rounded-full hover:scale-110 transform transition duration-2"
          />
        </div>
      </div>
      <div className="py-4 mb-auto bg-white">
        <SearchBar />
        <div className="flex px-[20px] pt-[40px] px-[auto] px-[20px] md:px-[50px] 2xl:px-[175px]">
          <h5 className="text-3xl md:text-4xl text-black">
            Product List
          </h5>
          <img src="https://nakornkitk.github.io/sumline-shop/images/thread-ball-icon.svg" alt="" className="w-10 pl-[10px]" />
        </div>
        <ProductList />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
