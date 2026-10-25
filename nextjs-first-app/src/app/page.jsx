"use client";
import HeadingSection from "@/components/HeadingSection";
import BenefitsSection from "@/components/Home/BenefitsSection";
import HeroSlider from "@/components/Home/HeroSlider";
import ProductSlider from "@/components/ProductSlider";
import SaleSection from "@/components/SaleSection";

const mobileProducts = [
  {
    id: 1,
    name: "گوشی موبایل اپل مدل iPhone 13 Pro Max",
    price: 210_000_000,
    image: "/image/iphon13promax.jpg",
  },
  {
    id: 2,
    name: "گوشی موبایل اپل مدل iPhone 14 Pro Max",
    price: 175_000_000,
    image: "/image/iphon14promax.jpg",
  },
  {
    id: 3,
    name: "گوشی موبایل اپل مدل iPhone 13",
    price: 140_000_000,
    image: "/image/iphon13.png",
  },
  {
    id: 4,
    name: "گوشی موبایل اپل مدل iPhone 15 Pro Max",
    price: 372_000_000,
    image: "/image/iphon15promax.jpg",
  },
  {
    id: 5,
    name: "گوشی موبایل اپل مدل iPhone 16",
    price: 333_000_000,
    image: "/image/iphon16.jpg",
  },
  {
    id: 6,
    name: "گوشی موبایل اپل مدل iPhone 16 Pro Max",
    price: 505_000_000,
    image: "/image/iphon16promax.jpg",
  },
  {
    id: 7,
    name: "گوشی موبایل اپل مدل iPhone 17 Pro",
    price: 519_000_000,
    image: "/image/iphon17pro.jpg",
  },
  {
    id: 8,
    name: "گوشی موبایل اپل مدل iPhone 17",
    price: 391_000_000,
    image: "/image/iphon17.jpg",
  },
];

const smartWatchesProducts = [
  { id: 1, name: "ساعت با طرح گل پس زمینه", price: 1500000,  image: "/image/product_5.jpg" },
  { id: 2, name: "ساعت گرد ضد آب", price: 2500000, image: "/image/product_6.jpg" },
  { id: 3, name: "ساعت کرمی پنبه ای", price: 1250000,  image: "/image/product_7.webp" },
  { id: 4, name: "ساعت کرمی طلایی زنانه", price: 2350000, image: "/image/product_8.jpg" },
  { id: 5, name: "ساعت کرمی پنبه ای", price: 1250000,  image: "/image/product_7.webp" },
  { id: 6, name: "ساعت کرمی طلایی زنانه", price: 2350000, image: "/image/product_8.jpg" },
];

const HomePage = () => {
    return (
        <>
        <HeroSlider interval={5000} />

        <BenefitsSection />

        <section className="w-full max-w-[1920px] flex flex-col gap-3 mx-auto my-18">
            <HeadingSection title="گوشی‌های موبایل" action="دیدن همه‌ی محصولات" />
            <ProductSlider products={mobileProducts} onAddToCart={(p) => console.log(p)} />
        </section>

        <SaleSection title= "۱۰٪ تخفیف" titr= "جشنواره‌ی سال نو" btnText= "همین الان بخر" img="/image/sale_1.png" bgColor="#EEF2F5" />

        <section className="w-full max-w-[1920px] flex flex-col gap-3 mx-auto my-18">
            <HeadingSection title="ساعت‌های هوشمند" action="دیدن همه‌ی محصولات" />
            <ProductSlider products={smartWatchesProducts} onAddToCart={(p) => console.log(p)} />
        </section>
        </>
    );
}

export default HomePage;