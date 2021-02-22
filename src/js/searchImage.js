
import { searchForm, listGallery, loadBtn} from './refs'
import lightBox from './lightbox'
import api from './apiService'
import gallery from "../js/updateGallery"
import '../styles.scss';
import infinityScroll from './scroll'

searchForm.addEventListener('submit',  searchFounder)
    
loadBtn.addEventListener('click', fetchImage);
    function searchFounder(event) {
event.preventDefault();
const form = event.currentTarget;
api.query = form.elements.query.value;
listGallery.innerHTML = '';
        api.resetPage();
        form.reset(); 
        fetchImage();
        lightBox();
}
 
function  fetchImage() {
    //loadBtn.disabled = true;
//loadBtn.classList.add('is-hidden');
     //spinner.classList.add('is-hidden')   
         api.apiService().then((image) => {
             gallery(image)
             infinityScroll();
             console.log('listGallery', listGallery)
     
             //loadBtn.classList.remove('is-hidden')

                  window.scrollTo({
                     top: 100,
                behavior:'smooth'});
         })
     }
    


export default fetchImage;