import { useState } from 'react';

export default function SupplyModalContent({ data, onSubmit }) {
    const [supplyVal, setSupplyVal] = useState('')

    const handleSupplyValueChange = (val) => {
        setSupplyVal(val.currentTarget.value)
    }
    return (
        <>
            <div className='w-80'>
                <div className='text-base text-white mb-3'>
                    Supply ETH
                </div>
                <div className="rounded-md mb-10 w-12/12 overflow-hidden shadow-lg bg-black-custom column flex center">
                    <div className="px-6 py-4">
                        <div className="px-6 py-4 flex flex-row">
                            <p className=" text-base text-white">
                                Balance {data.amount}
                                <br />
                                token {data.token}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mb-10'>
                <div className='text-base text-white mb-3'>
                    Transaction overview
                </div>
                <div className="rounded-md w-12/12 overflow-hidden shadow-lg bg-black-custom column flex center">
                    <div className="px-6 py-4">
                        <div className="px-6 py-4">
                            <p className="text-base text-white mb-3">
                                Supply APY {data.supplyAPY}
                            </p>
                            <input
                                type="text"
                                class="peer block min-h-[auto] w-full rounded bg-transparent pl-0 border-black leading-[1.6] outline-none ease-linear focus:border-transparent focus:ring-0 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                value={supplyVal}
                                onChange={(val) => handleSupplyValueChange(val)}
                                placeholder="New Supply Value" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-full'>
                <button onClick={() => onSubmit({ ...data, supplyVal })} className="w-full bg-primary-lime-green text-white-700 font-semibold py-2 px-4 rounded">
                    Supplying ETH
                </button>
            </div>
        </>
    );
}