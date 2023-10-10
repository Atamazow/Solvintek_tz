import React, { useState } from "react";
import style from "./ModalOkno.module.css";
import CloseIcon from "../../assets/Close_Icon";
function ModalOkno({ _id, picture, name, email, about }) {

  console.log(name)
  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };
  // const handleBackdropClick = (e) => {
  //   if (e.target === e.currentTarget) {
  //     closeModal();
  //   }
  // };
  return (
    <div>

        <div className={style.modal_backdrop} >
          <div className={style.close} >
            <CloseIcon/>
          </div>
          <div className={style.modal_content}>
            <h2>Модальное окно</h2>
            <p>Содержимое модального окна...</p>

          </div>
        </div>
    </div>
  );
}

export default ModalOkno;
