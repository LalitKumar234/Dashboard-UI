import React, { useEffect, useState } from 'react'
import { BellIcon, SearchIcon } from '../../../Assets'
import { auth } from '../../../firebase.config'
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom'

const TopNav = () => {
    const [profilePic, setProfilePic] = useState('https://static.vecteezy.com/system/resources/previews/007/033/146/original/profile-icon-login-head-icon-vector.jpg')
    const [dropdown, setDropdown] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const profile = localStorage.getItem("photoURL")
        if (profile) {
            setProfilePic(JSON.parse(profile))
        }
    }, [])
    
    const handleLogout = () =>{
        localStorage.clear();
        signOut(auth).then(() => {
            navigate("/signin")
            setProfilePic('https://static.vecteezy.com/system/resources/previews/007/033/146/original/profile-icon-login-head-icon-vector.jpg')
        })
    }
    return (
        <div className="dashboard-header jus-between fx al-cnt">
            <h2>Dashboard</h2>
            <div className='fx-cnt gap-20'>
                <div className='searchBox fx-cnt'>
                    <input type="text" placeholder='Search...' />
                    <SearchIcon />
                </div>
                <BellIcon />
                <div className='profile-dropdown'>
                    <img className="userPic" onClick={()=>setDropdown(!dropdown)} src={profilePic && profilePic} alt="" />
                    { dropdown && <div className='dropDownitems right-position fx fx-d-col'>
                        {JSON.parse(localStorage.getItem("userName")) || 'UserName'}
                        <span className='btn-blue-text mt-20'
                        onClick={handleLogout}
                        >Logout</span>
                    </div>}
                </div>

            </div>
        </div>
    )
}

export default TopNav