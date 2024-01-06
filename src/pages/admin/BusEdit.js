import React,{useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
// import avatar from "../assets/avatar.svg";

const BusEdit = () => {
  let {id}=useParams();
  const navigate = useNavigate();
  const { access } = useSelector((state) => state.user);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const [form, setForm] = useState({
    busNumber: '',
    departureCity: '',
    arrivalCity: '',
    departureTime: '',
    arrivalTime: '',
    avaialableSeats: '',
  });
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + access);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(`http://127.0.0.1:8000/bus/${id}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setData(result)
        setForm({
          busNumber: result.busNumber,
          departureCity: result.departureCity,
          arrivalCity: result.arrivalCity,
          departureTime: new Date(result.departureTime).toISOString().slice(0, 16),
          arrivalTime: new Date(result.arrivalTime).toISOString().slice(0, 16),
          avaialableSeats: result.avaialableSeats,
        });})
      .catch(error => setError(error));
  }, [access]);

  useEffect(() => {
    console.log(data);
  }, [data]);


  
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
      method: 'PUT',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch(`http://127.0.0.1:8000/bus/${id}/edit`, requestOptions)
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
            <h3>Update Existing Bus</h3>
          </div>
          </div>
          {data && (
            <div class="layout__body">
              <h2 class="auth__tagline">Book your Bus Tickets With Ease.</h2>
              <form class="form" onSubmit={handleSubmit}>
                <div class="form__group form__group">
                  <label for="">Bus Number</label>
                  <input id="bus_number" name="busNumber" type="text" value={form.busNumber} placeholder="" onChange={handleChange} />
                </div>
                <div class="form__group form__group">
                  <label for="room_name">Departure City</label>
                  <input id="dep_city" name="departureCity" type="text" value={form.departureCity} placeholder="" onChange={handleChange} />
                </div>
                <div class="form__group form__group">
                  <label for="room_name">Arrival City</label>
                  <input id="ar_city" name="arrivalCity" type="text" value={form.arrivalCity} placeholder="" onChange={handleChange} />
                </div>
                <div class="form__group form__group">
                  <label for="room_name">Departure Time</label>
                  <input id="dep_time" name="departureTime" type="datetime-local" value={form.departureTime ? new Date(form.departureTime).toISOString().slice(0, 16) : ""}  placeholder="" onChange={handleChange} />
                </div>
                <div class="form__group form__group">
                  <label for="room_name">Arrival Time</label>
                  <input id="ar_time" name="arrivalTime" type="datetime-local" value={form.arrivalTime ? new Date(form.arrivalTime).toISOString().slice(0, 16) : ""}  placeholder="" onChange={handleChange} />
                </div>
                <div class="form__group form__group">
                  <label for="room_name">Available Seats</label>
                  <input id="avaialableSeats" name="avaialableSeats" type="text" value={form.avaialableSeats} placeholder="" onChange={handleChange} />
                </div>
                
                <button class="btn btn--main" type="submit">Update Bus</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default BusEdit;