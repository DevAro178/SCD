import React,{useEffect, useState} from "react";
import logo from "../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Dashboard = () => {

  const { access } = useSelector((state) => state.user);
  const [data, setData] = useState(null);
  const [bookings, setBookings] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + access);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("http://127.0.0.1:8000/bus/", requestOptions)
      .then(response => response.json())
      .then(result => setData(result))
      .catch(error => setError(error));


      fetch("http://127.0.0.1:8000/bookings/", requestOptions)
      .then(response => response.json())
      .then(result => setBookings(result))
      .catch(error => setError(error));
  }, [access]);
  
  const handleDelete = async (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + access);
  
      var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
      };
  
      fetch(`http://127.0.0.1:8000/booking/${id}/delete`, requestOptions)
        .then(response => {
          if (response.ok) {
            return response.text();
          } else {
            throw new Error('Failed to delete nooking');
          }
        })
        .then(result => {
          alert("Booking Cancelled");
          window.location.reload();
        })
        .catch(error => {
          console.error('error', error);
        });
  }


  useEffect(() => {
    console.log(bookings);
  }, [bookings]);
  return (
    <div>
    <main class="layout layout--3">
      <div class="container">
        {/* <!-- Topics Start --> */}
        <div class="topics">
          
        </div>
        {/* <!-- Topics End -->

        <!-- Room List Start --> */}
        <div class="roomList">
        <div class="roomList__header">
          <div>
            <h2>Busses</h2>
            <p>{data && data.length} Busses available</p>
          </div>
        </div>
        {Array.isArray(data)  && data.map((item, index) => {
          const departureDate = new Date(item.departureTime);
          const formattedDate = departureDate.toLocaleDateString();
          const formattedTime = departureDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          const arrivalDate = new Date(item.arrivalDate);
          const formattedDate1 = departureDate.toLocaleDateString();
          const formattedTime1 = departureDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          return(
            <div key={index} class="roomListRoom">
            <div class="roomListRoom__header">
              <Link to={`/bus/${item.id}`} class="roomListRoom__author">
                <span>@{item.busNumber}</span>
              </Link>
              <div class="roomListRoom__actions">

              </div>
            </div>
            <div class="roomListRoom__content">
              <Link to={`/bus/${item.id}`}>{item.departureCity} - {item.arrivalCity}</Link>
              <p>
                Departure Time: {formattedDate} {formattedTime} <br/>
                Arrival Time: {formattedDate1} {formattedTime1} <br/>
              </p>
            </div>
            <div class="roomListRoom__meta">
              <Link to={`/bus/${item.id}`} class="roomListRoom__joined">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                <title>user-group</title>
                <path
                  d="M30.539 20.766c-2.69-1.547-5.75-2.427-8.92-2.662 0.649 0.291 1.303 0.575 1.918 0.928 0.715 0.412 1.288 1.005 1.71 1.694 1.507 0.419 2.956 1.003 4.298 1.774 0.281 0.162 0.456 0.487 0.456 0.85v4.65h-4v2h5c0.553 0 1-0.447 1-1v-5.65c0-1.077-0.56-2.067-1.461-2.584z"
                ></path>
                <path
                  d="M22.539 20.766c-6.295-3.619-14.783-3.619-21.078 0-0.901 0.519-1.461 1.508-1.461 2.584v5.65c0 0.553 0.447 1 1 1h22c0.553 0 1-0.447 1-1v-5.651c0-1.075-0.56-2.064-1.461-2.583zM22 28h-20v-4.65c0-0.362 0.175-0.688 0.457-0.85 5.691-3.271 13.394-3.271 19.086 0 0.282 0.162 0.457 0.487 0.457 0.849v4.651z"
                ></path>
                <path
                  d="M19.502 4.047c0.166-0.017 0.33-0.047 0.498-0.047 2.757 0 5 2.243 5 5s-2.243 5-5 5c-0.168 0-0.332-0.030-0.498-0.047-0.424 0.641-0.944 1.204-1.513 1.716 0.651 0.201 1.323 0.331 2.011 0.331 3.859 0 7-3.141 7-7s-3.141-7-7-7c-0.688 0-1.36 0.131-2.011 0.331 0.57 0.512 1.089 1.075 1.513 1.716z"
                ></path>
                <path
                  d="M12 16c3.859 0 7-3.141 7-7s-3.141-7-7-7c-3.859 0-7 3.141-7 7s3.141 7 7 7zM12 4c2.757 0 5 2.243 5 5s-2.243 5-5 5-5-2.243-5-5c0-2.757 2.243-5 5-5z"
                ></path>
              </svg>
                {item.avaialableSeats} Seats Available
              </Link>
              <div style={{display:'flex'}}>
                <p class="roomListRoom__topic">{item.departureCity}</p>
                <p class="roomListRoom__topic">{item.arrivalCity}</p>
              </div>
            </div>
          </div>
          );
})}
        
      </div>
        {/* <!-- Room List End -->

        <!-- Activities Start --> */}
        <div class="activities">
          <div class="activities__header">
            <h2>Booked Tickets</h2>
          </div>


          {Array.isArray(bookings)  && bookings.map((item, index) => {
          const departureDate = new Date(item.bus_id.departureTime);
          const formattedDate = departureDate.toLocaleDateString();
          const formattedTime = departureDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          const arrivalDate = new Date(item.bus_id.arrivalDate);
          const formattedDate1 = departureDate.toLocaleDateString();
          const formattedTime1 = departureDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          return(
            <div class="activities__box">
            <div class="activities__boxHeader roomListRoom__header">
              <Link to={`/bus/${item.bus_id.id}`} class="roomListRoom__author">
                <p>
                  @{item.bus_id.busNumber}
                </p>
              </Link>
              <div class="roomListRoom__actions">
                <a onClick={() => handleDelete(item.id)} style={{cursor:'pointer'}}>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <title>Cancel Booking</title>
                    <path
                      d="M27.314 6.019l-1.333-1.333-9.98 9.981-9.981-9.981-1.333 1.333 9.981 9.981-9.981 9.98 1.333 1.333 9.981-9.98 9.98 9.98 1.333-1.333-9.98-9.98 9.98-9.981z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div><p>Booking Id “<Link to={`/bus/${item.bus_id.id}`}>{item.id}</Link>”</p>
            <div class="activities__boxContent">
              
              <div class="activities__boxRoomContent">
                Seats: {item.seatNumber}<br />
                

              </div>
            </div>
          </div>
          );
})}





          
          {/* <div class="activities__box">
            <div class="activities__boxHeader roomListRoom__header">
              <a href="profile.html" class="roomListRoom__author">
                <p>
                  @bus_id
                  <span>BooketimeStamp</span>
                </p>
              </a>
              <div class="roomListRoom__actions">
                <a href="#">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <title>Cancel Booking</title>
                    <path
                      d="M27.314 6.019l-1.333-1.333-9.98 9.981-9.981-9.981-1.333 1.333 9.981 9.981-9.981 9.98 1.333 1.333 9.981-9.98 9.98 9.98 1.333-1.333-9.98-9.98 9.98-9.981z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="activities__boxContent">
              <p>Booking Id “<a href="room.html">Unique Id Here</a>”</p>
              <div class="activities__boxRoomContent">
                Seats: 1, 3, 5<br />
              </div>
            </div>
          </div> */}
        </div>
        {/* <!-- Activities End --> */}
      </div>
    </main>

    </div>
  );
};

export default Dashboard;