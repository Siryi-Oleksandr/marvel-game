import React, { useEffect } from 'react'
import ChooseTeamList from '../../components/ChooseTeamList/ChooseTeamList'

import './PlayTeamGame.scss'
import SelectedTeam from '../../components/SelectedTeam/SelectedTeam'



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

  return <>
    <SelectedTeam />
    <ChooseTeamList />
  </>
}
