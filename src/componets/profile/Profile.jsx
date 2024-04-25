import './profile.css'
import { FaCircleUser } from "react-icons/fa6";
import pic from '../assets/jacktet.webp'
function Profile() {
    return (
        <>
            <div className="container-fluid profile" >
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><FaCircleUser id='icon' />
                            <span className="ms-3">Account Setting</span>
                        </a>

                    </div>
                </nav>

            </div>

            <div className='ms-3'>
                <div className='d-flex'>
                    <img src={pic} alt="" className='pro_img'/>

                    <div className='pro_details ms-3'>
                        <h5>David Warner</h5>
                        <p>davidkrm@gmail.com</p>
                    </div>

                </div>

                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatum beatae numquam, et pariatur quasi quod recusandae fuga. Fugit nemo molestias rem officia?
                </p>
            </div>
        </>
    )
}

export default Profile
