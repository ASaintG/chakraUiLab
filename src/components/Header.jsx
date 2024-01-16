import { Box,Center,SimpleGrid } from '@chakra-ui/react'


const Header =() =>{
    return(
        <Box display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        marginTop='30px'>
           
        <Box
        w="1000px"
        h="350px"
        backgroundImage="url('https://img.freepik.com/foto-gratis/al-atardecer-playa-tropical-mar-palmera-coco_74190-1075.jpg?w=1380&t=st=1705422214~exp=1705422814~hmac=5f3ba8496773624e69eb63057d320bbf04780ed4ad874d4c185bf26719d91626')"  
        backgroundSize="cover"
        backgroundPosition="center"
        borderRadius="md"
        boxShadow="lg"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box textAlign="center" color='white'>
          <Center>
            Domina el Terreno
          </Center>
        </Box>
        <Box mt={4} textAlign="center">
          <Box as='button' borderRadius='md' bg='rgba(255, 99, 71, 0.3)' color='white' marginRight='10px' px={4} h={8} mb={2} _hover={{ bg: '#b8bdc1', color:'#000' }}>
            Ver Detalles
          </Box>
          <Box as='button' borderRadius='md' bg='rgba(255, 99, 71, 0.3)' color='white' px={4} h={8} _hover={{ bg: '#b8bdc1', color:'#000' }}>
            Ver Video
          </Box>
        </Box>
      </Box>
      </Box>
    )
    
}

export default Header;