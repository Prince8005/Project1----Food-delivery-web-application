import { RiCupFill } from "react-icons/ri";
import { BsFillCupHotFill } from "react-icons/bs";
import { RiGalleryView2 } from "react-icons/ri";
import { GiNoodles } from "react-icons/gi";
import { FaPizzaSlice } from "react-icons/fa6";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineFoodBank } from "react-icons/md";

const categories = [

    {
        id: 1,
        name: "All",
        Icons: (
            <RiGalleryView2 className='w-[60px] h-[60px] text-green-700' />
        )
    },

    {
        id: 2,
        name: "breakfast",
        Icons: (
            <RiCupFill className='w-[60px] h-[60px] text-green-700' />
        )
    },

    {
        id: 3,
        name: "soups",
        Icons: (
            <BsFillCupHotFill className='w-[60px] h-[60px] text-green-700' />
        )
    },

    {
        id: 4,
        name: "pasta",
        Icons: (
            <GiNoodles className='w-[60px] h-[60px] text-green-700' />
        )
    },

    {
        id: 5,
        name: "main_course",
        Icons: (
            <MdOutlineFoodBank className='w-[60px] h-[60px] text-green-700' />
        )
    },

    {
        id: 6,
        name: "pizza",
        Icons: (
            <FaPizzaSlice className='w-[60px] h-[60px] text-green-700' />
        )
    },

    {
        id: 7,
        name: "burger",
        Icons: (
            <FaHamburger className='w-[60px] h-[60px] text-green-700' />
        )
    }

];

export default categories;