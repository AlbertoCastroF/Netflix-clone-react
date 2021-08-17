import { Container, Title, Text } from "./styles/feature";

export default function Feature({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Feature.Title = function FeatureTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Feature.Text = function FeatureText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
