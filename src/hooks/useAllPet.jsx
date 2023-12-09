import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";



const useAllPet = () => {
    
    const axiosPublic = useAxiosPublic();

    const {refetch, data: allPet=[]} = useQuery({
        queryKey: ['all-pet'],
        queryFn: async () => {
            const res = await axiosPublic.get('/all-pets')
            // console.log(res.data);
            return res.data
        }
    })

    return [allPet, refetch]
};

export default useAllPet;