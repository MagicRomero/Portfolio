import Link from "next/link";
import styled from "styled-components";
import { CustomImage } from "@/components/Common/StyledComponents";
import { OptimizedImage } from "@/components/Common";

const TerminalWrapper = styled.div`
  background-color: ${(props) => props.theme.secondaryBackgroundColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 5px 5px 0 0;
  box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "nav-wrapper nav-wrapper"
    "left-column right-column";

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "nav-wrapper"
      "left-column"
      "right-column";
  }
`;

const Column = styled.div`
  padding-top: 50px;
  padding-bottom: 160px;
`;

const LeftColumn = styled(Column)`
  grid-area: left-column;
`;

const RightColumn = styled(Column)`
  grid-area: right-column;
  display: grid;
  align-content: center;

  @media screen and (max-width: 800px) {
    justify-content: center;
  }
`;

const ProfileImage = styled(CustomImage)`
  margin: 0 auto;
  object-fit: cover;
  border: 2px solid ${(props) => props.theme.borderColor};
`;

const NavWrapper = styled.nav`
  border-radius: 5px 5px 0 0;
  grid-area: nav-wrapper;
  border-bottom: ${(props) => props.theme.borderColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.primaryBackgroundColor};
`;

const DotsWrapper = styled.div`
  display: flex;
  padding: 10px;
`;

const BrowserDot = styled.div`
  background-color: black;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  margin: 5px;

  -webkit-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);

  &:nth-child(1) {
    background-color: #fc6058;
  }

  &:nth-child(2) {
    background-color: #fec02f;
  }

  &:nth-child(3) {
    background-color: #2aca3e;
  }
`;

const Navigation = styled.ul`
  margin: 0;
  padding: 10px;

  & li {
    display: inline-block;
    margin-right: 5px;
    margin-left: 5px;
  }

  & a {
    color: ${(props) => props.theme.primaryTextColor};
  }
`;

const PreviewShadow = styled.div`
  background-color: ${(props) => props.theme.previewShadow};
  max-width: 300px;
  height: 180px;
  padding-left: 30px;
  padding-top: 30px;

  @media screen and (max-width: 400px) {
    max-width: 280px;
    height: 180px;
    padding-left: 10px;
    padding-top: 10px;
  }
`;

const Preview = styled.div`
  width: 300px;
  border: 1.5px solid #17a2b8;
  background-color: ${(props) => props.theme.previewBackground};
  padding: 15px;
  position: relative;

  @media screen and (max-width: 400px) {
    width: 280px;
  }
`;

const Corner = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  border: 1.5px solid #17a2b8;
  background-color: #fff;
  position: absolute;
`;

const CornerTopLeft = styled(Corner)`
  top: -5px;
  left: -5px;
`;

const CornerTopRight = styled(Corner)`
  top: -5px;
  right: -5px;
`;

const CornerBottomRight = styled(Corner)`
  bottom: -5px;
  right: -5px;
`;

const CornerBottomLeft = styled(Corner)`
  bottom: -5px;
  left: -5px;
`;

const Terminal = ({ translations }) => {
  return (
    <TerminalWrapper>
      <LeftColumn>
        <OptimizedImage name="profileImage" alt="picture of me">
          <ProfileImage />
        </OptimizedImage>
      </LeftColumn>
      <NavWrapper>
        <a href="/">
          <DotsWrapper>
            <BrowserDot />
            <BrowserDot />
            <BrowserDot />
          </DotsWrapper>
        </a>
        <Navigation>
          <li>
            <Link href="/contact">{translations.contact}</Link>
          </li>
        </Navigation>
      </NavWrapper>
      <RightColumn>
        <PreviewShadow>
          <Preview>
            <CornerTopLeft />
            <CornerTopRight />
            <h3>{translations.what_i_do}</h3>
            <p>{translations.about_what_i_do}</p>
            <CornerBottomRight />
            <CornerBottomLeft />
          </Preview>
        </PreviewShadow>
      </RightColumn>
    </TerminalWrapper>
  );
};

export default Terminal;
