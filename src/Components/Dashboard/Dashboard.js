import React, { useEffect } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Dashboard.css'

const Dashboard = () => {
    const { user, logOut } = useAuth();

    return (
       <div>
            <div class="container-fluid text-center">
      <div class="row content">
        <div class="col-sm-2 col-md-2 sidenav">
          <h3>DASHBOARD</h3>
          
          <Link to="/home">
                <button className='btn btn-warning'>Home</button>
             </Link>
             <br />
             <Link to="addpost">
                 <button className='btn btn-warning my-3'>Add a Post</button>
             </Link>
             <br />
             <Link to="mypost">
                 <button className='btn btn-warning'>MyPost</button>
             </Link>
              <br />
             <Link to="/home" className='btn btn-danger my-3'>
                 Home
             </Link>
             <br />
             <Link to="makeadmin" className='btn btn-danger my-3'>
                 MakeAdmin
             </Link>
             <br />
             <Link to="manageposts" className='btn btn-danger my-3'>
                 ManagePosts
             </Link>
             <br />
             {user.email ? (
             
             <div>
               <button
               onClick={logOut}
               className="btn btn btn-dark "
               type=""
               data-bs-toggle="tooltip"
               data-bs-placement="bottom"
             >
               Logout
             </button>
             </div>
           ) : (
             <NavLink to="/login">
               <button
                 className="btn btn-dark"
                 type=""
                 data-bs-toggle="tooltip"
                 data-bs-placement="bottom"
               >
                 Login
               </button>
             </NavLink>
           )}
           
        </div>
        <div className='col-md-8 my-2'>
         <Outlet></Outlet>
        </div>
       
      </div>
    </div>
    
       </div>

    );
};

export default Dashboard;