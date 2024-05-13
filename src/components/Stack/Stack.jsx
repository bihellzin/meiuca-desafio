import PropTypes from "prop-types";
import { StyledStack } from "./Stack.styled";

export const Stack = ({ children, ...props }) => {
  return <StyledStack {...props}>{children}</StyledStack>;
};

Stack.propTypes = {
  children: PropTypes.node.isRequired,
};
