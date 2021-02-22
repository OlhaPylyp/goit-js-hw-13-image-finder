
import { listGallery } from './refs'
console.log('listGallery', listGallery)
import fetchImage from './searchImage';


export default function infinityScroll() {
    let options = {       
      rootMargin: '300px',
      root: null,
      threshold: 1
    }
    let obs = function (entries,  observer) {
      entries.forEach(entry => {
          console.log('obs', observer)
            if (entry.isIntersecting) {
            fetchImage()                    
        }
        observer.unobserve(entry.target);
        console.log('targ', entry.target);
         observer.observe(listGallery.lastElementChild);
        })       
  };
  const observer = new IntersectionObserver(obs, options);
   console.log("last", listGallery.lastElementChild)
  observer.observe(listGallery.lastElementChild);
  
}

// 

// function  infinityScroll  ()  {
//   window.addEventListener('scroll', scrollInfinity)
//   function scrollInfinity() {
//     const scrollHeight = document.documentElement.scrollHeight;
//     const scrollTop = document.documentElement.scrollTop;
//     const imageHeight = document.documentElement.imageHeight;

//     if (scrollTop + clientHeight > scrollHeight - 3) {
//       setTimeout(fetchImage(), 1000);
//     }
//   };
// };

//export default infinityScroll;