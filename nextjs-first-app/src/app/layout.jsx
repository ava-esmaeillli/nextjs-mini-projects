import '@/app/globals.css'
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const navItems = [
  { id: 1, title: "خانه", href: "/" },
  { id: 2, title: "فروشگاه", href: "/shop" },
  { id: 3, title: "درباره ما", href: "/about" },
  { id: 4, title: "وبلاگ", href: "/blog" },
  { id: 5, title: "تماس با ما", href: "/contact" },
];

const Rootlayout = ({children}) => {
    return (
        <html lang="fa" dir="rtl">
            <body>
                <Header navItems={navItems} />
                {children}
                <Footer navItems={navItems} />
            </body>
        </html>
    );
}

export default Rootlayout;