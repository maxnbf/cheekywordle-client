import { Grid } from "@mui/material";
import styled from "styled-components";

export const LoginContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  box-shadow: 0px 0px 10px rgb(0 0 0 / 25%);

  border-radius: 15px;
`;

export const LoginHeader = styled.div`
  padding: 10px;
  font-size: 20px;
  color: #7b63ff;
  font-weight: bold;
`;

export const LoginBody = styled.div`
  padding: 20px;
`;

export const LoginInput = styled.input`
  margin: 5px;
  padding-left: 8px;
  padding-right: 8px;
  width: -webkit-fill-available;
  border-radius: 3px;
  border: 1px solid gray;
  margin-top: 8px;
  height: 36px;
`;

export const LoginButtonRow = styled.div`
  text-align: center;
  padding: 5px;
`;

export const LoginButton = styled.div`
  cursor: pointer;
  background: black;
  color: white;
  border-radius: 3px;
  margin-top: 3px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginBanner = styled.div`
  background: #1e1e1e;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const LoginLogo = styled.img`
  max-height: 200px;
  margin: auto;
`;

export const NotAMember = styled.div`
  padding-top: 20px;

  > a {
    color: #7b63ff;
    font-weight: bold;
    text-decoration: none;
  }
`;

export const AuthWidgetContainer = styled(Grid)`
  margin: auto;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const AuthWidget = styled(Grid)`
  border-style: solid;
  border-width: 1px;
  border-radius: 20px;
  border-color: black;
`;
