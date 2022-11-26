import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CardDetail from '../components/CardDetail';
import "./TrackDetail.css";


export default function TrackDetail() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {

      const result = await axios.get("https://6380823f8efcfcedac06ba2e.mockapi.io/track/" + id);
      setData(result.data);
    }
    catch (error) {}
    }
    getData();
  }, [id]);

  return (
    <div>
        <h1>Detail "{data.track}"</h1>
        {data && <CardDetail data={data} />}  
    </div>
  )
}
