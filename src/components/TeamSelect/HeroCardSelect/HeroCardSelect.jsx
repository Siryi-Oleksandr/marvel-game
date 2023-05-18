import { Box, Text } from '@chakra-ui/react'
import { MdAdd } from 'react-icons/md'
import React from 'react'

function HeroCardSelect({ category }) {

  return (
    <Box className="card">
      <Box className="icon">
        <MdAdd/>
      </Box>
      <Text className="text">
        Choose a hero from the category: <span className="category">{category}</span>
      </Text>
    </Box>
  )
}

export default HeroCardSelect
