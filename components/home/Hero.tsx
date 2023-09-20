export default function Hero() {
  return (
    <section id="hero" className="relative bg-black">
      <div className="bg-image-mockups absolute z-20 w-full h-full bg-no-repeat bg-center left-16 ml-20 -top-16 md:-top-16 bg-custom-mobile-mockup-size"></div>
      <div className="container h-screen relative z-20">
        <div className="h-full flex flex-col justify-end pb-4 lg:pb-0 lg:w-96 lg:justify-center">
          <div className="h-1/2 flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
            <h1 className="text-4xl lg:text-5xl text-primary-dark-blue pb-5">
              Palm Protocol
            </h1>
            <p className="text-neutral-grayish-blue text-xs lg:text-base leading-5 mb-7">
              Comprehensive lending and borrowing platform
              Unlock the future of finance with our DeFi lending platform on Zeniq.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
