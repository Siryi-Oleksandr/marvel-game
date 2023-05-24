import React from 'react'

import TeamItemSmall from './TeamItemSmall/TeamItemSmall'
import { ListWrapper, TeamBox, TeamHeader, TeamItemCommand } from './ChooseTeamList.styled'

import { useCardsState } from '../../hooks/useCardsState'
import { setAllTeam } from '../../redux/cards/slice'
import { useDispatch } from 'react-redux'



function ChooseTeamList({ refUp }) {
  const { cards } = useCardsState()

  const dispatch = useDispatch()

  function mergeHeroesIntoTeams(heroes) {
    const mergedHeroes = {}
    heroes.forEach(hero => {
      if (!mergedHeroes[hero.team]) {
        mergedHeroes[hero.team] = []
      }
      mergedHeroes[hero.team].push(hero)
    })

    return Object.values(mergedHeroes)
  }

  const mergedHeroes = mergeHeroesIntoTeams(cards)


  function onSetTeam(team) {
    dispatch(setAllTeam([]))
    dispatch(setAllTeam(team))
    smoothScroll(refUp.current)
  }
  function smoothScroll(target) {
      if(target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    // window.scrollTo({
    //   top: 0,
    //   behavior: "smooth"
    // });
  }

  return (
    <ListWrapper>
      {
        mergedHeroes.map((team) => {
          return (
              <TeamItemCommand onClick={() => onSetTeam(team)} key={team[0].team}>
                <TeamHeader>
                  {team[0].team}
                </TeamHeader>
                <TeamBox>
                  {
                    team.map((hero) => {
                      return <TeamItemSmall key={hero.id} hero={hero}/>
                    })
                  }
                </TeamBox>
              </TeamItemCommand>
          )
        })
      }
    </ListWrapper>
  )
}

export default ChooseTeamList
