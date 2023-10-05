import { SocialsContainer } from "./SocialElements";

import { icons } from "../../utils/data";

const TARGET = "_blank";
const REL = "noopener noreferrer";

export default function Socials() {
  return (
    <SocialsContainer>
      {icons.map(({ id, name, icon, url }) => (
        <a key={id} href={url} target={TARGET} rel={REL}>
          <i>{icon}</i>
        </a>
      ))}
    </SocialsContainer>
  );
}
{
}
