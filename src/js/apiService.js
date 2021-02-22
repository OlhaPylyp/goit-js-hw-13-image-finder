
const apiKey= '20342526-89d38198e8299a53d4950dffe'
export default {
    searchQuery: '',
    page: 1,
    perPage:12,
    apiService() {
        const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=${this.perPage}&key=${apiKey}`;
    
        return fetch(url).then(res => res.json()).then(({ hits }) => {
            this.page += 1
            return hits;
        }).catch(error => console.log(error));

    },
    resetPage() { this.page = 1 },
    get query() { return this.searchQuery; },
    set query(value) { this.searchQuery = value }
};
