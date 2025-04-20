import { useState } from "react";
import Hero from "../components/Hero";
import PhoneContainer from "../components/PhonesContainer";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  const [phones, setPhones] = useState(data);
  const handleSearch = (e, text) => {
    e.preventDefault(text);
    const searchedPhone = data.filter(
      (phone) =>
        phone.name.toLowerCase().split(' ').includes(text) === true ||
        phone.brand.toLowerCase().split(' ').includes(text) === true
    );
    setPhones(searchedPhone);
  };

  return (
    <div>
      <Hero handleSearch={handleSearch} />
      <PhoneContainer phones={phones} />
    </div>
  );
};

export default Home;
