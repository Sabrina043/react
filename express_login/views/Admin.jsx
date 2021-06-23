import React, {usestate, useEffect} from 'react';
import axios from 'axios'

const Admin = () => {

    const [users, setUsers] = useState(null);

    useEffect(async () =>{

        try{

            const token = localStorage.getItem("token")
            const response = await axios.get
        }
    })
    return (
        <div>
            
        </div>
    );
}

export default Admin;
