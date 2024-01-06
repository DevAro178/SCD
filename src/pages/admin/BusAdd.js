import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link,useNavigate } from "react-router-dom";
// import avatar from "../assets/avatar.svg";

const BusAdd = () => {
  const navigate = useNavigate();
  let {access}=useSelector((state)=>state.user);
  const [form, setForm] = useState({
    busNumber: '',
    departureCity: '',
    arrivalCity: '',
    departureTime: '',
    arrivalTime: '',
    avaialableSeats: '',
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
  for (let key in form) {
    if (key === 'departureTime' || key === 'arrivalTime') {
      // Convert the date-time to the desired format
      let date = new Date(form[key]);
      formdata.append(key, date.toISOString());
    } else {
      formdata.append(key, form[key]);
    }
  }

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch("http://127.0.0.1:8000/bus/add", requestOptions)
      .then(response => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error('Failed to add bus');
        }
      })
      .then(result => {
        console.log(result);
        navigate('/admin');
      })
      .catch(error => {
        console.error('error', error);
        alert(error.message);
      });
  };
  return (
    <main class="create-room layout">
      <div class="container">
        <div class="layout__box">
          <div class="layout__boxHeader">
          <div class="layout__boxTitle">
          <Link to={`/admin`}><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                <title>arrow-left</title>
                <path
                  d="M13.723 2.286l-13.723 13.714 13.719 13.714 1.616-1.611-10.96-10.96h27.625v-2.286h-27.625l10.965-10.965-1.616-1.607z">
                </path>
              </svg></Link> 
            <h3>Add a New Bus</h3>
          </div>
          </div>
          <div class="layout__body">
            <h2 class="auth__tagline">Book your Bus Tickets With Ease.</h2>
            <form class="form" onSubmit={handleSubmit}>
              <div class="form__group form__group">
                <label for="busNumber">Bus Number</label>
                <input id="busNumber" name="busNumber" type="text" placeholder="" onChange={handleChange} />
              </div>
              <div class="form__group form__group">
                <label for="departureCity">Departure City</label>
                <input id="departureCity" name="departureCity" type="text" placeholder="" onChange={handleChange} />
              </div>
              <div class="form__group form__group">
                <label for="arrivalCity">Arrival City</label>
                <input id="arrivalCity" name="arrivalCity" type="text" placeholder="" onChange={handleChange} />
              </div>
              <div class="form__group form__group">
                <label for="departureTime">Departure Time</label>
                <input id="departureTime" name="departureTime" type="datetime-local" placeholder="" onChange={handleChange} />
              </div>
              <div class="form__group form__group">
                <label for="arrivalTime">Arrival Time</label>
                <input id="arrivalTime" name="arrivalTime" type="datetime-local" placeholder="" onChange={handleChange} />
              </div>
              <div class="form__group form__group">
                <label for="avaialableSeats">Available Seats</label>
                <input id="avaialableSeats" name="avaialableSeats" type="text" placeholder="" onChange={handleChange} />
              </div>
              
              <button class="btn btn--main" type="submit">Add Bus</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BusAdd;