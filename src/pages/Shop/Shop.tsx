import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from 'react'
import { Breadcrumb, Navbar } from '../../components';
import HomePopularProductsItem from '../../components/HomePopularProductsItem/HomePopularProductsItem';

export default class Shop extends Component {
    render() {
        const products = [
            {
                star: 4,
                name: "Paket Cream Malam",
                price: 79000,
                discount: 0
            },
            {
                star: 4,
                name: "Paket Produk Deju",
                price: 470000,
                discount: 15
            },
            {
                star: 4,
                name: "Whitening Cream",
                price: 150000,
                discount: 0
            },
            {
                star: 4,
                name: "Acne Serum",
                price: 150000,
                discount: 0
            },
            {
                star: 4,
                name: "Paket Cream Malam",
                price: 79000,
                discount: 0
            },
            {
                star: 4,
                name: "Paket Produk Deju",
                price: 470000,
                discount: 15
            },
            {
                star: 4,
                name: "Whitening Cream",
                price: 150000,
                discount: 0
            },
            {
                star: 4,
                name: "Acne Serum",
                price: 150000,
                discount: 0
            },
            {
                star: 4,
                name: "Paket Cream Malam",
                price: 79000,
                discount: 0
            },
            {
                star: 4,
                name: "Paket Produk Deju",
                price: 470000,
                discount: 15
            },
            {
                star: 4,
                name: "Whitening Cream",
                price: 150000,
                discount: 0
            },
            {
                star: 4,
                name: "Acne Serum",
                price: 150000,
                discount: 0
            },
            {
                star: 4,
                name: "Paket Cream Malam",
                price: 79000,
                discount: 0
            },
            {
                star: 4,
                name: "Paket Produk Deju",
                price: 470000,
                discount: 15
            },
            {
                star: 4,
                name: "Whitening Cream",
                price: 150000,
                discount: 0
            },
            {
                star: 4,
                name: "Acne Serum",
                price: 150000,
                discount: 0
            },
        ];

        return (
            <div>
                <Navbar />
                <div className="mt-[85px] w-full bg-[#C6C6C6] p-[60px]">
                    <p className="text-4xl text-black text-center font-bold">Shop</p>
                    <div className="mt-2 max-w-[500px] mx-auto">
                        <p className="text-base text-black text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ab deserunt numquam debitis!</p>
                    </div>
                </div>

                <Breadcrumb text="Home / Shop" />

                <div className="flex flex-col mt-[100px] flex p-[10px] container mx-auto box-border">
                    <div className='flex gap-[20px]'>
                        <div className='w-[70%] grid grid-cols-3 gap-[20px]'>
                            {products.map((item: any, index: number) => {
                                return (
                                    <HomePopularProductsItem item={item} key={index} />
                                );
                            })}
                        </div>
                        <div className='w-[30%] h-[100px]'>
                            <p className='text-xl font-semibold'>Search by Products</p>
                            <div className="flex h-[35px] mt-[10px]">
                                <input type="text" placeholder="Search ..." className="border rounded-full bg-white pl-[15px] pr-[50px] text-[12px] outline-1 outline-[#EFC368]" />
                                <div className="flex rounded-full p-[5px] bg-[#EFC368] p-[5px] justify-center items-center cursor-pointer ml-[-59px]">
                                    <p className='text-sm'>Search</p>
                                </div>
                            </div>

                            <p className='text-xl font-semibold mt-[50px]'>Product Categories</p>
                            <div className='mt-[10px]'>
                                <input type="radio" id="onSale" name="onSale" />
                                <label className='ml-[10px]' htmlFor="onSale">On Sale</label><br />

                                <input className='mt-[15px]' type="radio" id="flowers" name="flowers" />
                                <label className='ml-[10px]' htmlFor="flowers">Flowers</label><br />

                                <input className='mt-[15px]' type="radio" id="seeds" name="seeds" />
                                <label className='ml-[10px]' htmlFor="seeds">Seeds</label><br />

                                <input className='mt-[15px]' type="radio" id="oil" name="oil" />
                                <label className='ml-[10px]' htmlFor="oil">Oil</label><br />

                                <input className='mt-[15px]' type="radio" id="concentrate" name="concentrate" />
                                <label className='ml-[10px]' htmlFor="concentrate">Concentrate</label><br />

                                <input className='mt-[15px]' type="radio" id="cartridges" name="cartridges" />
                                <label className='ml-[10px]' htmlFor="cartridges">Cartridges</label><br />

                                <input className='mt-[15px]' type="radio" id="edible" name="edible" />
                                <label className='ml-[10px]' htmlFor="edible">Edible</label>
                            </div>

                            <div className='flex flex-col mt-[50px] rounded bg-[#FAFAF5] w-[300px] p-[20px]'>
                                <p className="text-xl text-black font-bold">Everything is 20% off for this special day</p>
                                <p className="text-black mt-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <div className="w-max flex rounded-full bg-[#EFC368] justify-center items-center cursor-pointer px-[15px] py-[5px] mt-[20px]">
                                    <p className="text-[#214842]">Shop now</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-[5px] mt-[20px]'>
                        <div className='flex w-[75px] h-[50px] rounded bg-[#FAFAF5] items-center justify-center'>
                            1
                        </div>
                        <div className='flex w-[75px] h-[50px] rounded bg-[#FAFAF5] items-center justify-center'>
                            2
                        </div>
                        <div className='flex w-[75px] h-[50px] rounded bg-[#FAFAF5] items-center justify-center'>
                            3
                        </div>
                    </div>
                </div>

                <div className="flex flex-col mt-[100px] flex p-[10px] container mx-auto box-border">
                    <div className='flex gap-[20px]'>
                        <div className='flex flex-col gap-[10px] w-[70%] p-[20px] rounded bg-[#D8D8D8]'>
                            <p className='text-xl text-white'>Browse out selection of CBD-infused goods</p>
                            <p className="text-base text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut adipisci animi autem deleniti quia totam, minus odio ea!</p>
                            <div className="w-max flex rounded-full bg-[#EFC368] justify-center items-center cursor-pointer px-[15px] py-[5px] mt-[20px]">
                                <p className="text-[#214842]">Shop now</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[10px] w-[30%] p-[20px] rounded bg-[#D8D8D8] justify-end'>
                            <p className='text-xl font-bold'>Weekly Special</p>
                            <div className="w-max flex rounded-full bg-[#EFC368] justify-center items-center cursor-pointer px-[15px] py-[5px] mt-[20px]">
                                <p className="text-[#214842]">Shop now</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};
