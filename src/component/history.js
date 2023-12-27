import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ListData = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        getData()
    },[])
    
    const getData = async() =>{
        const responsed = await axios.get('https://profound-frangollo-349764.netlify.app/.netlify/functions/api/user/admin')
        setData(responsed.data)
        console.log(responsed.data)
    }
    const deleteData = async(id) =>{
        try {
            await axios.delete( `https://profound-frangollo-349764.netlify.app/.netlify/functions/api/user/${id}`,data,
            {headers: {
                'Content-Type': 'application/json',
            },
        })
            getData();
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="columns">
        <div className="column is-half">
            <table className='table is-striped is-fullwidth mt-5'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Status</th>
                        <th>Alamat</th>
                        <th>Email</th>
                        <th>Universitas</th>
                        <th>No.Telp</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user, index)=>{
                        return (
                            <tr key={user._id}>
                            <td>{index + 1}</td>
                            <td>{user.nama}</td>
                            <td>{user.id}</td>
                            <td>{user.server}</td>
                            <td>{user.email}</td>
                            <td>{user.wa}</td>
                            <td>{user.list}</td>
                            <td>{user.jenispembayaran}</td>
                            <td>
                                <Link to={`/edit/${user._id}`} className='button is-success is-small'>Edit Data</Link>
                                <button onClick={() => deleteData(user._id)} className='button is-success is-small'>delete</button>
                            </td>
                        </tr>
                        )
                        
                    })}
                </tbody>
            </table>
            <div>
                <Link to={'/add'} className='button is-success'>Add New Data</Link>
            </div>
        </div>
    </div>
  )
}

export default ListData;