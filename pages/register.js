import styled from "styled-components";
import {useState} from "react";
import Link from "next/link";

export default function Register() {
  const [visible1, setVisible1] = useState("password");
  const [visible2, setVisible2] = useState("password");
  const [isTrue1, setIsTrue1] = useState(false);
  const [isTrue2, setIsTrue2] = useState(false);

  function handleVisibility1(event) {
    if (event.target.value == "on") {
      setVisible1("text");
      setIsTrue1(!isTrue1);
    }

    {
      isTrue1 && setVisible1("password");
    }
  }

  function handleVisibility2(event) {
    if (event.target.value == "on") {
      setVisible2("text");
      setIsTrue2(!isTrue2);
    }

    {
      isTrue2 && setVisible2("password");
    }
  }

  return (
    <>
      <StyledSection>
        <StyledForm>
          <H1>
            <em>Registration Form</em>
          </H1>
          <StyledPar>
            Please fill out this form with the required information
          </StyledPar>
          <StyledDiv1>
            <StyledLabel for="email">Email adress:</StyledLabel>
            <br />
            <StyledInput
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              required
            />
            <br />
          </StyledDiv1>
          <StyledDiv2>
            <StyledLabel for="createPassword">
              Create Your Password:
            </StyledLabel>
            <br />
            <StyledInput
              type={visible1}
              id="createPassword"
              name="createPassword"
              placeholder="Your password"
              required
            />
            <br />
            <input
              onChange={handleVisibility1}
              type="checkbox"
              id="passwordVisibility1"
              name="passwordVisibility1"
            />
            <StyledLabel for="passwordVisibility1">Show password</StyledLabel>
          </StyledDiv2>
          <StyledDiv2>
            <label for="confirmPassword">Confirm Password:</label>
            <br />
            <StyledInput
              type={visible2}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Your password"
              required
            />
            <br />
            <input
              onChange={handleVisibility2}
              type="checkbox"
              id="passwordVisibility2"
              name="passwordVisibility2"
            />
            <StyledLabel for="passwordVisibility2">Show password</StyledLabel>
          </StyledDiv2>
          <StyledDiv3>
            <Styledbutton type="submit">Register</Styledbutton>
          </StyledDiv3>
          <br />
          <StyledPar>
            <em>
              Already have an account?{" "}
              <StyledLink href="/login">Sign in</StyledLink>
            </em>
          </StyledPar>
        </StyledForm>
      </StyledSection>
    </>
  );
}

const StyledSection = styled.section`
  background-color: #000000;
  padding: 2rem;
  display: grid;
  place-content: center;
  height: 100vh;
`;

const StyledForm = styled.form`
  background-color: #9a9595;
  padding: 2rem 1rem 0;
  border-radius: 1.5rem;
  height: 75vh;

  @media screen and (max-width: 430px) {
    height: 82vh;
  }
`;

const H1 = styled.h1`
  text-align: center;
`;

const StyledPar = styled.p`
  text-align: center;
  margin: 0;
`;

const StyledLabel = styled.label`
  color: #000000;
  cursor: pointer;
`;

const StyledInput = styled.input`
  width: 60vw;
  height: 5vh;
  border: none;
  background-color: #d9d9d9;
  outline: none;
  padding-left: 0.8rem;

  @media screen and (max-width: 430px) {
    width: 80vw;
  }
`;

const StyledDiv1 = styled.div`
  margin: 2rem 0;
`;

const StyledDiv2 = styled.div`
  margin: 1.4rem 0;
`;

const StyledDiv3 = styled.div`
  display: flex;
  justify-content: center;
`;

const Styledbutton = styled.button`
  background-color: #d11818;
  color: #ffffff;
  border: none;
  border-radius: 0.8rem;
  width: 45vw;
  height: 5vh;
  cursor: pointer;
  margin-top: 0.5rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #d11818;
`;