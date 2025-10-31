import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, Link, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
      height={"100vh"}
    >
      <Heading>Oops...</Heading>

      {isRouteErrorResponse(error) ? (
        <Text>
          Invalid Page Route. Please Move to a valid Page (How about{" "}
          <Link to="/" style={{ textDecoration: "underline" }}>
            Home Page
          </Link>
          ?)
        </Text>
      ) : (
        <Text>Unexpected Error Occured</Text>
      )}
    </Box>
  );
};

export default ErrorPage;
