import DocumentTitle from "../components/DocumentTitle";

const Home = () => {
  const css = {
    container: {
      minHeight: "calc(100vh - 50px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      fontWeight: 500,
      fontSize: 48,
      textAlign: "center",
    },
  };

  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <div style={css.container}>
        <h1 style={css.title}>
          Phonebook welcome page
          <span role="img" aria-label="Greeting icon">
            👋
          </span>
        </h1>
      </div>
    </>
  );
};

export default Home;
