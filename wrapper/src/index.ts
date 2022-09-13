// @ts-ignore
import IS from './lib/imagesearch';

function ImageSearch(searchterm : string) {
    return new IS(searchterm);
}

IS.ImageSearch = ImageSearch;

export default ImageSearch;