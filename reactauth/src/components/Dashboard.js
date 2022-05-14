import React, { useEffect, useState } from 'react'
import AuthUser from './AuthUser'
function Dashboard() {
    const { http } = AuthUser();
    const [userDetail, setUserDetail] = useState('');
    useEffect(() => {
        fetchUserDetail();
    }, [])
    const fetchUserDetail = () => {
        http.post('/me').then((res) => {
            setUserDetail(res.data);
        })
    }

    function renderElement() {
        if (userDetail) {
            return <div className='container pt-5'>
                <h4>Name</h4>
                <p>{userDetail.name}</p>
                <h4>Email</h4>
                <p>{userDetail.email}</p>
            </div>
        } else {
            return <p className='container'>Loading...</p>;
        }
    }
    return (
        <div>
            {renderElement()}
        </div>
    )
}

export default Dashboard