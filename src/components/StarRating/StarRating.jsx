import React from "react";
import starSolid from "../../assets/star-solid.svg";
import starRegular from "../../assets/star-regular.svg";
import "./StarRating.css";

function generateStarRating(rating) {
  switch (Math.floor(rating)) {
    case 1:
      return (
        <div className="star-rating">
          <img src={starSolid} alt="star solid" />
          <img src={starRegular} alt="star regular" />
          <img src={starRegular} alt="star regular" />
          <img src={starRegular} alt="star regular" />
          <img src={starRegular} alt="star regular" />
        </div>
      );
    case 2:
      return (
        <div className="star-rating">
          <img src={starSolid} alt="star solid" />
          <img src={starSolid} alt="star solid" />
          <img src={starRegular} alt="star regular" />
          <img src={starRegular} alt="star regular" />
          <img src={starRegular} alt="star regular" />
        </div>
      );
    case 3:
      return (
        <div className="star-rating">
          <img src={starSolid} alt="star solid" />
          <img src={starSolid} alt="star solid" />
          <img src={starSolid} alt="star solid" />
          <img src={starRegular} alt="star regular" />
          <img src={starRegular} alt="star regular" />
        </div>
      );
    case 4:
      return (
        <div className="star-rating">
          <img src={starSolid} alt="star solid" />
          <img src={starSolid} alt="star solid" />
          <img src={starSolid} alt="star solid" />
          <img src={starSolid} alt="star solid" />
          <img src={starRegular} alt="star regular" />
        </div>
      );
    case 5:
      return (
        <div className="star-rating">
          <img src={starSolid} alt="star solid" />
          <img src={starSolid} alt="star solid" />
          <img src={starSolid} alt="star solid" />
          <img src={starSolid} alt="star solid" />
          <img src={starSolid} alt="star solid" />
        </div>
      );
    default:
      return (
        <div className="star-rating">
          <img src={starSolid} alt="star solid" />
          <img src={starRegular} alt="star regular" />
          <img src={starRegular} alt="star regular" />
          <img src={starRegular} alt="star regular" />
          <img src={starRegular} alt="star regular" />
        </div>
      );
  }
}

const StarRating = ({ rating }) => {
  return <>{generateStarRating(rating)}</>;
};

export default StarRating;
