import React from "react";
import "./Sign.css";

function Sign() {
  return (
    <div>
      <main className="container">
        <section className="container2">
          <form action="">
            <div className="first-last">
              <input
                type="text"
                placeholder="First Name"
                id="first"
                autocomplete="off"
              ></input>
              <input
                type="text"
                placeholder="Last name"
                name=""
                id="last"
                autocomplete="off"
              ></input>
            </div>

            <div className="reg-email">
              <input type="email" placeholder="Email" id="email"></input>
            </div>

            <div className="reg-password">
              <input type="password" placeholder="New password"></input>
            </div>

            <div className="sign-up1">
              <button className="button" href="#">
                Sign Up
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Sign;
