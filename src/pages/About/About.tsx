import { faArrowCircleRight, faBank, faCalendar, faClock, faComment, faDollar, faHeadphones, faLocationPin, faPhone, faShippingFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react'
import { Breadcrumb, Navbar } from '../../components';

export default class About extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="mt-[85px] w-full bg-[#C6C6C6] p-[60px]">
                    <p className="text-4xl text-black text-center font-bold">About</p>
                    <div className="mt-2 max-w-[500px] mx-auto">
                        <p className="text-base text-black text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ab deserunt numquam debitis!</p>
                    </div>
                </div>

                <Breadcrumb text="Home / About" />

                <div className="flex p-[10px] items-center container mx-auto box-border">
                    <div className="flex flex-col gap-[50px]">
                        <div className="grid grid-cols-2 gap-[20px]">
                            <div>
                                <p className="text-2xl text-black font-bold">Kami adalah Deju Skincare, dengan berbagai macam produk perawatan kulit dan wajah dengan bahan alami dan tentunya halal.</p>
                                <p className="text-base text-black mt-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex corporis incidunt necessitatibus amet facilis qui omnis inventore maxime fugit reiciendis at sit odio deleniti dolorum, temporibus sed repellendus eveniet rem eaque unde similique nisi enim.</p>
                            </div>
                            <div className="flex rounded bg-[#D8D8D8]"></div>
                        </div>

                        <div className="grid grid-cols-4 gap-[20px]">
                            <div>
                                <p className="text-4xl text-black font-bold">180+</p>
                                <p className="text-base text-black mt-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div>
                                <p className="text-4xl text-black font-bold">3X</p>
                                <p className="text-base text-black mt-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div>
                                <p className="text-4xl text-black font-bold">100%</p>
                                <p className="text-base text-black mt-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div>
                                <p className="text-4xl text-black font-bold">11K</p>
                                <p className="text-base text-black mt-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-col gap-[10px] mt-[100px]">
                                <p className="text-center text-2xl font-semibold">How We Works</p>
                                <p className="text-center text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. In sequi quos magnam officia quidem exercitationem odio magni quam?</p>
                            </div>
                            <div className="grid grid-cols-4 gap-[20px] mt-[20px]">
                                <div>
                                    <div className="flex bg-white p-[5px] rounded-full w-[75px] h-[75px] items-center justify-center drop-shadow mx-auto mb-[20px]">
                                        <FontAwesomeIcon icon={faShippingFast} color={"#299169"} size="2x" />
                                    </div>
                                    <p className="text-1xl text-center font-semibold">Free Shipping & Returns</p>
                                    <p className="text-base text-center mt-[10px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi alias quasi maiores officiis est nam hic nemo ad.</p>
                                </div>
                                <div>
                                    <div className="flex bg-white p-[5px] rounded-full w-[75px] h-[75px] items-center justify-center drop-shadow mx-auto mb-[20px]">
                                        <FontAwesomeIcon icon={faDollar} color={"#299169"} size="2x" />
                                    </div>
                                    <p className="text-1xl text-center font-semibold">Money Back Guarantee</p>
                                    <p className="text-base text-center mt-[10px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi alias quasi maiores officiis est nam hic nemo ad.</p>
                                </div>
                                <div>
                                    <div className="flex bg-white p-[5px] rounded-full w-[75px] h-[75px] items-center justify-center drop-shadow mx-auto mb-[20px]">
                                        <FontAwesomeIcon icon={faBank} color={"#299169"} size="2x" />
                                    </div>
                                    <p className="text-1xl text-center font-semibold">Online Support</p>
                                    <p className="text-base text-center mt-[10px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi alias quasi maiores officiis est nam hic nemo ad.</p>
                                </div>
                                <div>
                                    <div className="flex bg-white p-[5px] rounded-full w-[75px] h-[75px] items-center justify-center drop-shadow mx-auto mb-[20px]">
                                        <FontAwesomeIcon icon={faHeadphones} color={"#299169"} size="2x" />
                                    </div>
                                    <p className="text-1xl text-center font-semibold">100% Secure Payment</p>
                                    <p className="text-base text-center mt-[10px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi alias quasi maiores officiis est nam hic nemo ad.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="mt-[100px] grid grid-cols-2 gap-[20px]">
                                <div className="grid grid-cols-2 gap-[20px]">
                                    <div className="flex flex-col min-h-[369px] justify-center">
                                        <p className="text-2xl font-semibold">Deju Skincare Product for Sale Online in 2021</p>
                                        <p className="text-base mt-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. In sequi quos magnam officia quidem exercitationem odio magni quam?</p>
                                        <div className="w-max flex rounded-full bg-[#EFC368] justify-center items-center cursor-pointer px-[15px] py-[5px] mt-[20px]">
                                            <p className="text-[#214842]">All Products</p>
                                        </div>
                                    </div>
                                    <div className="flex min-h-[369px] items-end justify-between rounded bg-[#D8D8D8] p-[20px]">
                                        <div>
                                            <p className="text-xl font-semibold">PM Happy Hour</p>
                                            <p className="text-base">Sale up to 5%</p>
                                        </div>
                                        <div>
                                            <p className="text-base font-semibold border-b-2 border-[#299169]">Shop Now</p>
                                        </div>
                                    </div>
                                    <div className="flex min-h-[369px] items-end justify-between rounded bg-[#D8D8D8] p-[20px]">
                                        <div>
                                            <p className="text-xl font-semibold">AM Happy Hour</p>
                                            <p className="text-base">Sale up to 15%</p>
                                        </div>
                                        <div>
                                            <p className="text-base font-semibold border-b-2 border-[#299169]">Shop Now</p>
                                        </div>
                                    </div>
                                    <div className="flex min-h-[369px] items-end justify-between rounded bg-[#D8D8D8] p-[20px]">
                                        <div>
                                            <p className="text-xl font-semibold">Medical Special</p>
                                            <p className="text-base">Sale up to 20%</p>
                                        </div>
                                        <div>
                                            <p className="text-base font-semibold border-b-2 border-[#299169]">Shop Now</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative flex flex-col justify-center rounded bg-[#D8D8D8] p-[20px]">
                                    <div>
                                        <p className="text-base">From shampoos to fase masks</p>
                                        <p className="text-xl font-semibold mt-[10px]">Weekly Special CBD Products</p>
                                    </div>
                                    <div>
                                        <p className="text-base mt-[20px] font-semibold border-b-2 border-[#299169] w-max">Shop Now</p>
                                    </div>
                                    <div className="absolute top-[15px] left-[15px] flex w-[75px] h-[75px] rounded-full bg-[#258F67] p-[5px] justify-center items-center cursor-pointer">
                                        <p className="text-white text-xl">30%</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-[100px] flex flex-col w-full justify-center items-center bg-black rounded p-[30px] gap-[30px]">
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
                    </div>
                </div>

                <section className='py-[100px] px-[10px] flex flex-col bg-[#FAFAF5] box-border'>
                    <div className="grid grid-cols-2 p-[10px] items-center container mx-auto box-border">
                        <div></div>
                        <div>
                            <p className="text-2xl font-semibold mt-[10px]">How to Buy Products Online</p>
                            <p className="text-base mt-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos mollitia eum quo ducimus distinctio quasi? Fugiat, reiciendis tempora?</p>
                            <div className="flex flex-col mt-[20px]">
                                <div className="flex items-center gap-[20px]">
                                    <div className="flex items-center justify-center w-[75px] h-[50px] bg-[#EFC368] rounded-full">
                                        <p className='text-xl'>1</p>
                                    </div>
                                    <div>
                                        <p className="text-xl font-semibold mt-[10px]">Signup & Get Verified</p>
                                        <p className="text-base mt-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos mollitia eum quo ducimus distinctio quasi? Fugiat, reiciendis tempora?</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-[20px]">
                                    <div className="flex items-center justify-center w-[75px] h-[50px] bg-[#EFC368] rounded-full">
                                        <p className='text-xl'>2</p>
                                    </div>
                                    <div>
                                        <p className="text-xl font-semibold mt-[10px]">Order Online</p>
                                        <p className="text-base mt-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos mollitia eum quo ducimus distinctio quasi? Fugiat, reiciendis tempora?</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-[20px]">
                                    <div className="flex items-center justify-center w-[75px] h-[50px] bg-[#EFC368] rounded-full">
                                        <p className='text-xl'>3</p>
                                    </div>
                                    <div>
                                        <p className="text-xl font-semibold mt-[10px]">Receive your order</p>
                                        <p className="text-base mt-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos mollitia eum quo ducimus distinctio quasi? Fugiat, reiciendis tempora?</p>
                                    </div>
                                </div> 
                            </div>
                            <div className="grid grid-cols-2 mt-[20px]">
                                <div>
                                    <p className="text-xl font-semibold mt-[10px]">Express Delivery Service</p>
                                    <p className="text-base mt-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos mollitia eum quo ducimus distinctio quasi? Fugiat, reiciendis tempora?</p>
                                </div>
                                <div>
                                    <p className="text-xl font-semibold mt-[10px]">Support team is available 24/7</p>
                                    <div className='mt-[10px] flex gap-[20px] items-center'>
                                        <FontAwesomeIcon icon={faPhone} color={"#EFC368"} />
                                        <div>
                                            <p>021 - 051325254</p>
                                            <p>0812 1234 5678</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='py-[100px] px-[10px] flex flex-col box-border'>
                    <div className="container mx-auto box-border">
                        <p className="text-4xl text-center font-semibold mt-[10px]">Meet the Specialist Team</p>
                        <p className="text-base text-center mt-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos mollitia eum quo ducimus distinctio quasi? Fugiat, reiciendis tempora?</p>

                        <div className="grid grid-cols-4 gap-[20px] mt-[20px]">
                            <div className='flex flex-col items-center'>
                                <div className="h-[150px] w-[150px] rounded bg-[#D8D8D8]"></div>
                                <div className='mt-[20px]'>
                                    <p className="text-xl text-center font-semibold">Richard Edwards</p>
                                    <p className="text-base text-center mt-[10px]">CEO & Founder</p>
                                </div>
                            </div>

                            <div className='flex flex-col items-center'>
                                <div className="h-[150px] w-[150px] rounded bg-[#D8D8D8]"></div>
                                <div className='mt-[20px]'>
                                    <p className="text-xl text-center font-semibold">Maria White</p>
                                    <p className="text-base text-center mt-[10px]">Support Engineer</p>
                                </div>
                            </div>

                            <div className='flex flex-col items-center'>
                                <div className="h-[150px] w-[150px] rounded bg-[#D8D8D8]"></div>
                                <div className='mt-[20px]'>
                                    <p className="text-xl text-center font-semibold">Chris Gibson</p>
                                    <p className="text-base text-center mt-[10px]">Lab Assistant</p>
                                </div>
                            </div>

                            <div className='flex flex-col items-center'>
                                <div className="h-[150px] w-[150px] rounded bg-[#D8D8D8]"></div>
                                <div className='mt-[20px]'>
                                    <p className="text-xl text-center font-semibold">Linda Nelson</p>
                                    <p className="text-base text-center mt-[10px]">SUpport Engineer</p>
                                </div>
                            </div>

                            <div className='flex flex-col items-center'>
                                <div className="h-[150px] w-[150px] rounded bg-[#D8D8D8]"></div>
                                <div className='mt-[20px]'>
                                    <p className="text-xl text-center font-semibold">Katrina King</p>
                                    <p className="text-base text-center mt-[10px]">Sales Manager</p>
                                </div>
                            </div>

                            <div className='flex flex-col items-center'>
                                <div className="h-[150px] w-[150px] rounded bg-[#D8D8D8]"></div>
                                <div className='mt-[20px]'>
                                    <p className="text-xl text-center font-semibold">John Anderson</p>
                                    <p className="text-base text-center mt-[10px]">Sales Manager</p>
                                </div>
                            </div>

                            <div className='flex flex-col items-center'>
                                <div className="h-[150px] w-[150px] rounded bg-[#D8D8D8]"></div>
                                <div className='mt-[20px]'>
                                    <p className="text-xl text-center font-semibold">Randy Stewart</p>
                                    <p className="text-base text-center mt-[10px]">Sales Manager</p>
                                </div>
                            </div>

                            <div className='flex flex-col items-center'>
                                <div className="h-[150px] w-[150px] rounded bg-[#D8D8D8]"></div>
                                <div className='mt-[20px]'>
                                    <p className="text-xl text-center font-semibold">Zachary Wagner</p>
                                    <p className="text-base text-center mt-[10px]">Social Media Manager</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-[100px]">
                            <p className="text-3xl font-bold">Latest Post</p>
                            <div className="mt-[20px] grid grid-cols-3 gap-[20px]">
                                <div className="flex flex-col gap-[10px]">
                                    <div className="h-[200px] rounded bg-[#D8D8D8]"></div>
                                    <div className='flex gap-[20px]'>
                                        <div className='flex gap-[20px] items-center'>
                                            <FontAwesomeIcon icon={faCalendar} color={"#299169"} />
                                            <div>
                                                <p>September 30, 2021</p>
                                            </div>
                                        </div>
                                        <div className='flex gap-[20px] items-center'>
                                            <FontAwesomeIcon icon={faComment} color={"#299169"} />
                                            <div>
                                                <p>No Comment</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-xl font-semibold">Gathering Khusus Para Member 2022 Special Moment</p>
                                    <p className="text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit dolorem, rem labore enim minus sit dolore optio. Qui.</p>
                                </div>
                                <div className="flex flex-col gap-[10px]">
                                    <div className="h-[200px] rounded bg-[#D8D8D8]"></div>
                                    <div className='flex gap-[20px]'>
                                        <div className='flex gap-[20px] items-center'>
                                            <FontAwesomeIcon icon={faCalendar} color={"#299169"} />
                                            <div>
                                                <p>September 30, 2021</p>
                                            </div>
                                        </div>
                                        <div className='flex gap-[20px] items-center'>
                                            <FontAwesomeIcon icon={faComment} color={"#299169"} />
                                            <div>
                                                <p>No Comment</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-xl font-semibold">Pengumuman Pemenang Giveaway Bulan April 2023</p>
                                    <p className="text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit dolorem, rem labore enim minus sit dolore optio. Qui.</p>
                                </div>
                                <div className="flex flex-col gap-[10px]">
                                    <div className="h-[200px] rounded bg-[#D8D8D8]"></div>
                                    <div className='flex gap-[20px]'>
                                        <div className='flex gap-[20px] items-center'>
                                            <FontAwesomeIcon icon={faCalendar} color={"#299169"} />
                                            <div>
                                                <p>September 30, 2021</p>
                                            </div>
                                        </div>
                                        <div className='flex gap-[20px] items-center'>
                                            <FontAwesomeIcon icon={faComment} color={"#299169"} />
                                            <div>
                                                <p>No Comment</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-xl font-semibold">Produk Baru Dari Deju Akan Segera Lanching - Nantikan!</p>
                                    <p className="text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit dolorem, rem labore enim minus sit dolore optio. Qui.</p>
                                </div>
                            </div>

                            <p className='mt-[100px] text-center text-4xl font-bold'>Follow Us on Instagram</p>
                            <p className="text-base text-center mt-[10px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit dolorem, rem labore enim minus sit dolore optio. Qui.</p>
                        </div>
                    </div>
                </section>

                <section className='footer flex flex-col py-[50px] bg-black relative bottom-0 left-0 right-0 text-white'>
                    <div className="grid grid-cols-4 gap-[20px] p-[10px] container mx-auto box-border">
                        <div className='flex flex-col gap-[20px]'>
                            <div className='flex flex-col gap-[10px]'>
                                <p className='text-6cl'>LOGO</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur aspernatur alias autem perspiciatis ipsa quos reiciendis tenetur sed adipisci? Perferendis id provident aperiam facilis recusandae sunt quasi ipsam doloremque voluptate.</p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-[10px]'>
                            <p className='text-lg font-semibold'>Contacts Information</p>
                            <div className='flex gap-[20px] items-center'>
                                <FontAwesomeIcon icon={faPhone} color={"#EFC368"} />
                                <div>
                                    <p>021 - 051325254</p>
                                    <p>0812 1234 5678</p>
                                </div>
                            </div>
                            
                            <div className='flex gap-[20px] items-center'>
                                <FontAwesomeIcon icon={faLocationPin} color={"#EFC368"} />
                                <div>
                                    <p>JL.Camanraya No. 50E, Jatibening Pondok Gede, Bekasi, 17412</p>
                                </div>
                            </div>

                            <div className='flex gap-[20px] items-center'>
                                <FontAwesomeIcon icon={faClock} color={"#EFC368"} />
                                <div>
                                    <p>9:00 AM to 5:00 PM <br /> Monday to Saturday</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-[10px]'>
                            <p className='text-lg font-semibold'>Shop Products</p>
                            <div className='flex gap-[20px] items-center'>
                                <FontAwesomeIcon icon={faArrowCircleRight} color={"#EFC368"} />
                                <p>Flower</p>
                            </div>
                            
                            <div className='flex gap-[20px] items-center'>
                                <FontAwesomeIcon icon={faArrowCircleRight} color={"#EFC368"} />
                                <p>Oils</p>
                            </div>

                            <div className='flex gap-[20px] items-center'>
                                <FontAwesomeIcon icon={faArrowCircleRight} color={"#EFC368"} />
                                <p>Edibles</p>
                            </div>

                            <div className='flex gap-[20px] items-center'>
                                <FontAwesomeIcon icon={faArrowCircleRight} color={"#EFC368"} />
                                <p>Concentrates</p>
                            </div>

                            <div className='flex gap-[20px] items-center'>
                                <FontAwesomeIcon icon={faArrowCircleRight} color={"#EFC368"} />
                                <p>Shop All</p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-[10px]'>
                            <p className='text-lg font-semibold'>Pembayaran</p>
                            
                            <div className='grid grid-cols-3 gap-[10px]'>
                                <div className='flex h-[50px] w-[75px] rounded bg-white'></div>
                                <div className='flex h-[50px] w-[75px] rounded bg-white'></div>
                                <div className='flex h-[50px] w-[75px] rounded bg-white'></div>
                                <div className='flex h-[50px] w-[75px] rounded bg-white'></div>
                                <div className='flex h-[50px] w-[75px] rounded bg-white'></div>
                                <div className='flex h-[50px] w-[75px] rounded bg-white'></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    };
};
