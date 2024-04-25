import React from 'react'
// import { FaMobileAlt, FaRocketchat } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faList ,faUsers, faMessage } from '@fortawesome/free-solid-svg-icons'
import './footer.css';

const Footer = () => {
  return (
    <div className='container footer'>

    <div className='row'>


        <div className='col-2'>
        <FontAwesomeIcon icon={faHouse} />
            <h5>Home</h5>
        </div>
        <div className='col-2'>
            <FontAwesomeIcon icon={faUser} className='ms-3'/>
            <h5>Profile</h5>
        </div>

        <div className='col-3'>
            <FontAwesomeIcon icon={faUsers} className=''/>
            <h5>Admine</h5>
        </div>



        <div className='col-2'>
            <FontAwesomeIcon icon={faList} className='ms-3'/>
             <h5>followrs</h5>
        </div>

        <div className='col-2'>
            <FontAwesomeIcon icon={faMessage} className='ms-3'/>
            <h5>Chat</h5>
        </div>


    </div>
</div>
  )
}

export default Footer
