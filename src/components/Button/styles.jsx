import styled from 'styled-components';
import bgAdd from '../../img/add.svg';
import bgArrowLeft from '../../img/arrow-left.svg';
import bgArrowRight from '../../img/arrow-right.svg';


export const StyledButton = styled.button`
  color: var(--active-color);
  background-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  font-size: 1.3rem;
`;

export const StyledAddButton = styled(StyledButton)`
  width: 30px;
  height: 30px;
  background-image: url(${bgAdd});
`;

export const StyledArrowButton = styled(StyledButton)`
  width: 30px;
  heught: 30px;
  background-image: url(${props => props.variant === 'arrow-left' ? bgArrowLeft : bgArrowRight});
`;