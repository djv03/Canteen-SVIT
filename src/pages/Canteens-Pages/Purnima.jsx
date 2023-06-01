import { useEffect } from "react";
import ItemCard from "../../Components/Layout/ItemCard";
import useFetchData from "../../hooks/use-fetch-data";

const PurnimaMenu = () => {
  const {
    data,
    isLoading,
    error,
    fetchData: fetchPurnimasData,
  } = useFetchData();

  useEffect(() => {
    fetchPurnimasData("Purnima");
  }, []);

  return (
    <div>
      <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <ul style={{ listStyle: "none" }}>
          {data.length > 0 &&
            data.map((item) => (
              <li key={item.id}>
                <ItemCard
                  id={item.id}
                  itemImage={item.image}
                  itemName={item.name}
                  itemPrice={item.price}
                  itemQuantity={item.quantity}
                />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default PurnimaMenu;
