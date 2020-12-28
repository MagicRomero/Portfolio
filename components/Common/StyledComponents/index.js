import styled from "styled-components";

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
