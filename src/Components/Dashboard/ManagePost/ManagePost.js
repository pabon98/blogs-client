import React, {useEffect, useState} from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const ManagePost = () => {
    const { isLoading } = useAuth();
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        fetch("https://blogserver-1d02.onrender.com/allposts")
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div>
            <h1>Here is the posts admin.</h1>
            {!isLoading ?
                <div style={{ marginBottom: '300px' }} className='container border p-2 rounded-3 mt-5'>
                    <div id='table-container'>
                        <table>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Delete</th>
                            </tr>
                            {/* {
                                cars.map(car => <ManageSinglePost
                                    key={car._id}
                                    car={car}
                                ></ManageSinglePost>)
                            } */}
                        </table>
                    </div>
                </div>
                :
                <div style={{ marginBottom: '300px' }} className='container text-center mt-5'>
                    <Spinner animation="border" variant="dark" />
                </div>
            }
        </div>
    );
};

export default ManagePost;