interface HomePopularProductsCategoryItemProps {
    item: any
};

const HomePopularProductsCategoryItem = (props: HomePopularProductsCategoryItemProps) => {
    return (
        <div className="flex flex-col gap-[10px] justify-center items-center">
            <div className="h-[115px] w-[115px] bg-[#D8D8D8] h-[115px] rounded"></div>
            <p>{props.item.title}</p>
        </div>
    );
}

export default HomePopularProductsCategoryItem;