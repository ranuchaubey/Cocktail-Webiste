import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCocktails } from "../Redux/features/cocktailSlice";
import Spinner from "../Components/shared/Spinner";
import Searchbox from "../Components/Searchbox";
const HomePage = () => {
  const [modifyCocktails, setModifyCocktails] = useState([]);
  const dispatch = useDispatch();
  const { loading, cocktails, error } = useSelector((state) => ({
    ...state.app,
  }));
  useEffect(() => {
    dispatch(fetchCocktails());
  }, []);
  useEffect(() => {
    if (cocktails) {
      const newCocktails = cocktails.map((item) => {
        const { idDrink, strAlcoholic, strDrinkThumb, strGlass, strDrink } =
          item;
        return {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
      });
      setModifyCocktails(newCocktails);
    } else {
      setModifyCocktails([]);
    }
  }, [cocktails]);
  if (loading) {
    return <Spinner />;
  }
  if (!cocktails) {
    return (
      <Layout>
        <h2>No Cocktail Found With This Name...</h2>
      </Layout>
    );
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <>
      <div className="container">
        <div className="row">
          {modifyCocktails.map((item) => (
            <div className="col-md-3 mt-3 m-4" key={item.id}>
              <div
                className="card d-flex flex-column align-items-center justify-content-center"
                style={{ width: "18rem" }}
              >
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <h5 className="card-title">{item.glass}</h5>
                  <p className="card-text">{item.info}</p>
                  <Link to={`/product/${item.id}`} class="btn btn-info">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
