import React from 'react'
import { Link } from "react-router-dom";

export default function CategoriesCard({genre}) {
  return (
    <Link to={`/categories/${genre.genre}`}>
    <div>
        <div className="category-container">
            <img src={genre.image} alt="genre image" />
            <h2>{genre.genre}</h2>
        </div>
    </div>
    </Link>
  )
}
