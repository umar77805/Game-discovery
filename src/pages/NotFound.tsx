import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
      height={"100vh"}
    >
      <Text>
        Invalid Page Route. Please Move to a valid Page (How about{" "}
        <Link to="/" style={{ textDecoration: "underline" }}>
          Home Page
        </Link>
        ?)
      </Text>
    </Box>
  );
};

export default NotFound;
