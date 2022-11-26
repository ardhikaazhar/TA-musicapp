import React,{useEffect, useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ArtistDetail from '../components/ArtistDetail';
import "./ProfileDetail.css";

export default function ProfileDetail() {
    const [data, setData] = useState([]);
    const { id } = useParams();
  
    useEffect(() => {
      const getData = async () => {
        try {
  
        const result = await axios.get("https://6380823f8efcfcedac06ba2e.mockapi.io/artist/" + id);
        setData(result.data);
      }
      catch (error) {}
      }
      getData();
    }, [id]);
  
    return (
      <div>
          <h1>Profile "{data.name}"</h1>
          {data && <ArtistDetail data={data} />}  
      </div>
    )
  }
