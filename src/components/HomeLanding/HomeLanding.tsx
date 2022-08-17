import { faBank, faDollar, faHeadphones, faShippingFast } from "@fortawesome/free-solid-svg-icons";
import { IMG_LANDING } from "../../assets";
import HomeLandingFeature from "./Feature";

const HomeLanding = () => {
    const features = [
        {
            title: "Free Shipping & Returns",
            icon: faShippingFast,
        },
        {
            title: "Money Back Guarantee",
            icon: faDollar,
        },
        {
            title: "100% Secure Payment",
            icon: faBank,
        },
        {
            title: "Online SUpport",
            icon: faHeadphones,
        },
    ]

    return (
        <div className="flex p-[10px] min-h-screen items-center container mx-auto pt-[85px] box-border">
            <div className="flex flex-col gap-[20px] w-[50%]">
                <h1 className="text-6xl font-bold">Deju Skincare <br /> Cantik & Halal</h1>
                <p>Discover a diverse range of food, concentrates, CBD oils, baked buns and dried flowers - available in indica, sativa and hybrid varieties with varying CBD and THC potencies. Cannabis accessories can also be purchased.</p>
                <div className="button-shop-now flex rounded-full bg-[#EFC368] justify-center items-center cursor-pointer w-max px-[15px] py-[5px]">
                    <p className="button-shop-now-text text-[#214842]">Show Now</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 w-max gap-[10px] mt-[20px]">
                    <HomeLandingFeature items={features} />
                </div>
            </div>
            <img src={IMG_LANDING} alt="landing" className="w-[50%]" />
        </div>
    );
};

export default HomeLanding;