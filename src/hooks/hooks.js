import {useQuery} from "react-query";

export const useGetImages = (url) => {
    return useQuery('images', () => {
        return fetch(url).then(res => res.json())
    }, {
        enabled:!!url,
        refetchOnWindowFocus:false
    });
};