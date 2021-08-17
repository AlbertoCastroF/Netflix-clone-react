import { Jumbotron } from "../components/";
import JumboDate from "../fixtures/jumbo.json";

export default function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {JumboDate.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image src={process.env.PUBLIC_URL + item.image} />
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
