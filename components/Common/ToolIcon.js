import styled from "styled-components";
import { icons } from "@/data/images";

const Icon = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
  width: props.width || "45",
  height: props.height || "45",
}))`
  height: auto;
`;

const ToolIcon = ({ iconset, name, ...restProps }) => (
  <Icon src={icons.tools[iconset][name]} alt={name} {...restProps} />
);

export default ToolIcon;
