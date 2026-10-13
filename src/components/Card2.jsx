
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import {
    IncreaseQty,
    DecreaseQty,
    RemoveItem
} from '../redux/CartSlice';

function Card2({ name, id, image, price, qty }) {

    const dispatch = useDispatch()

    return (
        <div className='w-full h-[110px] p-2 rounded-[5px] shadow-lg flex justify-between'>

            <div className='w-[60%] h-full flex gap-5'>

                <div className='w-[60%] h-full overflow-hidden rounded-lg'>
                    <img
                        src={image}
                        alt={name}
                        className='w-full h-full object-cover'
                    />
                </div>

                <div className='w-[40%] h-full flex flex-col gap-5'>

                    <div className='text-lg text-black font-semibold'>
                        {name}
                    </div>

                    <div className='w-[90px] h-[40px] bg-gray-400 flex rounded-lg overflow-hidden shadow-lg border-2 border-green-800'>

                        <button
                            className='w-[30%] h-full bg-gray-200 flex justify-center items-center text-green-700 hover:bg-gray-400 cursor-pointer'
                            onClick={() => dispatch(DecreaseQty(id))}
                        >
                            -
                        </button>

                        <span className='w-[40%] h-full bg-gray-300 flex justify-center items-center text-green-700'>
                            {qty}
                        </span>

                        <button
                            className='w-[30%] h-full bg-gray-200 flex justify-center items-center text-green-700 hover:bg-gray-400 cursor-pointer'
                            onClick={() => dispatch(IncreaseQty(id))}
                        >
                            +
                        </button>

                    </div>

                </div>
            </div>

            <div className='flex flex-col justify-start items-end gap-6'>

                <span className='text-xl text-green-800 font-semibold'>
                    ₹{price * qty}
                </span>

                <MdDelete
                    className='w-[20px] h-[30px] text-red-800 hover:text-red-500 hover:cursor-pointer'
                    onClick={() => dispatch(RemoveItem(id))}
                />

            </div>

        </div>
    )
}

export default Card2;

