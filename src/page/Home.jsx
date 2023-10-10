import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../redux/slices/slices";
import Users from "../components/Users/Users";
import ModalOkno from "../components/ModalOkno/ModalOkno";

function Home(props) {
    const dispatch = useDispatch()
    const selectedUser = useSelector(state => state.userSlice.user);
    const getUsers = () => {
        dispatch(fetchUsers())
    }
    useEffect(() => {
        getUsers()
    },[])
    return (
        <div>
            {selectedUser && <ModalOkno selectedUser={selectedUser} />}
            <Users/>
        </div>
    );
}

export default Home;
