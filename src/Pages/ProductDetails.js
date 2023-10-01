import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../Components/Layout";
import { fetchCocktail } from "../Redux/features/cocktailSlice";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../Components/shared/Spinner";
const ProductDetails = () => {
  const [modifyCocktails, setModifyCocktails] = useState([]);
  const dispatch = useDispatch();
  const { loading, cocktail } = useSelector((state) => ({
    ...state.app,
  }));
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchCocktail({ id }));
  }, [dispatch, id]);
  useEffect(() => {
    if (cocktail.length > 0) {
      const {
        strDrink: name,
        strDrinkThumb: image,
        strAlcoholic: info,
        strCategory: category,
        strGlass: glass,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = cocktail[0];
      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ];
      const newCocktail = { name, image, info, category, glass, ingredients };
      setModifyCocktails(newCocktail);
    } else {
      setModifyCocktails(null);
    }
  }, [id, cocktail]);
  if (!modifyCocktails) {
    return <h2>No Cocktail Details</h2>;
  } else {
     const { name, image, info, category, glass, ingredients } = modifyCocktails;
    return (
      <>
        {loading ? (
          <Spinner />
        ) : (
          <Layout>
            <div className="container mt-5">
              <Link to="/" className="btn btn-danger">
                Go Back
              </Link>
            </div>
            <div className="row mt-4">
              <div className="col-md-5">
                <img src={image} alt={name} height={300} width={400} />
              </div>
              <div className="col-md-5">
                <h2>Name : {name}</h2>
                <p className="mt-1">Category : {category}</p>
                <p>Info : {info}</p>
                <p>Glass : {glass}</p>
                <p>Ingredients : {ingredients + " ,"}</p>
              </div>
            </div>
          </Layout>
        )}
      </>
    );
  }
};

export default ProductDetails;
