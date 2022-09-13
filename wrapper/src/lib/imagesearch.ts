import axios from 'axios';

class ImageSearch {
    private searchterm: any;
    static ImageSearch: (searchterm: string) => ImageSearch;
    constructor(searchterm : string) {
        this.searchterm = searchterm;
    }
    public async search() {
        return new Promise((resolve, reject) => {
            axios.post('http://localhost:4834/api/gis', {
                searchterm: this.searchterm
            }).then((response) => {
                return resolve(response.data);
            }).catch((error) => {
                throw new Error(error);
            });
        })
    }
}

export default ImageSearch;