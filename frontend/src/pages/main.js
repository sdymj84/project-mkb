import React from "react";
import Nav2 from "../components/global/Nav2";
import SearchBar from "../components/global/SearchBar";
import Hero from "../components/global/Hero";
import RecipesListing from "../components/global/RecipesListing";
import Footer from "../components/global/Footer";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <SearchBar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-11">
            <Hero
              title="A selection of popular recipes!"
              content="This is a modified jumbotron that occupies the entire horizontal space of its parent."
            />
            {/* When pressing edit icon, it redirects to recipe update form page with the recipe id */}
            <Link to={"/recipe/create"}>
              <button className="btn btn-success">Create Recipe</button>
            </Link>
            <RecipesListing />
            <RecipesListing />
            <RecipesListing />
          </div>
          <div className="col-md-1">
            <Nav2 />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
