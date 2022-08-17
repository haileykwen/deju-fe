import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface HomeLandingFeatureProps {
    items: Array<any>
};

const HomeLandingFeature = (props: HomeLandingFeatureProps) => {
    return (
        <>
            {props.items.map((item: any, index: number) => {
                return (
                    <div className="flex items-center gap-[10px]" key={index}>
                        <div className="flex bg-white p-[5px] rounded-full w-[35px] h-[35px] items-center justify-center drop-shadow">
                            <FontAwesomeIcon icon={item.icon} color={"#299169"} />
                        </div>
                        <p>{item.title}</p>
                    </div>
                );
            })}
        </>
    );
};

export default HomeLandingFeature;