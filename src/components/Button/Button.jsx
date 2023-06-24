import * as S from './styles';

const Button = ({ children, variant, onClick }) => {
  switch (variant) {
    case 'add':
      return <S.StyledAddButton onClick={onClick} />;
    case 'arrow-right':
    case 'arrow-left':
      return <S.StyledArrowButton variant={variant} onClick={onClick} />
    default:
      return <S.StyledButton onClick={onClick}>{children}</S.StyledButton>;
  }
}

export default Button;
