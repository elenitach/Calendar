import styled from 'styled-components';
import bgAdd from '../img/add.svg';
import bgArrowLeft from '../img/arrow-left.svg';
import bgArrowRight from '../img/arrow-right.svg';

const StyledButton = styled.button`
  color: var(--active-color);
  background-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
`;

const StyledAddButton = styled(StyledButton)`
  width: 30px;
  height: 30px;
  background-image: url(${bgAdd});
`;

const StyledArrowButton = styled(StyledButton)`
  width: 30px;
  heught: 30px;
  background-image: url(${props => props.variant === 'arrow-left' ? bgArrowLeft : bgArrowRight});
`;

const Button = ({ children, variant, onClick }) => {
  switch (variant) {
    case 'add':
      return <StyledAddButton onClick={onClick} />;
    case 'arrow-right':
    case 'arrow-left':
      return <StyledArrowButton variant={variant} onClick={onClick} />
    default:
      return <StyledButton onClick={onClick}>{children}</StyledButton>;
  }
}

export default Button;
