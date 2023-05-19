import React from 'react'
import { Card, HeroNameSmall, ItemWrapper } from './TeamItemSmall.styled'

function TeamItemSmall({hero}) {

  return (
    <ItemWrapper>
      <Card imgUrl={hero.imgUrl}>
        <HeroNameSmall>{hero.name}</HeroNameSmall>
      </Card>
    </ItemWrapper>
  )
}

export default TeamItemSmall
