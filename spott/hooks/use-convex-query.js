import { useQuery, useMutation } from 'convex/react';
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

export const useConvexMutation = (mutation) => {
    const mutationFn = useMutation(mutation);

    const [data, setData] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const mutate = async (...args) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await mutationFn(...args);
            setData(response);
            setError(null);
          } catch (err) {
            setError(err);
            toast.error("Failed to load data");
          } finally {
            setIsLoading(false);
          }
    }
    return { mutate, data, isLoading, error };
}