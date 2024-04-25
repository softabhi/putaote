import React from 'react'
import { FaMobileAlt } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBoltLightning, faNewspaper, faBriefcase } from '@fortawesome/free-solid-svg-icons'

const Middle = () => {
    return (
        <div className='container'>

            <div className='row'>


                <div className='col-3'>
                    <FaMobileAlt className='ms-3'/>
                    <h5>Mobile Recharge</h5>
                </div>
                <div className='col-3'>
                    <FontAwesomeIcon icon={faBoltLightning} className='ms-3'/>
                    <h5>Electricity Bill</h5>
                </div>



                <div className='col-3'>
                    <FontAwesomeIcon icon={faBriefcase} className='ms-3'/>
                     <h5>Lates Jobs</h5>
                </div>

                <div className='col-3'>
                    <FontAwesomeIcon icon={faNewspaper} className='ms-3'/>
                    <h5>Current News</h5>
                </div>


            </div>
        </div>
    )
}

export default Middle
