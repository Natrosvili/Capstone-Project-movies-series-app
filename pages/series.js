import styled from "styled-components";
import neueFischePhoto from "../public/neuefische.jpeg";
import Image from "next/image";
import Link from "next/link";

export default function Series() {
  return (
    <>
      <h1>Series</h1>
      <br />
      <StyledSection>
        <h2>Action</h2>
        <hr />
        <ParentDiv>
          <ChildDiv>
            <Link href="">
              <Photo src={neueFischePhoto} alt="recommended series" />
            </Link>
            <Link href="">
              <h3>Name</h3>
            </Link>
            <span>SS Num</span>
            <StyledSpan>EP Num</StyledSpan>
          </ChildDiv>
          <ChildDiv>
            <Link href="">
              <Photo src={neueFischePhoto} alt="recommended series" />
            </Link>
            <Link href="">
              <h3>Name</h3>
            </Link>
            <span>SS Num</span>
            <StyledSpan>EP Num</StyledSpan>
          </ChildDiv>
        </ParentDiv>
        <hr />
      </StyledSection>
      <br />
      <StyledSection>
        <h2>Adventure</h2>
        <hr />
        <ParentDiv>
          <ChildDiv>
            <Link href="">
              <Photo src={neueFischePhoto} alt="recommended series" />
            </Link>
            <Link href="">
              <h3>Name</h3>
            </Link>
            <span>SS Num</span>
            <StyledSpan>EP Num</StyledSpan>
          </ChildDiv>
          <ChildDiv>
            <Link href="">
              <Photo src={neueFischePhoto} alt="recommended series" />
            </Link>
            <Link href="">
              <h3>Name</h3>
            </Link>
            <span>SS Num</span>
            <StyledSpan>EP Num</StyledSpan>
          </ChildDiv>
        </ParentDiv>
        <hr />
      </StyledSection>
      <br />
      <StyledSection>
        <h2>Comedy</h2>
        <hr />
        <ParentDiv>
          <ChildDiv>
            <Link href="">
              <Photo src={neueFischePhoto} alt="recommended series" />
            </Link>
            <Link href="">
              <h3>Name</h3>
            </Link>
            <span>SS Num</span>
            <StyledSpan>EP Num</StyledSpan>
          </ChildDiv>
          <ChildDiv>
            <Link href="">
              <Photo src={neueFischePhoto} alt="recommended series" />
            </Link>
            <Link href="">
              <h3>Name</h3>
            </Link>
            <span>SS Num</span>
            <StyledSpan>EP Num</StyledSpan>
          </ChildDiv>
        </ParentDiv>
        <hr />
      </StyledSection>
      <br />
      <StyledSection>
        <h2>Drama</h2>
        <hr />
        <ParentDiv>
          <ChildDiv>
            <Photo src={neueFischePhoto} alt="recommended series" />
            <Link href="">
              <h3>Name</h3>
            </Link>
            <span>SS Num</span>
            <StyledSpan>EP Num</StyledSpan>
          </ChildDiv>
          <ChildDiv>
            <Photo src={neueFischePhoto} alt="recommended series" />
            <Link href="">
              <h3>Name</h3>
            </Link>
            <span>SS Num</span>
            <StyledSpan>EP Num</StyledSpan>
          </ChildDiv>
        </ParentDiv>
        <hr />
      </StyledSection>
      <br />
    </>
  );
}

const Photo = styled(Image)`
  width: 230px;
  height: 230px;
  left: 34px;
  top: 553px;
  background: #d9d9d9;
  border-radius: 15px;

  @media screen and (max-width: 576px) {
    width: 180px;
    height: 200px;
  }
`;

const StyledSection = styled.section`
  margin: 60px 40px;
`;

const ParentDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 50px;

  @media screen and (max-width: 576px) {
    justify-content: space-between;
  }
`;

const ChildDiv = styled.div`
  font-size: 18px;
  color: #d9d9d9;
`;

const StyledSpan = styled.span`
  position: relative;
  left: 100px;

  @media screen and (max-width: 576px) {
    left: 50px;
  }
`;
