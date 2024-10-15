import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);
  return <h4>There Was a Error ...</h4>;
};

export default ErrorElement;
