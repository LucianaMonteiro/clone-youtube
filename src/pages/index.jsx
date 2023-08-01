import { Box, Button, Container, Typography } from "@material-ui/core";
import Layout from "@/components/Layout";

export default function Home() {
  const title = "YouTube";

  return (
    <Container maxWidth="lg">
      <Layout title={title}>
        <Typography variant="h4">Clone do {title}</Typography>
        <Button color="primary">Clone do {title}</Button>
        <Box>&nbsp;</Box>
        <Button color="primary" variant="contained">
          Contained
        </Button>
        <Box>&nbsp;</Box>
        <Button color="secondary" variant="outlined">
          Outlined
        </Button>
      </Layout>
    </Container>
  );
}
