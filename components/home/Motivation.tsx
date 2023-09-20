const motivationItems = [
  {
    iconPath: '/icons/icon-online.svg',
    title: 'User-friendly interface',
  },
  {
    iconPath: '/icons/icon-budgeting.svg',
    title: 'Seamless transactions',
  },
  {
    iconPath: '/icons/icon-onboarding.svg',
    title: 'Robust security',
  },
];

export default function Motivation() {
  return (
    <section className="py-14 bg-gradient-radial-gray-to-black lg:py-24">
      <div className="container text-center lg:text-left">
        <div className="grid grid-cols-1 gap-12 lg:gap-6 lg:grid-cols-3">
          {motivationItems.map((item) => (
            <div key={item.title} className="flex justify-center items-center">
              <div className="flex justify-center lg:justify-start mr-5">
                <img src={item.iconPath} alt="" />
              </div>
              <h2 className="text-lg text-primary-dark-blue py-4 lg:pt-9 lg:pb-6 lg:text-xl lg:font-bold">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
