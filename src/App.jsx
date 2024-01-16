import Header from './components/Header'
import { Box,Center,SimpleGrid } from '@chakra-ui/react'
function App() {
  

  return (
    <>
    <Header></Header>
    <Box
      w="500px"  // Ajusta el tamaño según tus necesidades
      h="235px"  // Ajusta el tamaño según tus necesidades
      backgroundImage="url('https://img.freepik.com/foto-gratis/al-atardecer-playa-tropical-mar-palmera-coco_74190-1075.jpg?w=1380&t=st=1705422214~exp=1705422814~hmac=5f3ba8496773624e69eb63057d320bbf04780ed4ad874d4c185bf26719d91626')"
      backgroundSize="cover"
      backgroundPosition="center"
      boxShadow="md"
      position="absolute"
      margin='100px'
      marginLeft='20px'
      textAlign="center"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      borderRadius='10px'
    >
      <Center color='white'>
        <Box>
          Contenido de la SmallHeader
        </Box>
      </Center>
      <Box mt={4}>
        <Box
          as='button'
          borderRadius='md'
          bg='rgba(255, 99, 71, 0.3)'
          color='white'
          px={4}
          h={8}
          _hover={{ bg: '#b8bdc1', color:'#000' }}
        >
          Ver Detalles
        </Box>
        <Box
          as='button'
          borderRadius='md'
          bg='rgba(255, 99, 71, 0.3)'
          color='white'
          px={4}
          h={8}
          _hover={{ bg: '#b8bdc1', color:'#000' }}
          mt={2}
        >
          Ver Video
        </Box>
      </Box>
    </Box>
    </>
  )
}

export default App
