import {
  BackButton,
  ErrorContainer,
  ErrorDescription,
  ErrorTitle,
} from './styles';

const ErrorPage = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <ErrorContainer>
      <ErrorTitle>404 - Page Not Found</ErrorTitle>
      <ErrorDescription>
        Sorry, the page you are looking for does not exist.
      </ErrorDescription>
      <BackButton onClick={goBack}>Go Back</BackButton>
    </ErrorContainer>
  );
};

export default ErrorPage;
