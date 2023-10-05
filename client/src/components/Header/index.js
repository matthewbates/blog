import {
  HeaderContainer,
  HeaderItems,
  HeaderImg,
  HeaderTitle,
  HeaderInfo,
} from "./HeaderElements";

import AVATAR from "../../assets/avatar.png";
import Socials from "../Socials";
import Burger from "../Burger";

import { TARGET, REL } from "../../utils/data";

export default function Sidebar() {
  return (
    <HeaderContainer>
      <HeaderItems>
        <HeaderImg src={AVATAR} alt="avatar" />
        <HeaderTitle>
          <div style={{ fontSize: "1.25em" }}>blog.matthewbates.com</div>
        </HeaderTitle>
        <HeaderInfo>
          <p>
            swe @{" "}
            <a href="https://du.edu" target={TARGET} rel={REL}>
              DU
            </a>
          </p>
        </HeaderInfo>
        <Burger />
      </HeaderItems>
      <Socials />
    </HeaderContainer>
  );
}
