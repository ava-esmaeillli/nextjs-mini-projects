"use client";
import HeadingSection from "@/components/HeadingSection";
import BenefitsSection from "@/components/Home/BenefitsSection";
import HeroSlider from "@/components/Home/HeroSlider";
import ProductSlider from "@/components/ProductSlider";
import SaleSection from "@/components/SaleSection";

const mobileProducts = [
  { id: 1, name: "IPHONE 10", price: 980,  image: "/image/product_1.jpg" },
  { id: 2, name: "IPHONE 11", price: 1100, image: "/image/product_2.jpg" },
  { id: 3, name: "IPHONE 8", price: 880,  image: "/image/product_3.jpg" },
  { id: 4, name: "IPHONE 13", price: 2100, image: "/image/product_4.jpg" },
  { id: 5, name: "IPHONE 10", price: 980,  image: "/image/product_1.jpg" },
  { id: 6, name: "IPHONE 11", price: 1100, image: "/image/product_2.jpg" },
  { id: 7, name: "IPHONE 8", price: 880,  image: "/image/product_3.jpg" },
  { id: 8, name: "IPHONE 13", price: 2100, image: "/image/product_4.jpg" },
];

const smartWatchesProducts = [
  { id: 1, name: "PINK WATCH", price: 870,  image: "/image/product_5.jpg" },
  { id: 2, name: "HEAVY WATCH", price: 680, image: "/image/product_6.jpg" },
  { id: 3, name: "SPOTTED WATCH", price: 750,  image: "/image/product_7.webp" },
  { id: 4, name: "BLACK WATCH", price: 650, image: "/image/product_8.jpg" },
  { id: 5, name: "PINK WATCH", price: 870,  image: "/image/product_5.jpg" },
  { id: 6, name: "HEAVY WATCH", price: 680, image: "/image/product_6.jpg" },
  { id: 7, name: "SPOTTED WATCH", price: 750,  image: "/image/product_7.webp" },
  { id: 8, name: "BLACK WATCH", price: 650, image: "/image/product_8.jpg" },
];

const HomePage = () => {
    return (
        <>
        <HeroSlider interval={5000} />

        <BenefitsSection />

        <section className="w-full max-w-[1920px] flex flex-col gap-3 mx-auto my-18">
            <HeadingSection title="MOBILE PRODUCTS" action="GO TO SHOP" />
            <ProductSlider products={mobileProducts} onAddToCart={(p) => console.log(p)} />
        </section>

        <SaleSection title= "10% OFF" titr= "NEW YEAR SALE" btnText= "SHOP NOW" img="/image/sale_1.png" bgColor="#EEF2F5" />
        
        <section className="w-full max-w-[1920px] flex flex-col gap-3 mx-auto my-18">
            <HeadingSection title="SMART WATCHES" action="GO TO SHOP" />
            <ProductSlider products={smartWatchesProducts} onAddToCart={(p) => console.log(p)} />
        </section>
        </>
    );
}

export default HomePage;