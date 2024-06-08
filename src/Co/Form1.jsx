import React from 'react';

const Form1 = () => {
  return (
    <div>
      <form action="/submit" method="post">
        <fieldset>
          <legend>Personal Information</legend>
          <label htmlFor="fname">First name:</label>
          <input type="text" id="fname" name="fname" placeholder="John" />
          <label htmlFor="lname">Last name:</label>
          <input type="text" id="lname" name="lname" placeholder="Doe" />
        </fieldset>

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="example@example.com" />

        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" min="0" max="120" />

        <label htmlFor="gender">Gender:</label>
        <input type="radio" id="male" name="gender" value="male" />
        <label htmlFor="male">Male</label>
        <input type="radio" id="female" name="gender" value="female" />
        <label htmlFor="female">Female</label>

        <label htmlFor="subscribe">Subscribe to newsletter:</label>
        <input type="checkbox" id="subscribe" name="subscribe" value="yes" />

        <label htmlFor="browser">Choose your browser:</label>
        <input list="browsers" id="browser" name="browser" />
        <datalist id="browsers">
          <option value="Chrome" />
          <option value="Firefox" />
          <option value="Safari" />
          <option value="Edge" />
        </datalist>

        <label htmlFor="color">Favorite Color:</label>
        <input type="color" id="color" name="favcolor" />

        <label htmlFor="date">Birthday:</label>
        <input type="date" id="date" name="birthday" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" cols="50" placeholder="Enter your message here"></textarea>

        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
      <select name="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
</select>
<div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-blue-500 p-4 text-white">Item 1</div>
        <div className="bg-green-500 p-4 text-white">Item 2</div>
        <div className="bg-red-500 p-4 text-white">Item 3</div>
        <div className="bg-yellow-500 p-4 text-white">Item 4</div>
      </div>
    </div>
    </div>
  );
};

export default Form1;