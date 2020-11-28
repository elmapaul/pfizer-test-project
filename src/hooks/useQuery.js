import {useEffect, useState} from "react";
import axios from "axios";

export const useQuery = (url, method = "GET", requestData = {}) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const fetchData = async () => {
        setLoading(true);

        try {
            const { data } = await axios.get(url);
            setData(data);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    };

    const sendRequest = async () => {
        setLoading(true);

        try {
            const { data } = await axios({ method, url, requestData });

            setData(data);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // If url format is valid
        if (/(https?:\/\/[^\s]+)/.test(url) && method === "GET") {
            // IGNORE NEXT LINE: Then method is added because of IDE complains
            fetchData().then();
        }
    }, []);

    return { sendRequest, data, loading, error };
};