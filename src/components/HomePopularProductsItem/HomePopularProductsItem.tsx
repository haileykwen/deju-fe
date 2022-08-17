import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface HomePopularProductsItemProps {
    item: any
}

const HomePopularProductsItem = (props: HomePopularProductsItemProps) => {
    return (
        <div className="flex flex-col gap-[10px] w-[185px]">
            <div className="relative h-[155px] w-[185px] rounded bg-[#D8D8D8]">
                {props.item.discount > 0 &&
                    <div className="absolute top-[15px] right-[15px] flex w-[35px] h-[35px] rounded-full bg-[#258F67] p-[5px] justify-center items-center cursor-pointer">
                        <p className="text-white text-[10px]">{`-${props.item.discount}%`}</p>
                    </div>
                }
            </div>
            
            {props.item.star === 1 &&
                <div className="flex gap-[10px]">
                    <FontAwesomeIcon icon={faStar} color={"#EFC368"} />
                </div>
            }

            {props.item.star === 2 &&
                <div className="flex gap-[10px]">
                    <FontAwesomeIcon icon={faStar} color={"#EFC368"} />
                    <FontAwesomeIcon icon={faStar} color={"#EFC368"} />
                </div>
            }

            {props.item.star === 3 &&
                <div className="flex gap-[10px]">
                    <FontAwesomeIcon icon={faStar} color={"#EFC368"} />
                    <FontAwesomeIcon icon={faStar} color={"#EFC368"} />
                    <FontAwesomeIcon icon={faStar} color={"#EFC368"} />
                </div>
            }

            {props.item.star === 4 &&
                <div className="flex gap-[10px]">
                    <FontAwesomeIcon icon={faStar} color={"#EFC368"} />
                    <FontAwesomeIcon icon={faStar} color={"#EFC368"} />
                    <FontAwesomeIcon icon={faStar} color={"#EFC368"} />
                    <FontAwesomeIcon icon={faStar} color={"#EFC368"} />
                </div>
            }

            {props.item.star === 5 &&
                <div className="flex gap-[10px]">
                    <FontAwesomeIcon icon={faStar} color={"#EFC368"} />
                    <FontAwesomeIcon icon={faStar} color={"#EFC368"} />
                    <FontAwesomeIcon icon={faStar} color={"#EFC368"} />
                    <FontAwesomeIcon icon={faStar} color={"#EFC368"} />
                    <FontAwesomeIcon icon={faStar} color={"#EFC368"} />
                </div>
            }

            <p className="font-semibold">{props.item.name}</p>
            {props.item.discount > 0 &&
                <div className="flex flex-col gap-[10px]">
                    <p className="font-semibold text-[#C7C7C7] line-through">{`Rp. ${props.item.price.toLocaleString()}`}</p>
                    <p className="font-semibold">{`Rp. ${(props.item.price - (props.item.price * props.item.discount / 100)).toLocaleString()}`}</p>
                </div>
            }
            {props.item.discount === 0 && <p className="font-semibold">{`Rp. ${props.item.price.toLocaleString()}`}</p>}
        </div>
    );
};

export default HomePopularProductsItem;