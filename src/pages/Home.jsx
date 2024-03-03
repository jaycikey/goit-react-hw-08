import DocumentTitle from "../components/DocumentTitle";
import { Container, Typography, Paper } from "@mui/material";

const Home = () => {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <Container
        maxWidth="md"
        sx={{
          minHeight: "calc(100vh - 50px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Typography variant="h3" component="h1" textAlign="center" gutterBottom>
          Phonebook Welcome Page 👋
        </Typography>

        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="body1" paragraph>
            Welcome to the Phonebook App! This application provides a seamless
            experience for managing your contacts. Easily add, delete, and edit
            contact information all in one place.
          </Typography>
          <Typography variant="body1" paragraph>
            Utilizing the latest web technologies, including React and Material
            UI, this app offers a responsive and intuitive interface. Secure and
            reliable, the Phonebook App ensures your contact data is always
            accessible whenever you need it.
          </Typography>
          <Typography variant="body1">
            Get started by adding your first contact or exploring the existing
            list.
          </Typography>
        </Paper>
      </Container>
    </>
  );
};

export default Home;
