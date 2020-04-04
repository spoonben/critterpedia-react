import styled from "styled-components";
import { mq } from "./constants";

const Spacer = styled.div`
  flex: 0 0 auto;
  width: ${(p) => p.width};
  height: ${(p) => p.height};
  display: ${(p) => p.isInline && "inline-flex"};
  @media (${mq.small}) {
    display: ${(p) => p.hideMobile && "none"};
  }
`;

export default Spacer;
