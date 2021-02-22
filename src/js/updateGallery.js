'../scss/styles.scss';
import { listGallery } from './refs'
import imageTpl from '../templates/imageGrid.hbs';
function updateGallery(hits) { 
    const markup = imageTpl(hits)
    listGallery.insertAdjacentHTML('beforeend', markup);
}
export default updateGallery;