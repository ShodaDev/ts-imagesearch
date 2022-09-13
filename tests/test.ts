import ImageSearch from '../wrapper/src/index';

// @ts-ignore
const IS = new ImageSearch('raccoons');
IS.search().then((data : any) => {
    console.log(data);
});