import React, { useState, useEffect } from 'react'
import {useNavigate, useParams} from "react-router-dom"
import axios from 'axios'
import NavBar from './navbar'
import '../css/form.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const EditData = () => {
    const [nama,setNama] = useState("")
    const [ids,setId] = useState("")
    const [server,setServer] = useState("")
    const [email,setEmail] = useState("")
    const [wa,setWa] = useState("")
    const [list, setList] = useState("")
    const [jenispembayaran,setJenispembayaran] = useState("")
    const { id } = useParams();

    const navigate = useNavigate()

    

    const getUserById = async () =>{
        try {
            const responnse = await axios.get(`https://profound-frangollo-349764.netlify.app/.netlify/functions/api/user/${id}`)
            setNama(responnse.data.nama)
            setEmail(responnse.data.email)
            setId(responnse.data.id)
            setServer(responnse.data.server)
            setWa(responnse.data.wa)
            setList(responnse.data.list)
            setJenispembayaran(responnse.data.jenispembayaran)
        } catch (error) {
            console.log(error)
            
        }
    }
    useEffect(()=>{
        getUserById();
    },[])

    const editData = async(e) =>{
        e.preventDefault()
        try {
            await axios.patch(`https://profound-frangollo-349764.netlify.app/.netlify/functions/api/user/${id}`,{
                nama,
                ids:id,
                server,
                email,
                wa,
                list,
                jenispembayaran
            })
            navigate('/admin')
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>

    
<div class="container">
  <h2>Top Up MLBB</h2>
  {/* <img src="images/mlbb.jpg"> */}
  <form onSubmit={editData}>
  <h3>Nama</h3>
  <div class="item" onclick="openPopup()">
    <input type="text" name="quantityItem1" placeholder="Nama" value={nama} onChange={(e) => setNama(e.target.value)} />
  </div>
  <h3>Masukkan ID</h3>
  <div class="item-box">
    <div class="item" onclick="openPopup()">
      <input type="text" name="quantityItem1" placeholder="ID Pengguna" value={id} onChange={(e) => setId(e.target.value)}/>
      <input type="text" name="quantityItem2" placeholder="Server" value={server} onChange={(e) => setServer(e.target.value)}/>
    </div>
  </div>

  <h3>Masukkan Alamat Email</h3>
  <div class="item" onclick="openPopup()">
    <input type="text" name="quantityItem1" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
  </div>
  <h3>Masukkan Nomer Whatsapp</h3>
  <div class="item" onclick="openPopup()">
    <input type="text" name="quantityItem1" placeholder="No WA" value={wa} onChange={(e) => setWa(e.target.value)} />
  </div>
  <h3> List Harga Diamonds</h3>
  {/* <div class="item-box">
    <div class="item" onclick="toggleSelection(this)">
      <h3>25 Diamonds + 3 Bonus</h3>
      <p value={list} onChange={(e) => setList(e.target.value)}>Rp 8.000</p>
    </div> */}

    {/* <div class="item" onclick="toggleSelection(this)">
      <h3>80 Diamonds + 8 Bonus</h3>
      <p value={list} onChange={(e) => setList(e.target.value)}>Rp 23.000</p>
    </div>

    <div class="item" onclick="toggleSelection(this)">
      <h3>160 Diamonds + 16 Bonus</h3>
      <p value={list} onChange={(e) => setList(e.target.value)}>Rp 46.000</p>
    </div>

    <div class="item" onclick="toggleSelection(this)">
      <h3>25 Diamonds + 3 Bonus</h3>
      <p value={list} onChange={(e) => setList(e.target.value)}>Rp 8.000</p>
    </div>

    <div class="item" onclick="toggleSelection(this)">
      <h3>217 Diamonds + 23 Bonus</h3>
      <p value={list} onChange={(e) => setList(e.target.value)}>Rp 62.000</p>
    </div>

    <div class="item" onclick="toggleSelection(this)">
      <h3>333 Diamonds + 37 Bonus</h3>
      <p value={list} onChange={(e) => setList(e.target.value)}>Rp 95.000</p>
    </div>

    <div class="item" onclick="toggleSelection(this)">
      <h3>467 Diamonds + 51 Bonus</h3>
      <p value={list} onChange={(e) => setList(e.target.value)}>Rp 132.000</p>
    </div>

    <div class="item" onclick="toggleSelection(this)">
      <h3>637 Diamonds + 79 Bonus</h3>
      <p value={list} onChange={(e) => setList(e.target.value)}>Rp 180.000</p>
    </div>

    <div class="item" onclick="toggleSelection(this)">
      <h3>936 Diamonds + 112 Bonus</h3>
      <p value={list} onChange={(e) => setList(e.target.value)}>Rp 264.000</p>
    </div>
  </div>
  <div>
    <button type='submit'>Pesan Sekarang</button>
  </div> */}
  <div class="field is-horizontal">
        <div class="field-label is-normal">
        </div>
        <div class="field-body">
            <div class="field is-narrow">
            <div class="control">
                <div class="select is-fullwidth">
                <select value={list} onChange={(e) => setList(e.target.value)}>
                    <option>25 Diamonds + 3 Bonus = Rp 8.000</option>
                    <option>80 Diamonds + 8 Bonus = Rp 23.000</option>
                    <option>160 Diamonds + 16 Bonus = Rp 46.000</option>
                    <option>217 Diamonds + 23 Bonus = Rp 62.000</option>
                </select>
                </div>
            </div>
            </div>
        </div>
        </div>
        <h3>Pilihan Pembayaran</h3>
  <div class="field is-horizontal">
        <div class="field-label is-normal">
        </div>
        <div class="field-body">
            <div class="field is-narrow">
            <div class="control">
                <div class="select is-fullwidth">
                <select value={jenispembayaran} onChange={(e) => setJenispembayaran(e.target.value)}>
                    <option>Dana</option>
                    <option>Shopeepay</option>
                    <option>Gopay</option>
                    <option>BRI</option>
                    <option>BCA</option>
                </select>
                </div>
            </div>
            </div>
        </div>
        </div>
<div>
<div>

</div>

    <button type='submit'>Pesan Sekarang</button>
  </div>
  </form>



  
   {/* <div>
    <div class="popup" id="successPopup">
      <div class="popup-content">
        <span class="close-popup" onclick="closePopup()">&times;</span>
        <p>Pesanan berhasil dibuat!</p>
        <div id="whatsappButton" class="whatsapp-button" onclick="redirectToWhatsApp()">Klik disini untuk melanjutkan Pembayaran</div>
      </div>
    </div>
  </div>  */}
</div>
</div>
  )
}
export default EditData