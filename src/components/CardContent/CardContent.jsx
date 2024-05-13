import { Button } from "../../core/Button/Button.styled";
import { Shape } from "../../core/Shape/Shape.styled";
import {
  CardContentHeading as Heading,
  CardContentParagraph as Paragraph,
  CardContentSubtitle as Subtitle,
} from "./CardContent.styled";
import PropTypes from "prop-types";

export const CardContent = ({ title, subtitle, paragraph, url, ...props }) => {
  return (
    <Shape {...props}>
      <Heading>{title}</Heading>
      <Subtitle>{subtitle}</Subtitle>
      <Paragraph>
        {paragraph ??
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque neque eius dolorum praesentium aliquid animi excepturi adipisci sapiente quos, eligendi perspiciatis qui tenetur, veniam hic quo iste quia, nobis in?"}{" "}
      </Paragraph>
      <a href={url} target="_blank">
        <Button>Leia mais</Button>
      </a>
    </Shape>
  );
};

CardContent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
