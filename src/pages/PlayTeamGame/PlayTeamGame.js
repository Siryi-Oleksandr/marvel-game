import React, { useEffect, useRef } from 'react'
import ChooseTeamList from '../../components/ChooseTeamList/ChooseTeamList'

import './PlayTeamGame.scss'
import SelectedTeam from '../../components/SelectedTeam/SelectedTeam'
import { Container, useBreakpointValue } from '@chakra-ui/react'
import { useCardsState } from '../../hooks/useCardsState'
import { useDispatch } from 'react-redux'
import { setAllTeam } from '../../redux/cards/slice'


export const PlayTeamGame = () => {
  const containerSize = useBreakpointValue({ base: '100%', sm: '768px', xl: '1280px' })
  // const [goToFight, setGoToFight] = useState(false)
  const { userTeam } = useCardsState()

  const dispatch = useDispatch()

  function isAllHeroesFromSameTeam() {
    if (userTeam.length === 0) return false
    if (userTeam.length < 3) return true
    let teamName
    if (userTeam.length === 3) {
      teamName = userTeam[0].team
      return !userTeam.every((hero) => hero.team === teamName)
    }
  }

  const refUp = useRef()
  useEffect(() => {
    if (isAllHeroesFromSameTeam()) {
      dispatch(setAllTeam([]))
    }
  })

  return (
    <Container ref={refUp} maxW={containerSize}>
      <SelectedTeam/>
      <ChooseTeamList refUp={refUp}/>
    </Container>
  )
}
