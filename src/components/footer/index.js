import {
  Container,
  Column,
  Link,
  Title,
  Break,
  Row,
  Text,
} from "./styles/footer";

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterRow({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Link = function FooterRow({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Footer.Title = function FooterRow({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Footer.Break = function FooterRow({ ...restProps }) {
  return <Break {...restProps} />;
};

Footer.Text = function FooterRow({ ...restProps }) {
  return <Text {...restProps} />;
};
