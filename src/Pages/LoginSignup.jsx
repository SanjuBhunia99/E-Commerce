// import React, { useState } from "react";
// import { FaRegUserCircle } from "react-icons/fa";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { RiLockPasswordLine } from "react-icons/ri";
// import "../CSS/LoginSignup.css";

// const LoginSignup = () => {
// const [action, setAction] = useState("Login");

//   return (
//     <div className="container">
//       <div className="header">
//         <div className="text">{action}</div>
//         <div className="underline"></div>
//       </div>
//       <div className="inputs">
//         {action !== "Login" && (
//           <div className="input">
//             <FaRegUserCircle className="icon" />
//             <input type="text" placeholder="Name" />
//           </div>
//         )}
//         {/*
//   //     <div className="loginsignup">
//   //       <div className="loginsignup-container">
//   //         <h1>Sign Up</h1>
//   //         <div className="loginsignup-fields">
//   //           <input type="text" placeholder="Your Name" />
//   //           <input type="email" placeholder="Email Address" />
//   //           <input type="password" placeholder="Password" />
//   //           <button>Submit</button>
//   //         </div> */}

//         {/* //         <p className="loginsignup-login">
//   //           Already have an account ? <span> Login here</span>
//   //         </p>
//   //         <div className="loginsignup-agree">
//   //           <input type="checkbox" name="" id="" />
//   //           <p>By continuing, i agree to the terms of use & privacy policy.</p>
//   //         </div>
//   //       </div>
//   //     </div>
//   //   );
//   // }

//   // export default LoginSignup */}

//         <div className="input">
//           <MdOutlineMailOutline className="icon" />
//           <input type="email" placeholder="Email Id" />
//         </div>

//         <div className="input">
//           <RiLockPasswordLine className="icon" />
//           <input type="password" placeholder="Password" />
//         </div>
//       </div>

//       {action !== "Sign Up" && (
//         <div className="forgot-password">
//           Forgot Password? <span>Click Here</span>
//         </div>
//       )}
//       <div className="loginsignup-agree">
//         <input type="checkbox" name="" id="" height='120px'/>
//          <p>By continuing, i agree to the terms of use & privacy policy.</p>

//       </div>
//       <div className="submit-container">
//         <div
//           className={action === "Login" ? "submit gray" : "submit"}
//           onClick={() => setAction("Sign Up")}
//         >
//           Sign Up
//         </div>

//         <div
//           className={action === "Sign Up" ? "submit gray" : "submit"}
//           onClick={() => setAction("Login")}
//         >
//           Login
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;

import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import "../CSS/LoginSignup.css";

const LoginSignup = () => {
  const [action, setAction] = useState("Login");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action !== "Login" && (
          <div className="input">
            <FaRegUserCircle className="icon" />
            <input type="text" placeholder="Name" />
          </div>
        )}

        <div className="input">
          <MdOutlineMailOutline className="icon" />
          <input type="email" placeholder="Email Id" />
        </div>

        <div className="input">
          <RiLockPasswordLine className="icon" />
          <input type="password" placeholder="Password" />
        </div>
      </div>

      {action !== "SignUp" && (
        <div className="forgot-password">
          Forgot Password? <span>Click Here</span>
        </div>
      )}

      <div className="loginsignup-agree">
        <input type="checkbox" />
        <p>By continuing, I agree to the terms of use & privacy policy.</p>
      </div>

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </div>

        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => setAction("Login")}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;