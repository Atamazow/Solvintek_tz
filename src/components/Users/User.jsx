import React, { useState } from "react";
import style from "./Users.module.css";

function User({ _id, picture, name, email, about }) {

    return (
        <div   className={style.user_block_list}>
            <div >
                <img className={style.image} src={picture} alt="" />
            </div>
            <div className={style.user_block}>
                <span className={style.email}>name:</span> {name}
                <div className="text">
                    <span className={style.email}>email:</span> {email}
                </div>
            </div>
         </div>

    );
}

export default User;




// const onClickAdd = () => {
//   const obj = {
//     picture,
//     age,
//     name,
//     email,
//     about,
//   };
//   dispatch(addItems(obj));
// };