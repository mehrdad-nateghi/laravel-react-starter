import {useEffect, useState} from "react";
import axiosClient from "../axios-client.js";

export default function Users(){

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState([]);

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = () => {
        setLoading(true);
        axiosClient.get('/users')
            .then(({data}) => {
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            })
    }

    return (
        <div>
            Users
        </div>
    )
}