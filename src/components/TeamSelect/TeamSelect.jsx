import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import './teamSelect.scss'
import HeroCardSelect from './HeroCardSelect/HeroCardSelect'

function TeamSelect() {

  const category = ['Intelligence', 'Force', 'Fighting Skills']
  return (

    <Box>
      <Box as="h1" className="header">
        Choose your team
      </Box>
      <Flex className="card-container">
        {category.map((category) => {
          return (
            <Box>
              <HeroCardSelect category={category}/>
            </Box>
          )
        })}
      </Flex>
    </Box>

  )
}

export default TeamSelect




