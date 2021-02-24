import * as basicLightbox from 'basiclightbox'
import {listGallery } from './refs'
import 'basicLightbox/src/styles/main.scss';

 const lightBox = () => {

    listGallery.addEventListener('click', openModal)
    function openModal(event) {
        
   
        if (event.target.nodeName !== "IMG") {
                return;     
        }
        
        const { source } = event.target.dataset;
        const { alt } = event.target;
        basicLightbox.create(`
		<img width="1200" height="900" src="${source}" alt='${alt}'>
	`).show(); 
        
    }
}
    
export default  
 lightBox 


