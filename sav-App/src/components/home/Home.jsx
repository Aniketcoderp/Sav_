import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import refress from "../home/autorenew_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [googleCaptchaVerified, setGoogleCaptchaVerified] = useState(false);
  const [customCaptchaVerified, setCustomCaptchaVerified] = useState(false);
  const [data, setData] = useState([]);
  const [captchaText, setCaptchaText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const navigate = useNavigate();

  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const captcha = Array.from({ length: 6 }, () =>
      chars.charAt(Math.floor(Math.random() * chars.length))
    ).join("");
    setCaptchaText(captcha);
    const canvas = document.getElementById("captchaCanvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "20px Arial";
    ctx.fillStyle = "#000";
    ctx.fillText(captcha, 10, 25);
  };

  const validateCustomCaptcha = () => {
    console.log("Generated CAPTCHA:", captchaText);
    console.log("User Input:", userInput);
    if (userInput.trim() === captchaText) {
      setCustomCaptchaVerified(true);
      alert("Custom CAPTCHA Verified!");
    } else {
      setCustomCaptchaVerified(false);
      alert("Custom CAPTCHA Failed. Please try again.");
    }
  };

  const handleGoogleCaptcha = (value) => {
    console.log("Google CAPTCHA value:", value);
    setGoogleCaptchaVerified(!!value);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      googleCaptchaVerified &&
      customCaptchaVerified &&
      name.trim() !== "" &&
      email.trim() !== "" &&
      address.trim() !== "" &&
      contact.trim() !== ""
    ) {
      setData([...data, { name, address, email, contact }]);
      setName("");
      setAddress("");
      setContact("");
      setEmail("");
      generateCaptcha();
      setUserInput("");
      setCustomCaptchaVerified(false);
      setGoogleCaptchaVerified(false);
      navigate("/product");
    } else {
      alert("Please complete all required fields and CAPTCHA verification.");
    }
  };

  console.log("User Data:", data);

  return (
    <div className="cont">
      <div className="cont1">
        <h1>Welcome to ShopApp</h1>
        <form onSubmit={handleSubmit} className="cont2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="input"
          />
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
            className="input"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="input"
          />
          <input
            type="number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Contact"
            className="input"
          />

          <div className="captcha captcha-container">
            <canvas
              id="captchaCanvas"
              width="130px"
              height="40"
              style={{ border: "1px solid #ccc" }}
            ></canvas>
            <img
              src={refress}
              alt="Refresh CAPTCHA"
              style={{ width: 30, height: 20, cursor: "pointer" }}
              onClick={generateCaptcha}
            />

            <input
              type="text"
              placeholder="Enter CAPTCHA"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="input1"
            />
            <button type="button" onClick={validateCustomCaptcha} className="btn">
              Val
            </button>
          </div>
          <ReCAPTCHA
            sitekey="6LcjQ6cqAAAAALW9Bh-SvLI7etzmO-r1BG3w5Opz"
            onChange={handleGoogleCaptcha}
            className="recaptcha"
          />

          <button type="submit" className="btn2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
