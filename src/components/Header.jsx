import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #f2f3f4;
  align-items: center;
  padding: 0 5px;
  height: 35px;
  border: 1px solid #737373;
  border-radius: 5px;

  @media (max-width: 768px) {
    overflow: auto;
    gap: 3rem;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  height: fit-content;
`;

const Button = styled.button`
  background-color: #f8f9f9;
  border-radius: 3px;
  border: 1px solid #737373;
  cursor: pointer;
  display: flex;
  align-items: center;
  min-width: fit-content;
  height: 1.7rem;
`;

const Input = styled.input`
  border: 1px solid #737373;
  border-radius: 150px;
  background-image: url(/loop-icon.svg);
  background-repeat: no-repeat;
  background-position: 8px center;
  background-size: 16px;
  padding-left: 28px;
`;

const PlayIcon = styled.img`
  width: 0.75rem;
  height: 0.75rem;
`;

export const Header = () => {
  const handleClickPlay = () => {
    console.log("Playing all songs");
  };

  const handleClickAddAll = () => {
    console.log("Adding all songs to the queue");
  };

  return (
    <Wrapper>
      <ButtonsWrapper>
        <Button onClick={handleClickPlay}>
          <PlayIcon src="/play-icon.svg" alt="play" />
          Play All
        </Button>

        <Button onClick={handleClickAddAll}>
          <PlayIcon src="/add-icon.svg" alt="add" />
          Add All
        </Button>
      </ButtonsWrapper>

      <ButtonsWrapper>
        <Button>Track Number</Button>

        <Input type="text" placeholder="Filter" />
      </ButtonsWrapper>
    </Wrapper>
  );
};
