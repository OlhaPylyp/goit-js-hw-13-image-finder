
// import { listItem   } from './refs'


// export default function infinityScroll( ) {
//     const options = {       
//      rootMargin: '10px',
//      // root: listGallery,
//        //threshold: 1.0
//     }
//     const obs = function (entries,  observer) {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//              //image()
//               observer.unobserve(listItem);
              

//             }
//         }) 
  
     
//   };
//   const observer = new IntersectionObserver(obs, options);
//    console.log("lastElementChild", listItem)
//   observer.observe(listItem);
 
  
// }

import fetchImage from './searchImage';

function  infinityScroll  ()  {
  window.addEventListener('scroll', scrollInfinity)
  function scrollInfinity() {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const imageHeight = document.documentElement.imageHeight;

    if (scrollTop + imageHeight > scrollHeight - 3) {
      setTimeout(fetchImage(), 500);
    }
  };
};

export default infinityScroll;