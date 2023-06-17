import styled from 'styled-components';
import bgAdd from '../img/add.svg';
import bgArrowLeft from '../img/arrow-left.svg';
import bgArrowRight from '../img/arrow-right.svg';

const StyledButton = styled.button`
  color: #FF3131;
  background-color: transparent;
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
  background-image: url(${props => props.variant === 'arrow-left' ? bgArrowLeft : bgArrowRight});
`;

const Button = ({ children, variant }) => {
  switch (variant) {
    case 'add':
      return <StyledAddButton></StyledAddButton>;
    case 'arrow-right':
    case 'arrow-left':
      return <StyledArrowButton></StyledArrowButton>
    default:
      return <StyledButton>{children}</StyledButton>;
  }
}

export default Button;
