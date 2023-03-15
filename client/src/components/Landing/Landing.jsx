import React, { useEffect } from "react";
import "./landing.css";
import { useNavigate } from "react-router-dom";
import { ADD_LOCATION } from "../../utils/mutations";
import { useMutation } from "@apollo/client";


function Landing() {
  const navigate = useNavigate();
  const [addLocation] = useMutation(ADD_LOCATION);

  async function handleSearch() {
    const searchText = document.getElementById("place-search-input").value;
    const response = await fetch(`/api/mapquest/${searchText}`);
    const data = await response.json();
    console.log(data);
    if (data.results && data.results[0] && data.results[0].locations.length > 0) {
      const city = data.results[0].locations[0];
      console.log(city);
      try {
        await addLocation({
          variables: {
            name: city.adminArea5,
            departments: "",
            officers: "",
            searchQuery: searchText,
            city: city.adminArea5,
            state: city.adminArea3,
            country: city.adminArea1
          }
        });
        navigate(`/officer`);
      } catch (e) {
        console.error(e);
      }
    } else {
      console.log("No results found.");
    }
  }
  

  useEffect(() => {
    // Initialize Place Search widget
    const script = document.createElement("script");
    script.src =
      "https://api.mqcdn.com/sdk/place-search-js/v1.0.0/place-search.js";
    script.async = true;
    document.body.appendChild(script);

    const link = document.createElement("link");
    link.href =
      "https://api.mqcdn.com/sdk/place-search-js/v1.0.0/place-search.css";
    link.type = "text/css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    script.onload = () => {
      const input = document.getElementById("place-search-input");
      window.placeSearch({
        key: "eUGo5JTnLcTCgEECYxeQk2DgTECbXSHm",
        container: input,
        collection: ["address", "adminArea"],
        options: {
          maxResults: 5,
        },
      });
    };
  }, []);

  return (
    <div className="landing-container">
      <div className="blur">
        <div className="title">
          <div className="title-1">
            <p>RATE</p>
          </div>
          <div className="title-2">
            <p>A COP</p>
          </div>
        </div>
        <div className="start">
          <p>GET STARTED:</p>
        </div>
        <div className="direction-container">
          <div className="directions">
            <p>Search by State, City, or Zip-code</p>
          </div>
          <div className="input-form">
            <input
              id="place-search-input"
              type="search"
              aria-label="search"
              placeholder="State, City, Zip-Code"
            />
          </div>
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;

