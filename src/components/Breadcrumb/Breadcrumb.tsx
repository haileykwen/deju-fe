interface BreadcrumbProps {
    text: string,
};

const Breadcrumb = (props: BreadcrumbProps) => {
    return (
        <section className='flex p-10 flex-col box-border'>
            <div className="flex container mx-auto box-border">
                <p className="text-base text-black">{props.text}</p>
            </div>
        </section>
    );
};

export default Breadcrumb;