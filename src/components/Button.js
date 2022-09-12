import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 6.5px 19.35px;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 21px;
  text-align: center;
  cursor: pointer;
  border-radius: 30px;
  border: 2px solid #F0A023;
  background: ${(props) => props.variant === 'accent' ? '#250B38' : '#F0A023'};
  transition: 0.3s all ease;
  &:hover {
    background: #965e18;
    border-color: #965e18;
  }
`
