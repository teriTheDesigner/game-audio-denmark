"use client";
import styles from "@/app/signup/page.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [interest, setInterest] = useState([]);
  const [occupation, setOccupation] = useState("");
  const [membership, setMembership] = useState("");
  const [newsletter, setNewsletter] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [cityError, setCityError] = useState(null);
  const NameChange = (e) => {
    setName(e.target.value);
  };

  const CityChange = (e) => {
    setCity(e.target.value);
  };

  const EmailChange = (e) => {
    setEmail(e.target.value);
  };

  const InterestChange = (value) => {
    // Check if the value is already in the array
    if (interest.includes(value)) {
      // If it is, remove it
      setInterest(interest.filter((item) => item !== value));
    } else {
      // If it's not, add it
      setInterest([...interest, value]);
    }
  };

  const OcupationChange = (value) => {
    setOccupation(value);
  };

  const MembershipChange = (value) => {
    setMembership(value);
  };

  const NewsletterChange = (value) => {
    setNewsletter(value);
  };

  useEffect(() => {
    // Validation function to check if all required fields are filled
    const checkValidity = () => {
      const isValid =
        name.trim().length > 0 &&
        email.trim().length > 0 &&
        city.trim().length > 0 &&
        interest.length > 0 &&
        occupation.trim().length > 0 &&
        membership.trim().length > 0 &&
        newsletter.trim().length > 0 &&
        nameError === null &&
        emailError === null &&
        cityError === null;

      setIsValid(isValid);
    };

    checkValidity();
  }, [
    name,
    email,
    city,
    interest,
    occupation,
    membership,
    newsletter,
    nameError,
    emailError,
    cityError,
  ]);
  // Validation functions for name, email, and city
  const validateName = () => {
    if (name.trim().length === 0) {
      setNameError("This field is required");
    } else {
      setNameError(null);
    }
  };

  const validateEmail = () => {
    if (email.trim().length === 0 || !email.includes("@")) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError(null);
    }
  };

  const validateCity = () => {
    if (city.trim().length === 0) {
      setCityError("This field is required");
    } else {
      setCityError(null);
    }
  };
  return (
    <div>
      <section className={`${styles.section} grid-component`}>
        <h1 className={styles.h1}>
          BECOME OUR <span>MEMBER</span>
        </h1>
        <div className={styles.layout}>
          <form className={styles.form}>
            <label className={styles.label}>
              Your name *
              <input
                className={styles.input}
                type="text"
                placeholder="Peter Jensen"
                onChange={(e) => NameChange(e)}
                onBlur={validateName}
                onFocus={() => setNameError(null)}
              ></input>
              {nameError && <span className={styles.error}>{nameError}</span>}
            </label>
            <label className={styles.label}>
              Your email *
              <input
                className={styles.input}
                type="email"
                placeholder="your@email.com"
                onChange={(e) => EmailChange(e)}
                onBlur={validateEmail}
                onFocus={() => setEmailError(null)}
              ></input>
              {emailError && <span className={styles.error}>{emailError}</span>}
            </label>
            <label className={styles.label}>
              City *
              <input
                className={styles.input}
                type="text"
                placeholder="Copenhagen"
                onChange={(e) => CityChange(e)}
                onBlur={validateCity}
                onFocus={() => setCityError(null)}
              ></input>
              {cityError && <span className={styles.error}>{cityError}</span>}
            </label>
            <div className={styles.checkboxesDiv}>
              <p className={styles.p}>Your role or biggest Interest *</p>
              <label className={styles.labelCheckbox}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  value="Sound Designer"
                  onChange={() => InterestChange("Sound Designer")}
                />
                Sound Designer
              </label>
              <label className={styles.labelCheckbox}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  value="Composer"
                  onChange={() => InterestChange("Composer")}
                />
                Composer
              </label>
              <label className={styles.labelCheckbox}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  value="Programmer"
                  onChange={() => InterestChange("Programmer")}
                ></input>
                Programmer
              </label>
              <label className={styles.labelCheckbox}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  value="Voice actor"
                  onChange={() => InterestChange("Voice actor")}
                ></input>
                Voice actor
              </label>
              <label className={styles.labelCheckbox}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  value="Mix/Master Engineer"
                  onChange={() => InterestChange("Mix/Master Engineer")}
                ></input>
                Mix/Master Engineer
              </label>
              <label className={styles.labelCheckbox}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  value="Audio Director"
                  onChange={() => InterestChange("Audio Director")}
                ></input>
                Audio Director
              </label>
              <label className={styles.labelCheckbox}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  value="Other"
                  onChange={() => InterestChange("Other")}
                ></input>
                Other
              </label>
            </div>
            <label className={styles.labelArea}>
              If your choice requires further explanation, please elaborate.
              <textarea className={styles.textarea}></textarea>
            </label>
            <div className={styles.checkboxesDiv}>
              <p className={styles.p}>Level of Occupation *</p>
              <label className={styles.labelCheckbox}>
                <input
                  className={styles.radio}
                  name="occupation"
                  type="radio"
                  value="Fulltime"
                  onChange={() => OcupationChange("Fulltime")}
                ></input>
                Fulltime
              </label>
              <label className={styles.labelCheckbox}>
                <input
                  className={styles.radio}
                  name="occupation"
                  type="radio"
                  value="Freelance"
                  onChange={() => OcupationChange("Freelance")}
                ></input>
                Freelance
              </label>
              <label className={styles.labelCheckbox}>
                <input
                  className={styles.radio}
                  name="occupation"
                  type="radio"
                  value="Student"
                  onChange={() => OcupationChange("Student")}
                ></input>
                Student
              </label>
              <label className={styles.labelCheckbox}>
                <input
                  className={styles.radio}
                  name="occupation"
                  type="radio"
                  value="Looking for game audio job"
                  onChange={() => OcupationChange("Looking for game audio job")}
                ></input>
                Looking for game audio job
              </label>
              <label className={styles.labelCheckbox}>
                <input
                  className={styles.radio}
                  name="occupation"
                  type="radio"
                  value="Not working with game audio"
                  onChange={() =>
                    OcupationChange("Not working with game audio")
                  }
                ></input>
                Not working with game audio
              </label>
            </div>
            <div className={styles.checkboxesDiv}>
              <p className={styles.p}>Membership or Supporter Type *</p>
              <label className={styles.labelCheckbox}>
                <input
                  className={styles.radio}
                  name="membership"
                  type="radio"
                  value="Supporter"
                  onChange={() => MembershipChange("Supporter")}
                ></input>
                Supporter 250 DKK
              </label>
              <label className={styles.labelCheckbox}>
                <input
                  className={styles.radio}
                  name="membership"
                  type="radio"
                  value="Student"
                  onChange={() => MembershipChange("Student")}
                ></input>
                Student Member 150 DKK
              </label>
              <label className={styles.labelCheckbox}>
                <input
                  className={styles.radio}
                  name="membership"
                  type="radio"
                  value="Regular"
                  onChange={() => MembershipChange("Regular")}
                ></input>
                Regular Member 250 DKK
              </label>
            </div>
            <div className={styles.checkboxesDiv}>
              <p className={styles.p}>
                Do you want to receive our newsletter? *
              </p>

              <label className={styles.labelCheckbox}>
                <input
                  className={styles.radio}
                  name="newsletter"
                  type="radio"
                  value="Yes"
                  onChange={() => NewsletterChange("Yes")}
                ></input>
                Yes
              </label>
              <label className={styles.labelCheckbox}>
                <input
                  className={styles.radio}
                  name="newsletter"
                  type="radio"
                  value="No"
                  onChange={() => NewsletterChange("No")}
                ></input>
                No
              </label>
            </div>
            <label className={styles.labelArea}>
              Would you like to share any comments?
              <textarea className={styles.textarea}></textarea>
            </label>
            {!isValid && (
              <p className={styles.error}>Please fill in all fields.</p>
            )}
            <Link
              className={`${styles.link} ${
                isValid ? styles.validLink : styles.invalidLink
              }`}
              href="/"
            >
              SIGN UP
            </Link>
          </form>
        </div>
      </section>
    </div>
  );
}
