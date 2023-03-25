import { useState } from "react";

// This hook is used to fetch data from firebase realtime database
const useFetchData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const fetchData = async (urlKey) => {
    setIsLoading(true);
    try {
      const url = `https://svit-canteens-menu-default-rtdb.asia-southeast1.firebasedatabase.app/${urlKey}.json`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Can't fetch data");
      }

      const responseData = await response.json();

      const loadedData = [];

      for (const key in responseData) {
        loadedData.push({
          id: key,
          image: responseData[key].image,
          name: responseData[key].name,
          price: responseData[key].price,
          quantity: responseData[key].quantity,
        });
      }

      setData(loadedData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  return { data, isLoading, error, fetchData };
};

export default useFetchData;
