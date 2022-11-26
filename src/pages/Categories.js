import React, { useEffect } from 'react'
import CategoriesCard from '../components/CategoriesCard'
import "./Categories.css"
import axios from 'axios'

export default function Categories() {
    const [data, setData] = React.useState([]);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    useEffect (() => {
        const getData = async () => {
            setError(false);
            setLoading(true);
            try {
                const result = await axios.get("https://6380823f8efcfcedac06ba2e.mockapi.io/genres");
                setData(result.data);
            } catch (error) {
                setError(true);
            }
            setLoading(false);
        }
        getData();
    }, []);

    if (error) {
        return <h2>Error</h2>;
    }
    if (loading) {
        return <h2>Loading...</h2>;
    }
  return (
    <div>
        <h1>Categories</h1>
        <div className="categories-container">
            {data.map((genre) => (
                <CategoriesCard key={genre.id} genre={genre} />
            ))}
    </div>
    </div>
  )
}
