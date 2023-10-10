import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {fetchUsers} from "../redux/slices/slices";
import Users from "../components/Users/Users";
import ModalOkno from "../components/ModalOkno/ModalOkno";

function Home(props) {
    const dispatch = useDispatch()
    const getUsers = () => {
        dispatch(fetchUsers())
    }
    useEffect(() => {
        getUsers()
    },[])
    return (
        <div>
            <ModalOkno/>
            <Users/>
        </div>
    );
}

export default Home;