import React, { useState } from 'react'

import './SelectedTeam.scss'
import TeamItem from 'components/TeamItem/TeamItem'
import SectionTitle from '../SectionTitle/SectionTitle'
import { TeamSceletonWrapper } from '../TeamSceleton/TeamSceleton.styled'
import CardSceleton from '../CardSceleton/CardSceleton'
import intelligence from '../../images/skeleton-3.png'
import force from '../../images/skeleton-2.png'
import fight from '../../images/skeleton-1.png'
import { useCardsState } from '../../hooks/useCardsState'
import { setAllTeam } from '../../redux/cards/slice'
import { useDispatch } from 'react-redux'
import HeroesPowers from '../HeroesPowers/HeroesPowers'



function SelectedTeam({ deleteFromTeam }) {

  const { userTeam } = useCardsState()
  const [selectedHeroIndex, setSelectedHeroIndex] = useState(0)

  const dispatch = useDispatch()

  function onClearTeam() {
    dispatch(setAllTeam([]))

  }

  function showSelectedPowers(index) {
    setSelectedHeroIndex(index)
  }

  return (
    <>
      <SectionTitle>Choose your team</SectionTitle>
      <button className="clear-team-button" onClick={onClearTeam}>Clear team</button>
      {
        !userTeam.length ? (
          <>
            <TeamSceletonWrapper>
              <CardSceleton name="Intelligence" bgImg={intelligence}/>
              <CardSceleton name="Force" bgImg={force}/>
              <CardSceleton name="Fighting" bgImg={fight}/>
            </TeamSceletonWrapper>
          </>
        ) : (
          <TeamSceletonWrapper>
            {userTeam.map((hero, index) => (
                <div className={selectedHeroIndex === index ? 'selected-hero' : ''} key={hero.id}
                     onClick={() => showSelectedPowers(index)}>
                  <TeamItem hero={hero} deleteFromTeam={deleteFromTeam}/>
                </div>
              )
            )}
          </TeamSceletonWrapper>
        )
      }
      {
        userTeam.length ? (
          <HeroesPowers heroIndex={selectedHeroIndex}/>
        ) : <></>
      }
    </>
  )
}

export default SelectedTeam
