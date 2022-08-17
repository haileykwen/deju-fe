import { faAddressCard, faArrowAltCircleRight, faArrowCircleRight, faArrowRight, faArrowRightArrowLeft, faClock, faList, faListAlt, faListDots, faListNumeric, faListOl, faLocationPin, faPhone, faRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from 'react';
import { HomeFlashSale, HomeLanding, HomePopularProducts, HomeTestimoni, Navbar } from '../../components';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />

                <section className='home-landing-section flex flex-col bg-[#FAFAF5] box-border'>
                    <HomeLanding />
                </section>

                <section className='home-popular-products-section flex flex-col min-h-screen bg-white'>
                    <HomePopularProducts />
                </section>

                <section className='home-flash-sale-section flex flex-col bg-[#FAFAF5] box-border'>
                    <HomeFlashSale />
                </section>

                <section className='home-popular-products-section flex flex-col min-h-screen bg-white'>
                    <HomeTestimoni />
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
