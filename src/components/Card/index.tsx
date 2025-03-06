import "@/style.scss"
import '../../app/globals.css';
import Image from "next/image";
import ShopImage from "@/assets/images/shop.jpg";

interface ShopCardProps {
    shopName: string;
    shopDescription: string;
    shopImage: string;
}
export default function ShopCard(props: ShopCardProps) {
    const { shopName, shopDescription, shopType, shopImage } = props;
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <Image
                    src={ShopImage}
                    alt="Noteworthy technology acquisitions 2021"
                    style={{ backgroundSize: "cover" }}
                    className="object-cover rounded-t-lg h-40" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{shopName}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{shopDescription}</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Manage
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </div>

    )
}
