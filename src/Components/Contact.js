import React, { useState } from "react";
import "../Styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    cuname: "",
    coname: "",
    conumber: "",
    cuemail: "",
    cuabout: "",
  });

  const [formErrors, setFormErrors] = useState({
    cuname: "",
    coname: "",
    conumber: "",
    cuemail: "",
    cuabout: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear the error message when the user starts typing
    setFormErrors({
      ...formErrors,
      [e.target.name]: "",
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newFormErrors = {};

    // Basic validation, you can add more complex validation as needed
    if (formData.cuname.trim() === "") {
      newFormErrors.cuname = "Name is required";
      isValid = false;
    }

    if (formData.coname.trim() === "") {
      newFormErrors.coname = "Company name is required";
      isValid = false;
    }

    const contactNumberRegex = /^\d+$/;

    if (formData.conumber.trim() === "") {
      newFormErrors.conumber = "Contact number is required";
      isValid = false;
    } else if (!contactNumberRegex.test(formData.conumber.trim())) {
      newFormErrors.conumber = "Contact number must contain only numbers";
      isValid = false;
    } else if (formData.conumber.trim().length !== 10) {
      newFormErrors.conumber = "Contact number must be 10 digits long";
      isValid = false;
    }

    if (!formData.cuemail.trim()) {
      newFormErrors.cuemail = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.cuemail.trim())) {
      newFormErrors.cuemail = "Invalid email address";
      isValid = false;
    }

    if (formData.cuabout.trim() === "") {
      newFormErrors.cuabout = "Query is required";
      isValid = false;
    }

    setFormErrors(newFormErrors);

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    console.log("Form Data:", formData);

    // Assuming the Express server is running on port 3000
    const serverUrl = "http://localhost:3000/contact";

    try {
      const response = await fetch(serverUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("Error submitting form. Please try again later.");
      }
    } catch (error) {
      alert("Network error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`container-form ${isLoading ? "blur" : ""}`}>
      {isLoading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      <h1>INQUIRE</h1>
      <form onSubmit={handleSubmit} className="form-group">
        <input
          type="text"
          placeholder="Enter your name"
          id="cuname"
          name="cuname"
          value={formData.cuname}
          onChange={handleChange}
        />
        {formErrors.cuname && (
          <span className="error">{formErrors.cuname}</span>
        )}

        <input
          type="text"
          placeholder="Company Name"
          id="coname"
          name="coname"
          value={formData.coname}
          onChange={handleChange}
        />
        {formErrors.coname && (
          <span className="error">{formErrors.coname}</span>
        )}

        <input
          type="text"
          placeholder="Enter your contact number"
          id="conumber"
          name="conumber"
          value={formData.conumber}
          onChange={handleChange}
        />
        {formErrors.conumber && (
          <span className="error">{formErrors.conumber}</span>
        )}

        <input
          type="text"
          placeholder="Enter your email address"
          id="cuemail"
          name="cuemail"
          value={formData.cuemail}
          onChange={handleChange}
        />
        {formErrors.cuemail && (
          <span className="error">{formErrors.cuemail}</span>
        )}

        <input
          type="text"
          placeholder="Enter your query"
          id="cuabout"
          name="cuabout"
          value={formData.cuabout}
          onChange={handleChange}
        />
        {formErrors.cuabout && (
          <span className="error">{formErrors.cuabout}</span>
        )}

        <input
          type="submit"
          id="cusubmit"
          name="cusubmit"
          value="Submit"
          disabled={isLoading}
        />
      </form>

      <div className="location">
        <div className="address-sec">
          <h1>CONTACT INFO</h1>
          <p>
            <strong>Windsor Precision Works</strong>
            <br></br>6240 Hawthorne Drive
            <br></br>Windsor, ON N8T 1J9
            <br></br>Canada
            <br></br>
            <br></br>519-721-4143
            <br></br>
            <a href="mailTo:info@precisionworks.ca">info@precisionworks.ca</a>
          </p>
        </div>
        <div className="container-map">
          <h1>LOCATE US</h1>
          <iframe
            title="Google Maps Locator"
            height="300cm"
            width="100%"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=6240%20Hawthorne%20Drive+(Windsor%20Precision%20Works)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
