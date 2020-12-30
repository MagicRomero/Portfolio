import styled from "styled-components";

export const CustomImage = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
  width: props.width || 200,
  height: props.height || 200,
}))`
  display: block;
  max-width: 100%;
  height: auto;
`;


export const StyledMainContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  @media screen and (max-width: 1200px) {
    width: 95%;
  }
`;

const StyledSection = styled.section`
  border-bottom: 1px solid var ${(props) => props.theme.borderColor};
  overflow: auto;
  margin-top: 1em;
  margin-bottom: 1em;
`;
export const StyledSectionPrimary = styled(StyledSection)`
  background-color: ${(props) => props.theme.primaryBackgroundColor};
`;
export const StyledSectionSecondary = styled(StyledSection)`
  background-color: ${(props) => props.theme.secondaryBackgroundColor};
`;

export const CommonButton = styled.button`
  color: #fff;
  background-color: #7571f9;
  border-color: #7571f9;

  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  &:hover {
    background: #4540f7;
    color: #fff;
    border-color: #4540f7;
  }
`;

export const Alert = styled.div`
  width: 100%;
  margin: 0.5em auto;
  padding: 1rem;
  position: relative;
  border-radius: 5px;
  box-shadow: 0 0 15px 5px #ccc;

  background-color: #ebebeb;
  border-left: 5px solid #6c6c6c;

  & .close {
    position: absolute;
    width: 30px;
    height: 30px;
    opacity: 0.5;
    border-width: 1px;
    border-style: solid;
    border-radius: 50%;
    right: 15px;
    top: 25px;
    text-align: center;
    font-size: 1.6em;
    border-color: #6c6c6c;
    color: #6c6c6c;
    cursor: pointer;
  }
`;

export const SuccessAlert = styled(Alert)`
  background-color: #a8f0c6;
  border-left: 5px solid #178344;

  & .close {
    border-color: #178344;
    color: #178344;
  }
`;

export const DangerAlert = styled(Alert)`
  background-color: #f7a7a3;
  border-left: 5px solid #8f130c;

  & .close {
    border-color: #8f130c;
    color: #8f130c;
  }
`;
