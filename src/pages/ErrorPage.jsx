import Header from "../Components/Header";

const ErrorPage = () => {
  let message = "Somrthing went wrong";
  return (
    <>
      <Header />
      <div style={{ textAlign: "Center" }}>{message}</div>
    </>
  );
};

export default ErrorPage;
