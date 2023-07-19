import styled from "styled-components";

export const ValorTotal = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #828282;
  padding: 10px;
  width: 80%;
  max-width: 400px;
  border-radius: 8px;

  div > p {
    font-weight: 600;
    font-size: 14px;
    color: #333333;
  }

  .ValueTotal {
    font-weight: 600;
    font-size: 14px;
    color: #828282;
  }

  button {
    background: #e0e0e0;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    width: 50%;
    height: 40px;
    color: #828282;
    font-size: 14px;
  }
`;
