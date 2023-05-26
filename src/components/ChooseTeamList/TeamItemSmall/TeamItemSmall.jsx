import React from 'react'
import { Card, HeroNameSmall, ItemWrapper } from './TeamItemSmall.styled'
import { useBreakpointValue } from '@chakra-ui/react'

export const TeamItemSmall = ({statisticPage, hero}) => {
  const containerSize = useBreakpointValue({ base: "100%", sm: "768px", xl: "1280px" });

  return (
    <ItemWrapper containerSize={containerSize} statisticPage={statisticPage}>
      <Card containerSize={containerSize} statisticPage={statisticPage} imgUrl={hero.imgUrl}>
        <HeroNameSmall containerSize={containerSize} statisticPage={statisticPage} >{hero.name}</HeroNameSmall>
      </Card>
    </ItemWrapper>
  )
}


