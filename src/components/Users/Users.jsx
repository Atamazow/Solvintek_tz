import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import User from "./User";
import style from './Users.module.css'
import {addItem} from "../../redux/slices/userSlice";
function Users(props) {
    const users = useSelector(state => state.usersSlice.users)
    const dispatch = useDispatch()
    const [renderUsers,setRenderUsers] = useState([])
    const handleClick = () => {
        setRenderUsers(prev => [...prev, ...users.slice(prev.length, prev.length + 4)])
    }
    useEffect(() => {
        setRenderUsers([...users.slice(0,4)])
    },[users])
    const setUser = (user) => {
        dispatch(addItem(user))
    }
     return (
        <div >
            <div className={style.wrapper}>
                {renderUsers.map((obj) => <User onClick={() => setUser(obj)} {...obj}/>)}
            </div>
            {
                users.length !== renderUsers.length && <div className={style.btn}>
                    <button onClick={handleClick} className={style.lean_btn}>lean more...</button>
                </div>
            }

        </div>
    );
}

export default Users;