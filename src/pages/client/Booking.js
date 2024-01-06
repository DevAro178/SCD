import React,{useState} from "react";
import { Link,useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import avatar from "../assets/avatar.svg";

const Booking = () => {
  let {id}= useParams();
  const navigate = useNavigate();
  let {access} = useSelector((state) => state.user);
  const [form, setForm] = useState({
    seatNumber: '',
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + access);
  var formdata = new FormData();
  formdata.append("seatNumber", form.seatNumber);


    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch(`http://127.0.0.1:8000/booking/${id}`, requestOptions)
    .then(response => {
      if (response.ok) 
        navigate('/');
      else 
      alert("Seat already booked");
    })
    .catch(error => console.log('error', error));
  };
  
  return (
<main class="create-room layout">
      <div class="container">
        <div class="layout__box">
          <div class="layout__boxHeader">
          <div class="layout__boxTitle">
          <Link to={`/bus/${id}`}><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                <title>arrow-left</title>
                <path
                  d="M13.723 2.286l-13.723 13.714 13.719 13.714 1.616-1.611-10.96-10.96h27.625v-2.286h-27.625l10.965-10.965-1.616-1.607z">
                </path>
              </svg></Link> 
            <h3>Create Study Room</h3>
          </div>
          </div>
          <div class="layout__body">
            <h2 class="auth__tagline">Book your Bus Tickets With Ease.</h2>
            <form class="form" onSubmit={handleSubmit}>
              <div class="form__group form__group">
                <label for="seatNumber">Seat No.</label>
                <input id="seatNumber" name="seatNumber" type="text" placeholder="1, 3, 5" onChange={handleChange} />
              </div>
              
              <button class="btn btn--main" type="submit">
                Book Ticket
              </button>
            </form>

            <div class="auth__action">
              <p>Please make the payment at counter.</p>
              
            </div>
          </div>
        </div>
      </div>
    </main>
    
  );
};


export default Booking;