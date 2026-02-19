import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>ADEi University Registration Portal</h1>

      <form>

        {/* PERSONAL INFORMATION */}
        <fieldset>
          <legend>Personal Information</legend>

          <div className="grid-4">
            <div>
              <label>First Name</label>
              <input type="text" required />
            </div>

            <div>
              <label>Middle Name</label>
              <input type="text" />
            </div>

            <div>
              <label>Last Name</label>
              <input type="text" required />
            </div>

            <div>
              <label>Suffix</label>
              <input type="text" />
            </div>
          </div>

          <div className="grid-2">
            <div>
              <label>Date of Birth</label>
              <input type="date" required />
            </div>

            <div>
              <label>Gender</label>
              <select required>
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Non-binary</option>
              </select>
            </div>
          </div>
        </fieldset>

        <button type="submit" className="submit-btn">
          Submit Registration
        </button>

      </form>
    </div>
  );
}

export default App;
