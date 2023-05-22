import React, { useEffect } from 'react'
import ChooseTeamList from '../../components/ChooseTeamList/ChooseTeamList'

import './PlayTeamGame.scss'
import SelectedTeam from '../../components/SelectedTeam/SelectedTeam'
import { Container, useBreakpointValue } from '@chakra-ui/react'



export const PlayTeamGame = () => {

  // function isAllHeroesFromSameTeam() {
  //   if(userTeam.length === 0) return false
  //   if(userTeam.length < 3 ) return false
  //   let teamName
  //   if(userTeam.length === 3) {
  //     teamName = userTeam[0].team
  //     return userTeam.every((hero) => hero.team === teamName)
  //   }
  // }
  console.log('mount')

  useEffect(() => {
    // if(isAllHeroesFromSameTeam()) {
    //   dispatch(deleteAllHeroes())
    // }
  })
  const containerSize = useBreakpointValue({ base: "100%", sm: "768px", xl: "1280px" });
  console.log(containerSize)
  return <Container maxW={containerSize}>
    <SelectedTeam />
    <ChooseTeamList />
  </Container>
}
