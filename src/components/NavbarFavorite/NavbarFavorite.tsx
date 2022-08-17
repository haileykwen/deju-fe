import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const NavbarFavorite = () => {
    return (
        <div className="flex w-[35px] h-[35px] rounded-full bg-[#EFC368] p-[5px] justify-center items-center cursor-pointer">
            <FontAwesomeIcon icon={faHeart} color={"#214842"} />
        </div>
    );
};

export default NavbarFavorite;