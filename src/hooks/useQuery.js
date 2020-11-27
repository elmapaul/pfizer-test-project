import {useEffect, useState} from "react";
import axios from "axios";

export const useQuery = url => {
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

    useEffect(() => {
        // If url is valid
        if (/(https?:\/\/[^\s]+)/.test(url)) {
            // IGNORE NEXT LINE: Then method due to IDE complain
            fetchData().then();
        } else {
            setError("Invalid URL!");
        }
    }, [url]);

    return { data, loading, error };
};