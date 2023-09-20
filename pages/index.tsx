import Head from 'next/head';
import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/Hero';
import Motivation from '../components/home/Motivation';
import About from '../components/home/About';
import Blog from '../components/home/Blog';
import Footer from '../components/layout/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Palm</title>
        <link rel="icon" href="/image-logo.svg" />
      </Head>
      <Navbar />
      <div className="relative overflow-hidden">
        <div className="hidden lg:block w-full h-full absolute">
          <div className="bg-image-mockups absolute z-20 w-full h-full bg-no-repeat bg-auto bg-right-top -right-72 xl:-right-28"></div>
        </div>
        <Hero />
        <Motivation />
        <About />
        <Blog />
        <Footer />
      </div>
    </>
  );
};

export default Home;
