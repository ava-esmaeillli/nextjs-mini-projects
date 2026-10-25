const HeadingSection = ({title = "", action = ""}) => {
    return (
        <section className="w-full flex items-center justify-between text-secondary px-4 sm:px-8 lg:px-16">
            <h2 className="font-bold uppercase text-xl md:text-2xl">{title}</h2>
            <a href="#" className="underline transition hover:text-primary">{action}</a>
        </section>
    );
}

export default HeadingSection;