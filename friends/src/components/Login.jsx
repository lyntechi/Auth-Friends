import React from "react";

export default function Login() {
  return (
    <div className="form"> 
      <form>
        <label htmlFor="username"><p>Username</p><br/>
          <input id="username" name="username" />
        </label><br/>
        <label htmlFor="password"><p>Password</p><br/>
          <input id="password" name="password" />
        </label><br/>
        <button type="submit">Login</button>
        
      </form>
    </div>
  );
}
