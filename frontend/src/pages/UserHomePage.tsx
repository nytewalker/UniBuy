import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductCard";

export default function UserHomePage () {
    return (
        <div>
            <Header />
            <Banner />
            <ProductGrid />
            <Footer />
        </div>
    )
}