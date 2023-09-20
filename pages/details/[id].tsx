import Head from 'next/head';
import { useRouter } from 'next/router'
import type { NextPage } from 'next';
import Navbar from '../../components/layout/Navbar';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import chartOptions from './chart.js';
import donutChartOptions from './donutChart';
import CircularProgress from '@mui/material/CircularProgress';


const Details: NextPage = () => {
    const router = useRouter();
    const assetsToSupplyData = {
        1: { asset: 'FRAX', reserveValue: 42.54, utilizationRate: 82, oraclePrice: 1.00, },
        2: { asset: 'DAI', reserveValue: 58.54, utilizationRate: 89, oraclePrice: 2.00, },
        3: { asset: 'BIT', reserveValue: 89.54, utilizationRate: 42, oraclePrice: 1.00, },
        4: { asset: 'DODGE', reserveValue: 12.54, utilizationRate: 72, oraclePrice: 3.00, },
    }

    return (
        <>
            <Head>
                <title>Palm</title>
                <link rel="icon" href="/image-logo.svg" />
            </Head>
            <Navbar />
            <div className="relative overflow-hidden">
                <section className="relative bg-black">
                    <div className="container h-screen relative z-20 pt-5">
                        <div className="h-full flex flex-col mt-10 lg:pb-0 pt-5">
                            <div className="flex flex-row w-5/12 text-start text-white white border-white justify-around">
                                <div className='summary-section-item text-white justify-between flex items-center'><span> <div className='text-xs'> DAI  </div><div className='text-xl'> {assetsToSupplyData[router.query.id]?.asset} stable coin </div></span> <div className='summary-separator' /> </div>
                                <div className='summary-section-item text-white justify-between flex items-center'><span> <div className='text-xs'> Reserve Size </div><div className='text-xl'> ${assetsToSupplyData[router.query.id]?.reserveValue}M </div></span> <div className='summary-separator' /> </div>
                                <div className='summary-section-item text-white justify-between flex items-center'><span> <div className='text-xs'> Utilization Rate </div><div className='text-xl'> {assetsToSupplyData[router.query.id]?.utilizationRate}%  </div></span> <div className='summary-separator' /> </div>
                                <div className='summary-section-item text-white justify-between flex items-center'><span> <div className='text-xs'> Oracle Price </div><div className='text-xl'> ${(assetsToSupplyData[router.query.id]?.oraclePrice)}  </div></span> </div>
                            </div>
                            <div className="h-full flex flex-row mt-10 lg:pb-0 pt-5">
                                <div className="flex flex-col mb-10 mr-5 w-9/12 text-white bg-black-custom-100 border-white p-8">
                                    <div className='text-xl w-12/12 mb-14 text-start'>Reserve status and configuration </div>
                                    <div className='chart-item-section'>
                                        <div className='chart-summary-item flex flex-row items-start h-28 justify-between'>
                                            <div>Supply Info</div>
                                            <div className='flex'>
                                                <div className=' relative'>
                                                    <CircularProgress className="circular-progress-fill-value" color="inherit" variant="determinate" value={40} />
                                                    <CircularProgress className="circular-progress-rest-value" color="inherit" variant="determinate" value={100} />
                                                </div>
                                                <div className='flex ml-10 flex-row items-center h-28'>
                                                    <div>44.55M of 338.00 </div>
                                                    <div className='summary-separator' />
                                                </div>
                                                <div className='flex flex-col justify-center h-28 ml-10'>
                                                    <span className='text-xs'>APY</span>
                                                    <span>10.38%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='chart-item'>
                                            <HighchartsReact highcharts={Highcharts} options={chartOptions} className='chart-container' ></HighchartsReact>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row mb-10 w-3/12 h-2/3 text-start text-white rounded bg-black-custom-100 white border-white justify-around">
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
            </div >
        </>
    );
};

export default Details;
