import {useEffect, useState} from 'react';
import axios from 'axios';

const DataFetcher = ({userId}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


useEffect(() => {
    const fetchData = async() => {
        try{
            setLoading(true);
            setError(null);

            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/users/${userId}`
            );
            setData(response.data);
        } catch (err){
            setError('Error');
        }finally{
            setLoading(false);
        }
    };
    fetchData();
}, [userId]);

if (loading) return <p className='status'> Loading... </p>;
if (error) return <p className='error'>{error}</p>;

return(
    <div className='card'>
       <h2>{data.name}</h2>
       <p>{data.email}</p>
       <p>{data.phone}</p>
    </div>
);
};
export default DataFetcher;

