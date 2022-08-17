import HomePopularProductsCategoryItem from "../HomePopularProductsCategoryItem/HomePopularProductsCategoryItem";
import HomePopularProductsItem from "../HomePopularProductsItem/HomePopularProductsItem";

const HomePopularProducts = () => {
    const popularProductCategories = [
        {
            title: "Natural"
        },
        {
            title: "Flower"
        },
        {
            title: "Cartridges"
        },
        {
            title: "Concentrates"
        },
        {
            title: "Oil"
        },
        {
            title: "Edible"
        },
    ];

    const popularProducts = [
        {
            star: 4,
            name: "Paket Cream Malam",
            price: 79000,
            discount: 0
        },
        {
            star: 4,
            name: "Paket Produk Deju",
            price: 470000,
            discount: 15
        },
        {
            star: 4,
            name: "Whitening Cream",
            price: 150000,
            discount: 0
        },
        {
            star: 4,
            name: "Acne Serum",
            price: 150000,
            discount: 0
        },
    ];

    return (
        <div className="flex flex-col p-[10px] min-h-screen items-center justify-center container mx-auto">
            <div className="flex gap-[20px]">
                {popularProductCategories.map((item: any, index: number) => {
                    return (
                        <HomePopularProductsCategoryItem item={item} key={index} />
                    );
                })}
            </div>

            <p className="text-4xl font-bold text-[#214842] mt-[100px]">Popular Products</p>
            <p className="text-[#214842] mt-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi adipisci vero iure sit est aliquam delectus.</p>

            <div className="flex gap-[50px] mt-[50px]">
                {popularProducts.map((item: any, index: number) => {
                    return (
                        <HomePopularProductsItem item={item} key={index} />
                    );
                })}
            </div>

            <div className="button-all-products flex rounded-full bg-[#EFC368] justify-center items-center cursor-pointer w-max px-[15px] py-[5px] mt-[50px]">
                <p className="button-shop-now-text text-[#214842]">All Products</p>
            </div>
        </div>
    );
};

export default HomePopularProducts;