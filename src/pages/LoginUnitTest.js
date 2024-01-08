import React,{useEffect, useState} from "react";
import logo from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


// import avatar from "../assets/avatar.svg";

const LoginUnitTest = () => {
    var formdata = new FormData();
    formdata.append("username", "muz");
    formdata.append("password", "Admin@123");

    var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
    };

    fetch("http://127.0.0.1:8000/token/", requestOptions)
    .then(response => {
        if(response.status === 200) {
            console.log('Test case passed');
        } else {
            console.log('Test case failed');
        }
        return response.text();
    })
    .catch(error => console.log('error', error));
  return (
    <main>
        see the console
    </main>
  );
};

export default LoginUnitTest;