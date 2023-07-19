import styled from "styled-components";

export const Ulstyle = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  width: 90%;
  flex-wrap: wrap;

  @media (min-width: 700px) {
    flex-direction: row;
  }

  li {
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 300px;
    border: 2px solid #27ae60;
    border-radius: 5px;
  }

  .divImg {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    margin-bottom: 10px;
  }

  .divImg > img {
    width: 60%;
  }

  .divDescription {
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .divDescription > h4 {
    font-weight: 700;
    font-size: 18px;
    color: #333333;
  }

  .divDescription > p {
    font-weight: 400;
    font-size: 12px;
    color: #828282;
  }

  .divDescription > span {
    font-weight: 600;
    font-size: 14px;
    color: #27ae60;
  }

  .divDescription > button {
    width: 106px;
    height: 40px;
    background: #bdbdbd;
    border: 2px solid #bdbdbd;
    border-radius: 8px;
    padding: 5px;
    color: #ffffff;

    &:hover {
      background: #27ae60;
      border: 2px solid #27ae60;
      border-radius: 8px;
    }
  }
`;
