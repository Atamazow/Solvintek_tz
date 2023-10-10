import React from "react";
import style from "./ModalOkno.module.css";
import CloseIcon from "../../assets/Close_Icon";
import { useDispatch } from "react-redux";
import { reset } from "../../redux/slices/userSlice";
function ModalOkno({ selectedUser }) {
  const { age, picture, name, email, about, phone } = selectedUser;
  const dispatch = useDispatch();

  const close = () => dispatch(reset());
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      close();
    }
  };
  return (
    <div>
      <div className={style.modal_backdrop} onClick={handleBackdropClick}>
        <div onClick={close} className={style.close}></div>
        <div className={style.modal_content}>
          <div onClick={close} className={style.close}>
            <CloseIcon />
          </div>
          <div>
            <img className={style.img_modal} src={picture} alt="" />
          </div>
          <div className={style.content_data}>
            <div className={style.wrapper_text}>
              <div className={style.text_one}>
                <div>name: </div>
                <div>age: </div>
                <div>email: </div>
                <div>phone: </div>
                <div>about: </div>
              </div>
              <div className={style.text_two}>
                <div>{name}</div>
                <div>{age}</div>
                <div>{email}</div>
                <div>{phone}</div>
                <div>{about}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalOkno;
