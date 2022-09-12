import styled from "styled-components";

export const ContainerMain = styled.main`
  padding: 6px;
  overflow: auto;
  height: calc(100% - 65px);
  border-bottom: 1px solid #E8DFED;
  
  @media(min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;
  }
  
  @media(min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`