import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface HomeTestimoniItemProps {
    profilePic ?: string,
    star?: number,
    testimoni?: string,
    profileName?: string,
};

const HomeTestimoniItem = (props: HomeTestimoniItemProps) => {
    return (
        <div className="flex flex-col gap-[15px] justify-center items-center p-[20px] rounded" style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
            <div className="h-[50px] w-[50px] rounded-full bg-[#C6C6C6]"></div>
            
            {props.star === 1 &&
                <div className="flex gap-[10px]">
                    <FontAwesomeIcon icon={faStar} color={"#EFC368"} />
                </div>
            }
            {props.star === 2 &&
                <div className="flex gap-[10px]">
                    <FontAwesomeIcon icon={faStar} color={"#EFC368"} />
                    <FontAwesomeIcon icon={faStar} color={"#EFC368"} />
                </div>
            }
            {props.star === 3 &&
                <div className="flex gap-[10px]">
                    <FontAwesomeIcon icon={faStar} color={"#EFC368"} />
                    <FontAwesomeIcon icon={faStar} color={"#EFC368"} />
                    <FontAwesomeIcon icon={faStar} color={"#EFC368"} />
                </div>
            }
            {props.star === 4 &&
                <div className="flex gap-[10px]">
                    <FontAwesomeIcon icon={faStar} color={"#EFC368"} />
                    <FontAwesomeIcon icon={faStar} color={"#EFC368"} />
                    <FontAwesomeIcon icon={faStar} color={"#EFC368"} />
                    <FontAwesomeIcon icon={faStar} color={"#EFC368"} />
                </div>
            }
            {props.star === 5 &&
                <div className="flex gap-[10px]">
                    <FontAwesomeIcon icon={faStar} color={"#EFC368"} />
                    <FontAwesomeIcon icon={faStar} color={"#EFC368"} />
                    <FontAwesomeIcon icon={faStar} color={"#EFC368"} />
                    <FontAwesomeIcon icon={faStar} color={"#EFC368"} />
                    <FontAwesomeIcon icon={faStar} color={"#EFC368"} />
                </div>
            }

            <p className="text-center">{props.testimoni}</p>
            <p className="font-semibold">{props.profileName}</p>
        </div>
    );
};

export default HomeTestimoniItem;