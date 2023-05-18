import React, { useState } from 'react'
import ChooseTeamList from '../../components/ChooseTeamList/ChooseTeamList'
import TeamList from '../../components/TeamList/TeamList'



export const PlayTeamGame = () => {
  const [userTeam, setUserTeam] = useState([])
  function deleteFromTeam() {

  }
  return <div>
    <TeamList team={userTeam} deleteFromTeam={deleteFromTeam} />
    <ChooseTeamList setTeam={setUserTeam}/>
  </div>
}
