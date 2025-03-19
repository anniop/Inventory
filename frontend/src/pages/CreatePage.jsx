import { Box, Button, Container, Heading, Input, useColorModeValue, useToast, VStack, Text, ScaleFade, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../store/product";
import { FiBox, FiDollarSign, FiImage } from "react-icons/fi";

const CreatePage = () => {
	const [newProduct, setNewProduct] = useState({
		name: "",
		price: "",
		image: "",
	});
	const toast = useToast();
	const { createProduct } = useProductStore();

	const handleAddProduct = async () => {
		const { success, message } = await createProduct(newProduct);
		if (!success) {
			toast({
				title: "Error",
				description: message,
				status: "error",
				duration: 3000,
				isClosable: true,
				position: "top-right",
			});
		} else {
			toast({
				title: "Success",
				description: message,
				status: "success",
				duration: 3000,
				isClosable: true,
				position: "top-right",
			});
		}
		setNewProduct({ name: "", price: "", image: "" });
	};

	const formBackground = useColorModeValue("white", "gray.900");
	const inputBg = useColorModeValue("gray.50", "gray.700");
	const headerGradient = useColorModeValue(
		"linear(to-r, blue.400, purple.500)",
		"linear(to-r, blue.200, purple.300)"
	);

	return (
		<ScaleFade initialScale={0.9} in={true}>
			<Container maxW="container.md" py={10}>
				<VStack spacing={8} align="stretch">
					<Box textAlign="center">
						<Heading
							as="h1"
							size="2xl"
							bgGradient={headerGradient}
							bgClip="text"
							letterSpacing="tight"
							mb={2}
						>
							Create New Product
						</Heading>
						<Text color={useColorModeValue("gray.600", "gray.400")}>
							Add your amazing product to the store
						</Text>
					</Box>

					<Box
						bg={formBackground}
						p={8}
						rounded="xl"
						shadow="2xl"
						borderWidth="1px"
						borderColor={useColorModeValue("gray.100", "gray.700")}
						_hover={{
							transform: "translateY(-2px)",
							transition: "all 0.2s ease-in-out",
						}}
					>
						<VStack spacing={6}>
							<InputGroup>
								<InputLeftElement pointerEvents="none" children={<FiBox color="gray.500" />} />
								<Input
									placeholder="Product Name"
									name="name"
									value={newProduct.name}
									onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
									bg={inputBg}
									border="none"
									_focus={{
										boxShadow: "outline",
										bg: useColorModeValue("white", "gray.800"),
									}}
									size="lg"
									rounded="md"
								/>
							</InputGroup>

							<InputGroup>
								<InputLeftElement pointerEvents="none" children={<FiDollarSign color="gray.500" />} />
								<Input
									placeholder="Price"
									name="price"
									type="number"
									value={newProduct.price}
									onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
									bg={inputBg}
									border="none"
									_focus={{
										boxShadow: "outline",
										bg: useColorModeValue("white", "gray.800"),
									}}
									size="lg"
									rounded="md"
								/>
							</InputGroup>

							<InputGroup>
								<InputLeftElement pointerEvents="none" children={<FiImage color="gray.500" />} />
								<Input
									placeholder="Image URL"
									name="image"
									value={newProduct.image}
									onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
									bg={inputBg}
									border="none"
									_focus={{
										boxShadow: "outline",
										bg: useColorModeValue("white", "gray.800"),
									}}
									size="lg"
									rounded="md"
								/>
							</InputGroup>

							<Button
								colorScheme="purple"
								size="lg"
								w="full"
								onClick={handleAddProduct}
								bgGradient="linear(to-r, purple.500, blue.500)"
								_hover={{
									bgGradient: "linear(to-r, purple.600, blue.600)",
									transform: "translateY(-2px)",
									shadow: "lg",
								}}
								_active={{
									bgGradient: "linear(to-r, purple.700, blue.700)",
									transform: "translateY(0)",
								}}
								transition="all 0.2s ease-in-out"
							>
								Add Product
							</Button>
						</VStack>
					</Box>
				</VStack>
			</Container>
		</ScaleFade>
	);
};

export default CreatePage;
