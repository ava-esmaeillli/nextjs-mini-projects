import Button from "../Button";
import { getImagePath } from "@/lib/imagePath";

const SaleSection = ({title, titr, btnText, img, bgColor}) => {
    return (
        <section className="w-full max-w-[1920px] h-auto lg:max-h-100 md:h-[40vh] lg:h-[60vh] flex flex-col md:flex-row lg:flex-row justify-between gap-8 py-10 px-10 md:py-5 md:px-20 lg:py-20 lg:px-40 mx-auto"
        style={{ backgroundColor: bgColor }}>
            <div className="w-full md:w-[50%] lg:w-[50%] flex flex-col items-start justify-center gap-3 md:gap-5 lg:gap-5">
                <h3 className="flex items-center gap-2 text-text-secondary text-md md:text-xl lg:text-xl"><span className="w-7 h-px bg-text-secondary"></span>{title}</h3>
                <h2 className="text-2xl md:text-3xl lg:text-5xl mb-3 md:mb-5 lg:mb-5">{titr}</h2>
                <Button>{btnText}</Button>
            </div>
            <div className="w-full md:w-[50%] lg:w-[50%] flex items-center justify-end">
                <img src={getImagePath(img)} alt={titr} className="w-full h-full object-contain" />
            </div>
        </section>
    );
}

export default SaleSection;