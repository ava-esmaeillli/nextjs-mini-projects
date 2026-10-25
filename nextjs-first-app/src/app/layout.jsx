import '@/app/globals.css'
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const navItems = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "Shop", href: "/shop" },
  { id: 3, title: "About", href: "/about" },
  { id: 4, title: "Blog", href: "/blog" },
  { id: 5, title: "Contact", href: "/contact" },
];

const Rootlayout = ({children}) => {
    return (
        <html lang="en">
            <body>
                <Header navItems={navItems} />
                {children}
                <Footer navItems={navItems} />
            </body>
        </html>
    );
}

export default Rootlayout;