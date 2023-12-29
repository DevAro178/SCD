import React from "react";
import { Link } from "react-router-dom";
// import avatar from "../assets/avatar.svg";

const BusAdd = () => {
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
            <form class="form" action="#">
              <div class="form__group form__group">
                <label for="fullname">Bus Number</label>
                <input id="bus_number" name="bus_number" type="text" placeholder="" />
              </div>
              <div class="form__group form__group">
                <label for="room_name">Departure City</label>
                <input id="dep_city" name="dep_city" type="text" placeholder="" />
              </div>
              <div class="form__group form__group">
                <label for="room_name">Arrival City</label>
                <input id="ar_city" name="ar_city" type="text" placeholder="" />
              </div>
              <div class="form__group form__group">
                <label for="room_name">Departure Time</label>
                <input id="dep_time" name="dep_time" type="text" placeholder="" />
              </div>
              <div class="form__group form__group">
                <label for="room_name">Arrival Time</label>
                <input id="ar_time" name="ar_time" type="text" placeholder="" />
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