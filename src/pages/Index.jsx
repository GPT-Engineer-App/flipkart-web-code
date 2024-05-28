import { Box, Container, Flex, HStack, IconButton, Image, Input, InputGroup, InputRightElement, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      {/* Header */}
      <Flex as="header" py={4} justifyContent="space-between" alignItems="center" borderBottom="1px" borderColor="gray.200">
        <HStack spacing={4}>
          <Image src="https://images.unsplash.com/photo-1654573817889-296cad084c97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmbGlwa2FydCUyMGxvZ298ZW58MHx8fHwxNzE2OTA2MjA2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Flipkart Logo" boxSize="50px" />
          <InputGroup>
            <Input placeholder="Search for products, brands and more" />
            <InputRightElement>
              <IconButton aria-label="Search" icon={<FaSearch />} />
            </InputRightElement>
          </InputGroup>
        </HStack>
        <HStack spacing={4}>
          <IconButton aria-label="User" icon={<FaUser />} />
          <IconButton aria-label="Cart" icon={<FaShoppingCart />} />
        </HStack>
      </Flex>

      {/* Navigation Bar */}
      <Flex as="nav" py={4} justifyContent="space-around" borderBottom="1px" borderColor="gray.200">
        <Text>Electronics</Text>
        <Text>TVs & Appliances</Text>
        <Text>Men</Text>
        <Text>Women</Text>
        <Text>Baby & Kids</Text>
        <Text>Home & Furniture</Text>
        <Text>Sports, Books & More</Text>
        <Text>Flights</Text>
        <Text>Offer Zone</Text>
      </Flex>

      {/* Carousel */}
      <Box my={4}>
        <Image src="https://images.unsplash.com/photo-1550326897-59b13e651fcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZWF0dXJlZCUyMHByb2R1Y3RzJTIwY2Fyb3VzZWx8ZW58MHx8fHwxNzE2OTA2MjA2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Featured Products" borderRadius="md" />
      </Box>

      {/* Product Grid */}
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={4}>
        {Array.from({ length: 8 }).map((_, index) => (
          <Box key={index} borderWidth="1px" borderRadius="md" overflow="hidden">
            <Image src="https://images.unsplash.com/photo-1604935067269-27c7e8b36618?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwaW1hZ2V8ZW58MHx8fHwxNzE2OTA2MjA3fDA&ixlib=rb-4.0.3&q=80&w=1080" alt={`Product ${index + 1}`} />
            <Box p={4}>
              <Text fontWeight="bold">Product {index + 1}</Text>
              <Text>₹{(index + 1) * 1000}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Index;
