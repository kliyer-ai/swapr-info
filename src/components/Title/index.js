import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { Flex } from "rebass";
import Link from "../Link";
import { RowFixed } from "../Row";
import Logo from "../../assets/logo_white.svg";
import Wordmark from "../../assets/wordmark_white.svg";

const TitleWrapper = styled.div`
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }

  z-index: 10;
`;

export default function Title() {
  const history = useHistory();

  return (
    <TitleWrapper onClick={() => history.push("/")}>
      <Flex alignItems="center">
        <RowFixed>
          <Link id="link" onClick={() => history.push("/")}>
            <img width={"20px"} src={Logo} alt="logo" />
          </Link>
          <img
            width={"72px"}
            style={{ marginLeft: "8px", marginTop: "0px" }}
            src={Wordmark}
            alt="logo"
          />
        </RowFixed>
      </Flex>
    </TitleWrapper>
  );
}
