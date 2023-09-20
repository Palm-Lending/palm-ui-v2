import Head from "next/head";
import { useState } from "react";
import type { NextPage } from "next";
import Navbar from "../components/layout/Navbar";
import Modal from "../components/modal";
import BorrowModalContent from "../components/borrowModalContent";
import SupplyModalContent from "../components/supplyModalContent";
import { LendingPoolABI } from '../constants/LendingPoolABI.js'
import { ethers } from 'ethers';
import { zscSigner } from "../utils/ethersjs_provider"; // a ready-made signer-object for interacting with the ZENIQ Smartchain
import { sendDemoTransaction } from "../utils/ethersjs_provider"; // an example on how to construct a transaction
import { nomo } from "../utils/nomo-plugin-kit/dist/nomo_api";

const contractAddress = '0x091379c0b101c922f9117D9275dED7bB3dDD171c'
const assetsToSupplyData = [
    { asset: "ZENIQ", balance: 0, apy: 2.35 },
    { asset: "EURO", balance: 0, apy: 6.82 },
    { asset: "TUPAN", balance: 0, apy: 1.23 },
    { asset: "SIDI", balance: 0, apy: 2.24 },
];
const assetsToBorrowData = [
    { asset: "ZENIQ", balance: 0, apy: 4.32 },
    { asset: "EURO", balance: 0, apy: 2.65 },
    { asset: "TUPAN", balance: 0, apy: 5.23 },
    { asset: "SIDI", balance: 0, apy: 2.94 },
];
const borrowDummyData = {
    amount: 0.031,
    token: "USDT",
    supplyAPY: "2.52%",
};
const supplyDummyData = {
    amount: 0.001,
    token: "ETH",
    supplyAPY: "1.93%",
};
const YourSupply = ({ onSwitch, onWithdraw }: { onSwitch: any, onWithdraw: any }) => {
    return (
        <>
            <div className="rounded w-full lg:w-5/12 overflow-hidden shadow-lg bg-gray-custom p-3 mb-10 lg:mb-0">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Your supplies</div>
                </div>
                <div className="px-6 py-4 flex flex-row">
                    <p className=" text-sm text-white">
                        Balance <span className="font-medium">$ 18.43</span>
                    </p>
                    <p className="pr-2 pl-2 color-gray-80">|</p>
                    <p className=" text-sm text-white">
                        APY <span className="font-medium">$ 18.43</span>
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2 flex flex-row content-end">
                    <div className="flex justify-between flex-col lg:flex-row pt-4 pb-2  w-full">
                        <div className="inline-block py-1 text-sm font-semibold text-white mb-2 w-full">
                            <div className="flex flex-col">
                                <span className="mb-3 font-light color-beige">ASSET</span>
                                <span className="font-normal text-base">ZENIQ</span>
                            </div>
                        </div>
                        <div className="inline-block py-1 text-sm font-semibold text-white mb-2 w-full">
                            <div className="flex flex-col">
                                <span className="mb-3 font-light color-beige">BALANCE</span>
                                <span className="pr-6 font-normal text-base">0.0100021</span>
                                <span className="font-normal text-sm color-gray-40 text-left">
                                    $18.43
                                </span>
                            </div>
                        </div>
                        <div className="inline-block py-1 text-sm font-semibold text-white mb-2 w-full">
                            <div className="flex flex-col">
                                <span className="mb-3 font-light color-beige">APY</span>
                                <span className="font-normal text-base">1.32 %</span>
                            </div>
                        </div>

                        <div className="flex items-center w-full lg:inline-flex">
                            <button
                                onClick={() => onWithdraw()}
                                className="mr-2 bg-gold btn-dark-gray py-3 lg:py-2 px-4 text-base lg:text-xs mt-4 rounded w-full lg:w-auto">
                                Withdraw
                            </button>
                            <button
                                onClick={() => onSwitch()}
                                className="mr-2 py-3 lg:py-2  px-4 text-base lg:text-xs btn-outline mt-4 rounded w-full lg:w-auto">
                                Deposit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
const YourBorrow = ({ onRepay, onBorrow }: { onRepay: any, onBorrow: any }) => {
    return (
        <>
            <div className="w-full lg:w-6/12 rounded overflow-hidden shadow-lg bg-gray-custom p-3  mb-10 lg:mb-0">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Your borrow</div>
                </div>
                <div className="px-6 py-4 flex flex-row">
                    <p className=" text-sm text-white">
                        Balance <span className="font-medium">$ 9.99</span>
                    </p>
                    <p className="pr-2 pl-2 color-gray-80">|</p>
                    <p className=" text-sm text-white">
                        APY <span className="font-medium">$ 14.47</span>
                    </p>
                    <p className="pr-2 pl-2 color-gray-80">|</p>
                    <p className=" text-sm text-white">
                        Borrow power used <span className="font-medium">$ 18.43</span>
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2 flex flex-row content-end">
                    <div className="flex justify-between flex-col lg:flex-row pt-4 pb-2  w-full">
                        <div className="inline-block py-1 text-sm font-semibold text-white mr-2 mb-2 w-full">
                            <div className="flex flex-col">
                                <span className="mb-3 font-light color-beige">ASSET</span>
                                <span className="font-normal text-base">ZENIQ</span>
                            </div>
                        </div>
                        <div className="inline-block py-1 text-sm font-semibold text-white mr-2 mb-2 w-full">
                            <div className="flex flex-col">
                                <span className="mb-3 font-light color-beige">DEBT</span>
                                <span className="pr-6 font-normal text-base">10.01</span>
                                <span className="font-normal text-sm color-gray-40 text-left">
                                    $9.99
                                </span>
                            </div>
                        </div>
                        <div className="inline-block py-1 text-sm font-semibold text-white mr-2 mb-2 w-full">
                            <div className="flex flex-col">
                                <span className="mb-3 font-light color-beige">APY</span>

                                <span className="font-normal text-base">14.47 %</span>
                            </div>
                        </div>
                        <div className="flex items-center w-full lg:inline-flex">
                            <button
                                onClick={() => onRepay()}
                                className="mr-2 bg-gold btn-dark-gray py-4 lg:py-2 px-4 text-base lg:text-xs mt-4 rounded w-full">
                                Repay
                            </button>
                            <button
                                onClick={() => onBorrow()}
                                className="mr-2 py-4 lg:py-2 px-4 text-base lg:text-xs btn-outline mt-4 rounded w-full">
                                Borrow
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
const AssetsToSupply = ({ onSupply, onDetails }: { onSupply: any, onDetails: any }) => {
    return (
        <>
            <div className="rounded w-full lg:w-5/12 overflow-hidden shadow-lg bg-gray-custom p-3  mb-10 lg:mb-0">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Assets to supply</div>
                </div>
                <div className="relative overflow-x-auto px-6">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-white uppercase" role="rowgroup">
                            <tr className="row-border" role="row">
                                <th
                                    role="columnheader"
                                    scope="col"
                                    className="px-6 py-3 font-light color-beige">
                                    ASSET
                                </th>
                                <th
                                    role="columnheader"
                                    scope="col"
                                    className="px-6 py-3 font-light color-beige">
                                    WALLET BALANCE
                                </th>
                                <th
                                    role="columnheader"
                                    scope="col"
                                    className="px-6 py-3 font-light color-beige ">
                                    APY
                                </th>
                            </tr>
                        </thead>
                        <tbody className="body-table">
                            {assetsToSupplyData.map((item) => (
                                <tr className="row-border" role="row">
                                    <th
                                        scope="row"
                                        className="lg:px-6 py-4 font-medium whitespace-nowrap text-2xl lg:text-base">
                                        {item.asset}
                                    </th>
                                    <td role="cell" className="supply lg:px-6 py-4">
                                        {item.balance}
                                    </td>
                                    <td role="cell" className=" supply lg:px-6 py-4">
                                        {item.apy}%
                                    </td>
                                    <td
                                        role="cell"
                                        className="borrow lg:px-6 py-0 lg:py-4 flex items-center w-full lg:w-auto lg:inline-flex">
                                        <button
                                            onClick={() => onSupply()}
                                            className="mt-5 lg:mt-0 ml-0 lg:ml-2 mr-2 btn-gray text-base lg:text-xs py-3 lg:py-2 px-4 rounded w-full lg:w-auto">
                                            Supply
                                        </button>
                                        <button
                                            onClick={() => onDetails(item.asset)}
                                            className="mt-5 lg:mt-0 mr-2 py-3 lg:py-2  px-4 text-base lg:text-xs btn-outline rounded w-full lg:w-auto">
                                            Details
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};
const AssetsToBorrow = ({ onDetails }: { onDetails: any }) => {
    return (
        <>
            <div className="rounded w-full lg:w-6/12 overflow-hidden shadow-lg bg-gray-custom p-3  mb-10 lg:mb-0">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Assets to borrow</div>
                </div>
                <div className="relative overflow-x-auto px-6">
                    <table className="w-full text-sm text-left w-full">
                        <thead className="text-xs text-white uppercase" role="rowgroup">
                            <tr className="row-border" role="row">
                                <th
                                    role="columnheader"
                                    scope="col"
                                    className="px-6 py-3 font-light color-beige">
                                    Asset
                                </th>
                                <th
                                    role="columnheader"
                                    scope="col"
                                    className="px-6 py-3 font-light color-beige">
                                    available
                                </th>
                                <th
                                    role="columnheader"
                                    scope="col"
                                    className="px-6 py-3 font-light color-beige">
                                    APY, variable
                                </th>
                                <th
                                    role="columnheader"
                                    scope="col"
                                    className="px-6 py-3 font-light color-beige">
                                    APY, STABLE
                                </th>
                            </tr>
                        </thead>
                        <tbody className="body-table">
                            {assetsToBorrowData.map((item) => (
                                <tr className="row-border" role="row">
                                    <th
                                        scope="row"
                                        className="lg:px-6 py-4 font-medium whitespace-nowrap text-2xl lg:text-base">
                                        {item.asset}
                                    </th>
                                    <td role="cell" className="borrow lg:px-6 py-4">
                                        {item.balance}
                                    </td>
                                    <td role="cell" className="borrow lg:px-6 py-4">
                                        {item.apy}%
                                    </td>
                                    <td role="cell" className="borrow lg:px-6 py-4">
                                        -
                                    </td>
                                    <td
                                        role="cell"
                                        className="borrow lg:px-6 py-0 lg:py-4 flex items-center w-full lg:w-auto lg:inline-flex">
                                        <button className="mt-5 lg:mt-0 ml-0 lg:ml-2 mr-2 btn-gray text-base lg:text-xs py-3 lg:py-2 px-4 rounded w-full lg:w-auto">
                                            Supply
                                        </button>
                                        <button
                                            onClick={() => onDetails(item.asset)}
                                            className="mt-5 lg:mt-0 mr-2 py-3 lg:py-2  px-4 text-base lg:text-xs btn-outline rounded w-full lg:w-auto">
                                            Details
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};
const Dashboard: NextPage = () => {
    const [borrowModalOpen, setBorrowModalOpen] = useState(false);
    const [supplyModalOpen, setSupplyModalOpen] = useState(false);
    const [haveMetamask, sethaveMetamask] = useState(true);
    const [client, setclient] = useState({
        isConnected: false,
    });

    async function deposit(): Promise<void> {
        nomo.enableMobileConsoleDebugging();
        const contract = new ethers.Contract(contractAddress, LendingPoolABI, zscSigner);
        console.log('wait for succes contract')
        const tx = await contract.deposit();
        const receipt = await tx.wait();
        console.log('tx: ', tx);
        console.log('receipt: ', receipt);
        return;
    }
    const handleOnClose = () => {
        setSupplyModalOpen(false);
        setBorrowModalOpen(false);
    };
    const onSwitch = () => {
        deposit();
    };
    const onWithdraw = () => {
        alert("on Withdraw handle");
    };
    const onRepay = () => {
        alert("on repay handle");
    };
    const onBorrow = () => {
        setBorrowModalOpen(true);
    };
    const handleOnSubmitBorrow = (data: any) => {
        handleOnClose();
        alert(data.supplyVal);
    };
    const onSupply = () => {
        setSupplyModalOpen(true);
    };
    const handleOnSubmitSupply = (data: any) => {
        handleOnClose();
        alert(data.supplyVal);
    };
    const onDetails = (asset: any) => {
        alert("on details handle: " + asset);
    };
    return (
        <>
            <Head>
                <title>Palm</title>
                <link rel="icon" href="/image-logo.svg" />
            </Head>
            <Navbar />

            <h1 className="container flex items-center text-white text-5xl font-semibold title flex">
                <svg
                    width="40"
                    height="41"
                    viewBox="0 0 60 61"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect width="60" height="61" fill="url(#pattern0)" />
                    <defs>
                        <pattern
                            id="pattern0"
                            patternContentUnits="objectBoundingBox"
                            width="1"
                            height="1">
                            <use
                                xlinkHref="#image0_466_896"
                                transform="scale(0.00251889 0.0025)"
                            />
                        </pattern>
                        <image
                            id="image0_466_896"
                            width="1200"
                            height="400"
                            xlinkHref="data:image/png;base64,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"
                        />
                    </defs>
                </svg>
                <span className="ml-3">ZENIQ</span>
            </h1>

            <div className="container flex text-white">
                <div className="flex flex-col border-r-1 border-solid border-gray-800 mr-10">
                    <span className="text-xs">Net worth</span>
                    <span className="text-xl font-medium">$ 0</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs	">Net APY</span>
                    <span className="text-xl font-medium">-</span>
                </div>
            </div>

            <div className="relative overflow-hidden mt-16">
                <section id="hero" className="relative bg-black">
                    <div className="container relative z-20">
                        <div className="h-full flex flex-col justify-end mt-10 lg:pb-0 lg:justify-center">
                            <div className="flex flex-col lg:flex-row justify-around mb-10 text-start text-white white border-white">
                                <YourSupply
                                    onSwitch={() => onSwitch()}
                                    onWithdraw={() => onWithdraw()}
                                />
                                <YourBorrow
                                    onRepay={() => onRepay()}
                                    onBorrow={() => onBorrow()}
                                />
                            </div>
                            <div className="flex flex-col lg:flex-row justify-around mb-10 text-start text-white white border-white">
                                <AssetsToSupply
                                    onSupply={onSupply}
                                    onDetails={(asset: any) => onDetails(asset)}
                                />
                                <AssetsToBorrow onDetails={(asset: any) => onDetails(asset)} />
                            </div>
                        </div>
                        <Modal
                            open={borrowModalOpen}
                            title={"Borrow "}
                            onClose={() => handleOnClose()}>
                            <BorrowModalContent
                                data={borrowDummyData}
                                onSubmit={(data: any) => handleOnSubmitBorrow(data)}
                            />
                        </Modal>
                        <Modal
                            open={supplyModalOpen}
                            title={"Supply "}
                            onClose={() => handleOnClose()}>
                            <SupplyModalContent
                                data={supplyDummyData}
                                onSubmit={(data: any) => handleOnSubmitSupply(data)}
                            />
                        </Modal>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Dashboard;
