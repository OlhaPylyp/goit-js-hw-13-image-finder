
import { searchForm, listGallery, loadBtn,listItem } from './refs'
import lightBox from './lightbox'
import api from './apiService'
import gallery from "../js/updateGallery"
import '../scss/styles.scss';
import infinityScroll from './scroll'

import { alert, notice, info, success, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/BrightTheme.css';

searchForm.addEventListener('submit',  searchFounder)
    
loadBtn.addEventListener('click', fetchImage);
function searchFounder(event) {
      
    event.preventDefault();
    const form = event.currentTarget;
    api.query = form.elements.query.value;
    if (api.query === "") {
  notice({
  text: "enter querly"
  });
        listGallery.innerHTML = '';
        return
    }
    
    console.log('api.query',  listGallery.innerHTML)
    listGallery.innerHTML = '';
    fetchImage()  
               api.resetPage();
    form.reset(); 
        
            lightBox();
}
 let scrollScr = false;
function fetchImage() {
    
    //loadBtn.disabled = true;
//loadBtn.classList.add('is-hidden');
     //spinner.classList.add('is-hidden')  
 
    api.apiService().then((image) => {
  
             gallery(image);   
            
           
             if (listGallery.childNodes.length > 0) {
                 if (scrollScr) {
                     window.scrollTo(                 
                         {
                             top: document.documentElement.scrollTop + document.documentElement.clientHeight,
                             behavior: 'smooth'
                            }
                            );
                        }
                    }                  
               scrollScr = true;
               infinityScroll();
         })
     }
    


export default fetchImage;