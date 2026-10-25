import { LuShoppingCart, LuAward, LuTag, LuShieldCheck } from "react-icons/lu";

const Benefits = [
    {id: 1, title: "FREE DELIVERY", text: "Consectetur adipi elit lorem ipsum dolor sit amet.", icon: LuShoppingCart},
    {id: 2, title: "QUALITY GUARANTEE", text: "Dolor sit amet orem ipsu mcons ectetur adipi elit.", icon: LuAward},
    {id: 3, title: "DAILY OFFERS", text: "Amet consectetur adipi elit loreme ipsum dolor sit.", icon: LuTag},
    {id: 4, title: "100% SECURE PAYMENT", text: "Rem Lopsum dolor sit amet, consectetur adipi elit.", icon: LuShieldCheck},
]

const BenefitsSection = () => {
    return (
        <section className="w-full max-w-[1920px] lg:flex lg:flex-row grid grid-cols-2 justify-center gap-5 lg:gap-3 md:gap-10 px-4 py-12 sm:px-8 lg:px-16 lg:py-22 mx-auto">
            {Benefits.map((item) => {
                const Icon = item.icon;

                return(
                    <div className="flex flex-col lg:flex-row gap-3" key={item.id}>
                        <Icon size={32} className="text-primary" />
                        <div className="flex flex-col gap-1">
                            <h3 className="text-black font-bold text-md md:text-lg">{item.title}</h3>
                            <p className="text-md text-text-secondary">{item.text}</p>
                        </div>
                    </div>
                )
            })}
        </section>
    );
}

export default BenefitsSection;