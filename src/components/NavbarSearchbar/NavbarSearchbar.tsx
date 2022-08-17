import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarSearchbar = () => {
    return (
        <div className="flex h-[35px]">
            <input type="text" placeholder="Search ..." className="border rounded-full bg-white pl-[15px] pr-[50px] text-[12px] outline-1 outline-[#EFC368]" />
            <div className="flex w-[35px] h-[35px] rounded-full bg-[#EFC368] p-[5px] justify-center items-center cursor-pointer ml-[-35px]">
                <FontAwesomeIcon icon={faSearch} color={"#214842"} />
            </div>
        </div>
    );
};

export default NavbarSearchbar;