import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

const NavbarCart = () => {
    return (
        <div className="flex w-[35px] h-[35px] rounded-full bg-[#EFC368] p-[5px] justify-center items-center cursor-pointer">
            <FontAwesomeIcon icon={faBagShopping} color={"#214842"} />
        </div>
    );
};

export default NavbarCart;