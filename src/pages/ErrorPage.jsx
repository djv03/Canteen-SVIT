const ErrorPage = () => {
  let message = "Somrthing went wrong";
  return (
    <>
      <Headers />
      <div style={{ textAlign: "Center" }}>{message}</div>
    </>
  );
};

export default ErrorPage;
