import React from "react";
import { useLoaderData, useParams } from "react-router";
import Button from "../components/ui/Button";
import { MdBookmarkAdd } from "react-icons/md";
import { IoCart } from "react-icons/io5";
import { addToFavorite } from "../utilities";

const PhoneDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const singlePhone = data.find((phone) => phone.id === parseInt(id));
  const {
    name,
    image,
    brand,
    model,
    price,
    description,
    storage,
    camera_info,
  } = singlePhone || {};
  const handleFavorite = () => {
    addToFavorite(singlePhone);
  };
  return (
    <div className="w-full py-12">
      <img
        className="w-full md:w-auto mx-auto mb-8"
        src={image}
        alt="details phone img"
      />
      {/* title and btns  */}
      <div className="flex justify-between ">
        <h1 className="lg:text-5xl text-3xl font-thin text-gray-900 mb-8">
          {name}
        </h1>
        <div className="space-x-4">
          <Button label={<IoCart />} />
          <Button onClick={handleFavorite} label={<MdBookmarkAdd />} />
        </div>
      </div>
    </div>
  );
};

export default PhoneDetails;
