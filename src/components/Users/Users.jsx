import React from 'react';
import {useSelector} from "react-redux";
import User from "./User";
import style from './Users.module.css'
function Users(props) {
    const users = useSelector(state => state.usersSlice.users)
     return (
        <div >
            <div className={style.wrapper}>
                {users.map((obj) => <User {...obj}/>)}
            </div>
        </div>
    );
}

export default Users;