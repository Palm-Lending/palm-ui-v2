// const articles = [
//   {
//     author: 'Justin Gaffney',
//     description:
//       'Blockchain Developer',
//     ext: 'Zencon 2022 Winner',
//     imgPath: '/images/jj-img.png',
//   },
//   {
//     author: 'Christopher Martinez',
//     description:
//       'Backend Developer',
//     ext: 'Zencon 2022 Winner',
//     imgPath: '/images/cm-img.png',
//   },
//   {
//     author: 'Xochitl Escamilla',
//     description:
//       'UI/UX Design',
//     ext: 'Zencon 2022 Winner',
//     imgPath: '/images/xe-img.png',
//   },
//   {
//     author: 'Miguel Segovia',
//     description:
//       'Frontend DEVELOPER',
//     ext: 'Future Zencon winner',
//     imgPath: '/images/ms-img.png',
//   },
// ];

// export default function Blog() {
//   return (
//     <section className="py-14 lg:py-24 bg-black">
//       <div className="container bg-black">
//         <div className="justify-center">
//           <h2 className="text-center text-3xl lg:text-4xl text-primary-lime-green mb-5 lg:mb-10">
//             Team
//           </h2>
//           <p className="text-center text-neutral-grayish-blue text-xl leading-5 mb-20">
//             Join us in revolutionizing the financial industry and empowering global borrowers! VC investors, let's shape the future together.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 gap-5 lg:gap-7 lg:grid-cols-4">
//           {articles.map((article) => (
//             <article key={article.title} className="bg-black">
//               <div className="aspect-w-5 aspect-h-5 lg:aspect-w-2 lg:aspect-h-2">
//                 <img
//                   className="object-cover"
//                   src={article.imgPath}
//                 />
//               </div>

//               <div className="px-7 pt-5 pb-10 lg:p-6">
//                 <span className="text-neutral-grayish-blue text-xs">
//                   {article.author}
//                 </span>
//                 <p className="text-neutral-grayish-blue text-xs">
//                   {article.description}
//                 </p>
//                 <p className="text-neutral-grayish-blue text-xs">
//                   {article.ext}
//                 </p>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
