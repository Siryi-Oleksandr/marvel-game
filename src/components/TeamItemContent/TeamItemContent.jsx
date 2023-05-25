import React from 'react'
import { TeamBox, TeamHeader, TeamItemCommand } from '../ChooseTeamList/ChooseTeamList.styled'
import TeamItemSmall from '../ChooseTeamList/TeamItemSmall/TeamItemSmall'

function TeamItemContent({team, teamName, statisticPage = false}) {
  return (
    <>
      <TeamItemCommand >
      <TeamHeader>
        {teamName}
      </TeamHeader>
      <TeamBox>
        {
          team.map((hero) => {
            return <TeamItemSmall statisticPage={statisticPage} key={hero.id} hero={hero}/>
          })
        }
      </TeamBox>
      </TeamItemCommand>
    </>
  )
}

export default TeamItemContent
