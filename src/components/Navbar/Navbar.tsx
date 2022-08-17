import NavbarCart from "../NavbarCart/NavbarCart";
import NavbarFavorite from "../NavbarFavorite/NavbarFavorite";
import NavbarNavigation from "../NavbarNavigation/NavbarNavigation";
import NavbarSearchbar from "../NavbarSearchbar/NavbarSearchbar";

const Navbar = () => {
    const navbarNavigation = [
        {
            title: "Home",
            href: "",
        },
        {
            title: "Products",
            href: "",
        },
        {
            title: "News",
            href: "",
        },
        {
            title: "Pages",
            href: "",
        },
    ];

    return (
        <div className="fixed top-0 left-0 right-0 flex w-full bg-[#FAFAF5] z-50">
            <div className="flex flex-row h-[85px] mx-auto justify-between items-center py-[25px] px-[10px] box-border container mx-auto">
                <h1>LOGO</h1>
                <NavbarNavigation items={navbarNavigation} />
                <NavbarSearchbar />
                <div className="flex gap-[20px]">
                    <NavbarFavorite />
                    <NavbarCart />
                </div>
            </div>
        </div>
    );
};

export default Navbar;