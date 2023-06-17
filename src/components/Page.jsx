import styled from 'styled-components';
import Button from './Button';

const StyledPage = styled.div`
  @media (min-width: 740px) {
    width: 740px;
  }
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 50px;
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 2rem;
  font-weight: normal;
`;

const Page = () => {
  return (
    <StyledPage>
      <Header>
        <Title>Interview Calendar</Title>
        <Button variant='add' />
      </Header>
    </StyledPage>
  );
}

export default Page;