import { faCheck, faLocationPin, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HomeTestimoniItem from "../HomeTestimoniItem/HomeTestimoniItem";

const HomeTestimoni = () => {
    const dummyTestimoni = [
        {
            star: 5,
            testimoni: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, dolore sed. Cupiditate, architecto. Nihil consequuntur inventore illo placeat voluptate odio quasi, libero a quaerat?",
            profileName: "Nafla",
        },
        {
            star: 5,
            testimoni: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, dolore sed. Cupiditate, architecto. Nihil consequuntur inventore illo placeat voluptate odio quasi, libero a quaerat?",
            profileName: "Shasqi",
        },
        {
            star: 5,
            testimoni: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, dolore sed. Cupiditate, architecto. Nihil consequuntur inventore illo placeat voluptate odio quasi, libero a quaerat?",
            profileName: "Faradiba",
        },
    ]

    return (
        <div className="flex flex-col gap-[60px] p-[10px] min-h-screen items-center container mx-auto pt-[85px] box-border">
            <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col text-center">
                    <p className="text-4xl font-bold text-[#214842]">Testimoni</p>
                    <p className="text-[#214842]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi adipisci vero iure sit est aliquam delectus.</p>
                </div>
                <div className="grid grid-cols-3 gap-[20px]">
                    {dummyTestimoni.map((testimoni: any, index: number) => {
                        return (
                            <HomeTestimoniItem
                                key={index}
                                star={testimoni.star}
                                testimoni={testimoni.testimoni}
                                profileName={testimoni.profileName}
                            />
                        )
                    })}
                </div>
            </div>

            <div className="flex flex-col w-full justify-center items-center bg-black rounded p-[30px] gap-[30px]">
                <div className="flex flex-col w-full justify-center items-center gap-[15px]">
                    <p className="text-4xl font-bold text-white text-center">Sign Up for Our Newsletter</p>
                    <p className="text-white text-center max-w-[600px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ullam repudiandae asperiores reiciendis. Rerum, aliquid sint!</p>
                </div>

                <div className="flex h-[35px]">
                    <input type="text" placeholder="Email" className="border rounded-full bg-white pl-[15px] pr-[90px] text-[12px] outline-1 outline-[#EFC368]" />
                    <div className="flex rounded-full bg-[#EFC368] px-[20px] justify-center items-center cursor-pointer ml-[-80.34px]">
                        <p className="text-[#214842]">Send</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-[20px] justify-center items-center">
                <div className="flex flex-col w-full justify-center items-center gap-[15px]">
                    <p className="text-4xl font-bold text-center">Have any Questions?</p>
                    <p className="text-center max-w-[600px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ullam repudiandae asperiores reiciendis. Rerum, aliquid sint!</p>
                </div>

                <div className="grid grid-cols-3 gap-[15px]">
                    <div className="flex flex-col gap-[15px] rounded p-[20px]" style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                        <p className="text-lg font-semibold">Our Office Location</p>
                        <div className="flex gap-[15px] items-center">
                            <FontAwesomeIcon icon={faLocationPin} />
                            <p>JL.Camanraya No. 50E, Jatibening Pondok Gede, Bekasi, 17412</p>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, molestiae. Obcaecati neque magni voluptates officia iure.</p>
                    </div>

                    <div className="flex flex-col gap-[15px] rounded p-[20px] bg-black text-white" style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                        <p className="text-lg font-semibold">How Can We Help?</p>
                        <div className="flex gap-[15px] items-center">
                            <FontAwesomeIcon icon={faCheck} color="#EFC368" />
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div className="flex gap-[15px] items-center">
                            <FontAwesomeIcon icon={faCheck} color="#EFC368" />
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div className="flex gap-[15px] items-center">
                            <FontAwesomeIcon icon={faCheck} color="#EFC368" />
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div className="flex gap-[15px] items-center">
                            <FontAwesomeIcon icon={faCheck} color="#EFC368" />
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[15px] rounded p-[20px]" style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                        <p className="text-lg font-semibold">Our Phone</p>
                        <div className="flex gap-[15px] items-center">
                            <FontAwesomeIcon icon={faPhone} />
                            <div>
                                <p>021 - 051325254</p>
                                <p>0812 1234 5678</p>
                            </div>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, molestiae. Obcaecati neque magni voluptates officia iure.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeTestimoni;