import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import jobIcon from '../../assets/icons8-job-application-3d/icons8-job-application-94.png'

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('Sign Out Successful.');
            })
            .catch(error => {
                console.log('Failed to Sign Out.',error)
            })
    }
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/findJob'>Find a job</NavLink></li>
        <li><NavLink to='/recruiters'>Recruiters</NavLink></li>
        <li><NavLink to='/candidates'>Candidates</NavLink></li>
        <li><NavLink to='/pages'>Pages</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        <li><NavLink to='/Contact'>Contact</NavLink></li>
        
        
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm font-serif font-extrabold text-cyan-600">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>

                <NavLink to="/" className="items-center">
                    <img className='w-14' src={jobIcon} alt="jobIcon" />
                    <h3 className='font-serif font-extrabold text-xs text-cyan-600'>Job Portal</h3>
                </NavLink>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                {
                    user ? <>
                        <Link to='/' className='btn text-cyan-600'onClick={handleSignOut}>Sign Out</Link>
                    </> : <>
                        <Link to='/signup' className='btn text-cyan-600'>SignUp</Link>
                        <Link to='/signin' className='btn text-cyan-600'>SignIn</Link>
                        </>

                }
            </div>
        </div>
    );
};

export default Navbar;