import { IMG_FLASH_SALE } from "../../assets";

const HomeFlashSale = () => {
    const dummyFlashSaleItem = {
        title: "Deju Facial Serum: Anti-Aging + Daily Moisturizer",
        subtitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa doloremque eveniet nesciunt distinctio ex iure saepe aliquam. Suscipit dolore alias eos rem numquam necessitatibus.",
        realPrice: 350000,
        flashPrice: 250000,
        countdown: 25,
        banner: IMG_FLASH_SALE,
    }

    return (
        <div className="flex p-[10px] min-h-screen items-center container mx-auto pt-[85px] box-border">
            <div className="flex flex-col gap-[20px] w-[40%]">
                <div className="flex flex-col gap-[10px]">
                    <p className="text-4xl font-bold">{dummyFlashSaleItem.title}</p>
                    <p>{dummyFlashSaleItem.subtitle}</p>
                </div>
                <div className="flex gap-[10px]">
                    <p className="text-4xl font-semibold text-[#C7C7C7] line-through">Rp. {dummyFlashSaleItem.realPrice.toLocaleString()}</p>
                    <p className="text-4xl font-semibold">Rp. {dummyFlashSaleItem.flashPrice.toLocaleString()}</p>
                </div>
                <div className="flex gap-[10px]">
                    <div className="flex flex-col p-[10px] justify-center items-center w-[80px] h-[80px] rounded border-2 border-[#389974]">
                        <p className="text-3xl font-semibold">{dummyFlashSaleItem.countdown}</p>
                        <p>Days</p>
                    </div>
                    <div className="flex flex-col p-[10px] justify-center items-center w-[80px] h-[80px] rounded border-2 border-[#389974]">
                        <p className="text-3xl font-semibold">0</p>
                        <p>Hours</p>
                    </div>
                    <div className="flex flex-col p-[10px] justify-center items-center w-[80px] h-[80px] rounded border-2 border-[#389974]">
                        <p className="text-3xl font-semibold">0</p>
                        <p>Minutes</p>
                    </div>
                    <div className="flex flex-col p-[10px] justify-center items-center w-[80px] h-[80px] rounded border-2 border-[#389974]">
                        <p className="text-3xl font-semibold">0</p>
                        <p>Seconds</p>
                    </div>
                </div>
                <div className="button-shop-now flex rounded-full bg-[#EFC368] justify-center items-center cursor-pointer w-max px-[15px] py-[5px]">
                    <p className="button-shop-now-text text-[#214842]">Show Now</p>
                </div>
            </div>

            <div className="w-[60%]">
                <img className="w-full" src={dummyFlashSaleItem.banner} alt="image-flash-sale" />
            </div>
        </div>
    );
};

export default HomeFlashSale;