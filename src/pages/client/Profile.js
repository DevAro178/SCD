import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
  <main class="profile-page layout layout--3">
    <div class="container">
      {/* <!-- Topics Start --> */}
      <div class="topics">
        
      </div>
      {/* <!-- Topics End -->

      <!-- Room List Start --> */}
      <div class="roomList">
        <div class="profile">
          <div class="profile__avatar">
            <div class="avatar avatar--large active">
              <img src="https://randomuser.me/api/portraits/men/11.jpg" />
            </div>
          </div>
          <div class="profile__info">
            <h3>Dennis Kardasian Ivy</h3>
            <p>@dennis_ivy</p>
            <a href="edit-user.html" class="btn btn--main btn--pill">Edit Profile</a>
          </div>
          <div class="profile__about">
            <h3>About</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illo tenetur
              facilis sunt nemo debitis quisquam hic atque aut? Ducimus alias placeat optio
              accusamus repudiandae quis ab ex exercitationem rem?
            </p>
          </div>
        </div>

        
      </div>
      {/* <!-- Room List End -->

      <!-- Activities Start --> */}
        <div class="activities">
          <div class="activities__header">
            <h2>Booked Tickets</h2>
          </div>
          <div class="activities__box">
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
          </div>
          <div class="activities__box">
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
          </div>
          
        </div>
      {/* <!-- Activities End --> */}
    </div>
  </main>

    </div>
  );
};

export default Profile;