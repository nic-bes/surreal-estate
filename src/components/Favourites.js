import React, { useState, useEffect } from "react";

import axios from "axios";
import Alert from "./Alert";
import FavouriteCard from "./FavouriteCard";

const Favourites = ({ userID }) => {
  const [favourites, setFavourites] = useState([]);
  const [favouriteToDelete, setFavouriteToDelete] = useState([]);
  const [alert, setAlert] = useState("Please login to access your Favourites");

  // render initial page
  useEffect(() => {
    async function fetchData() {
      await axios({
        method: "get",
        url: "http://localhost:3000/api/v2/Favourite",
        data: { fbUserId: `${userID}` },
      })
        .then((response) => setFavourites(response.data))
        .catch((err) => setAlert({ message: `${err}` }));
    }
    fetchData();
  }, [userID, favouriteToDelete]);

  const handleDelete = async (favID) => {
    await axios.delete(`http://localhost:3000/api/v2/Favourite/${favID}`);
    setFavouriteToDelete(favID);
  };

  if (!userID) {
    return (
      <div className="Favourites" style={{ marginTop: "60px" }}>
        <Alert message={alert} />
      </div>
    );
  }

  if (!favourites.length) {
    return (
      <div className="Favourites" style={{ marginTop: "60px" }}>
        <Alert message="Save some properties to add them to Favourites." />
      </div>
    );
  }

  return (
    <div
      className="Favourites"
      style={{
        marginTop: "80px",
      }}
    >
      {favourites.map((favourite) => {
        const listing = favourite.propertyListing;
        const favID = favourite._id;
        return (
          <FavouriteCard
            {...listing}
            favID={favID}
            key={favID}
            handleDelete={handleDelete}
            setFavouriteToDelete={setFavouriteToDelete}
          />
        );
      })}
    </div>
  );
};

export default Favourites;