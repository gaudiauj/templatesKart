import { PropsWithChildren } from 'react';
import {
  chakra,
  Box,
  Stack,
  VStack,
  HStack,
  Heading,
  Flex,
  Text,
  Image,
  useColorMode,
  useColorModeValue,
  Container,
  Icon,
  StackProps
} from '@chakra-ui/react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsTelephoneX } from 'react-icons/bs';

interface ProductCardProps {
  id: number;
  title: string;
  detail: string[];
  location: string;
  updated_at: string;
  price: string;
  image: string;
}

const productsList: ProductCardProps[] = [
  {
    id: 1,
    title: 'Ford F-150 SUV 2021',
    location: 'Paris',
    detail: ['2021', 'Petrol', '4500 cc', 'Automatic'],
    updated_at: '17 days ago',
    price: '$ 400k',
    image:
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb'
  },
  {
    id: 2,
    title: 'Haval Jolion Top',
    location: 'New York',
    detail: ['2021', 'Petrol', '3500 cc', 'Automatic'],
    updated_at: '1 days ago',
    price: '$ 450k',
    image:
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb'
  }
];

export const companies = [
  {
    title: 'Company1',
    alt: 'company1 image',
    role: 'Senior Software Engineer',
    skills: ['ruby', 'rails', 'typescript', 'javascript', 'react', 'aws'],
    period: '2019 - Present',
    logo: ''
  }
];

const Index = () => {
  const { colorMode } = useColorMode();

  return (
    <Container maxW="7xl" p="12">
      <VStack spacing={4} maxW={'2xl'} margin="0 auto">
        {productsList.map((product) => (
          <Stack
            spacing={{ base: 0, md: 4 }}
            direction={{ base: 'column', md: 'row' }}
            border="1px solid"
            borderColor="gray.400"
            p={2}
            rounded="md"
          >
            <Flex>
              <Image
                rounded="md"
                w={{ base: '100%', md: '18rem' }}
                h="auto"
                objectFit="cover"
                src={product.image}
                alt={'product image'}
              />
            </Flex>
            <Stack direction="column" spacing={2} w="100%" mt={{ base: '5px !important', sm: 0 }}>
              <Flex justify="space-between">
                <chakra.h3 fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">
                  {product.title}
                </chakra.h3>
                <chakra.h3 fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">
                  {product.price}
                </chakra.h3>
              </Flex>
              <Box>
                <Text fontSize="lg" fontWeight="500">
                  {product.location}
                </Text>
              </Box>
              <Flex alignItems="center" color="gray.500">
                {product.detail.map((data, index) => (
                  <>
                    <Text fontSize={{ base: 'sm', sm: 'md' }}>{data}</Text>
                    {product.detail.length - 1 != index && (
                      <chakra.span mx={2} fontSize={{ base: 'sm', sm: 'md' }}>
                        |
                      </chakra.span>
                    )}
                  </>
                ))}
              </Flex>
              <Stack
                direction={{ base: 'column-reverse', sm: 'row' }}
                justify="space-between"
                alignItems={{ base: 'flex-start', sm: 'center' }}
              >
                <Text fontSize="sm" mt={{ base: 1, sm: 0 }}>
                  Updated {product.updated_at}
                </Text>
                <Stack direction="row" spacing={1} mb="0 !important">
                  <IconButton>
                    <Icon as={AiOutlineHeart} w={4} h={4} />
                  </IconButton>
                  <IconButton spacing={2} bg="green.500" color="white">
                    <Icon as={BsTelephoneX} w={4} h={4} />
                    <Text fontSize="sm">Show Phone no.</Text>
                  </IconButton>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        ))}
      </VStack>
    </Container>
  );
};

interface IconButtonProps extends StackProps {
  children: React.ReactNode;
}

const IconButton = ({ children, ...props }: PropsWithChildren<IconButtonProps>) => {
  return (
    <HStack
      cursor="pointer"
      border="1px solid"
      borderColor="gray.300"
      px={2}
      py="0.15rem"
      alignItems="center"
      rounded="sm"
      spacing={2}
      {...props}
    >
      {children}
    </HStack>
  );
};

export default Index;
