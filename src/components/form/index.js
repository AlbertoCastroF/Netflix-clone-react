import {
  Container,
  Err,
  Base,
  Title,
  Text,
  TextSmall,
  Input,
  Submit,
  Link,
} from "./styles/form";

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Input = function Forminput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

Form.Submit = function FormSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Form.TextSmall = function FormText({ children, ...restProps }) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

Form.Link = function FormText({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Form.Base = function FormText({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>;
};

Form.Err = function FormText({ children, ...restProps }) {
  return <Err {...restProps}>{children}</Err>;
};
