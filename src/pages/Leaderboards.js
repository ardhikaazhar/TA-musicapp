import React,{useEffect,useState} from 'react';
import axios from 'axios';
import TrackCard from '../components/TrackCard';

export default function Leaderboards() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setError(false);
      setLoading(true);
      try {
        const result = await axios.get("https://6380823f8efcfcedac06ba2e.mockapi.io/track?sortBy=likes&order=desc");
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
      <h1>Most Liked Song</h1>
      <div className="musicbycategory-container">
        {data && data.map((track) => <TrackCard key={track.id} track={track} />)}
      </div>

    </div>
  )
}
