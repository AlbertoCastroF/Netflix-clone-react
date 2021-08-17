import JumbotronContainer from "../containers/jumbotron";
import FooterContainer from "../containers/footer";
import FaqsContainer from "../containers/faqs";
import HeaderContainer from "../containers/header";
import { OptForm, Feature } from "../components";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited films, TV programmes and more.
          </Feature.Title>
          <Feature.Text>Watch anywhere. Cancel at any time.</Feature.Text>
          <OptForm>
            <OptForm.Input placeholder="Email Address" />
            <OptForm.Button>Get Started</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />;
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
