import { useState, useContext, createContext } from "react";
import ReactDOM from "react-dom";
import { Container, Close, Overlay, Inner, Button } from "./styles/player";

export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay onClick={() => setShowPlayer(false)}>
          <Inner>
            <video id="netflix-player" controls>
              <source src={process.env.PUBLIC_URL + "/videos/bunny.mp4"} />
            </video>
            <Close />
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

Player.Button = function PlayButton({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);
  return <Button onClick={() => setShowPlayer(!showPlayer)}>Play</Button>;
};
