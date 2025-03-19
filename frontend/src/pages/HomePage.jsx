import { Container, SimpleGrid, Text, VStack, Box, Heading, useColorModeValue, ScaleFade } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
	const { fetchProducts, products } = useProductStore();

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);

	const headerGradient = useColorModeValue(
		"linear(to-r, blue.400, purple.500)",
		"linear(to-r, blue.200, purple.300)"
	);

	return (
		<ScaleFade initialScale={0.9} in={true}>
			<Container maxW="container.xl" py={12}>
				<VStack spacing={12}>
					<Box textAlign="center" w="full">
						<Heading
							as="h1"
							size="2xl"
							bgGradient={headerGradient}
							bgClip="text"
							letterSpacing="tight"
							mb={4}
						>
							Discover Our Products
						</Heading>
						<Text 
							color={useColorModeValue("gray.600", "gray.400")}
							fontSize="lg"
							maxW="container.md"
							mx="auto"
						>
							Explore our amazing collection of products curated just for you ✨
						</Text>
					</Box>

					<Box
						w="full"
						bg={useColorModeValue("gray.50", "gray.900")}
						py={12}
						px={4}
						rounded="2xl"
						shadow="xl"
						borderWidth="1px"
						borderColor={useColorModeValue("gray.100", "gray.700")}
						_hover={{
							transform: "translateY(-4px)",
							transition: "all 0.2s ease-in-out",
						}}
						transition="all 0.2s ease-in-out"
					>
						<SimpleGrid
							columns={{
								base: 1,
								sm: 2,
								lg: 3,
								xl: 4,
							}}
							spacing={{
								base: 6,
								md: 8,
								lg: 10,
							}}
							w="full"
						>
							{products.map((product) => (
								<ProductCard key={product._id} product={product} />
							))}
						</SimpleGrid>

						{products.length === 0 && (
							<Box
								textAlign="center"
								py={10}
								px={6}
								bg={useColorModeValue("white", "gray.800")}
								rounded="xl"
								shadow="md"
							>
								<Text 
									fontSize="xl" 
									fontWeight="bold" 
									color={useColorModeValue("gray.600", "gray.400")}
									mb={4}
								>
									No products found yet 😢
								</Text>
								<Link to="/create">
									<Text
										as="span"
										bgGradient={headerGradient}
										bgClip="text"
										fontSize="lg"
										fontWeight="bold"
										_hover={{
											textDecoration: "underline",
										}}
									>
										Create your first product →
									</Text>
								</Link>
							</Box>
						)}
					</Box>
				</VStack>
			</Container>
		</ScaleFade>
	);
};

export default HomePage;
