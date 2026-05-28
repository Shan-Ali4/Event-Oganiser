import { useEffect, useState } from 'react';
import {toast} from 'sonner';

export const useConvexQuery = (query, ...args) => {
    let result = useQuery(query,...args);

    const [data, setData] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (result ===  undefined) {
            setIsLoading(true);
        } else {
          try {
            setData(result);
            setError(null);
          } catch (err) {
            setError(err);
            toast.error("Failed to load data");
          } finally {
            setIsLoading(false);
          }
        }
    }, [result]);
    return { data, isLoading, error };
}

export const useConvexMutation = (mutation, ...args) => {
    let mutationFn = useMutation(mutation);

    const [data, setData] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const mutate = async (...mutationArgs) => {
        
    }

}