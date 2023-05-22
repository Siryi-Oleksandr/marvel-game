import React, { useEffect } from 'react'
import ChooseTeamList from '../../components/ChooseTeamList/ChooseTeamList'
import { useDispatch } from 'react-redux'
import { addCardToTeam, deleteAllHeroes } from '../../redux/cards/slice'
import SelectedTeam from '../../components/TeamList/TeamList'
import './PlayTeamGame.scss'


export const PlayTeamGame = () => {


  const dispatch = useDispatch()

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

  return <div className="wrapper">
    <SelectedTeam />
    <ChooseTeamList />
  </div>
}
