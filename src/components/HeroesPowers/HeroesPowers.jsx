import React from 'react'

import { TabPanel, TabPanels, Tabs, TabList, Tab } from '@chakra-ui/react'

import { useCardsState } from '../../hooks/useCardsState'



function HeroesPowers({heroIndex}) {
  const { userTeam } = useCardsState()

  return (
    <>
      <Tabs
        color="red.500"
        minH="150px"
        maxW="90%"
        m="auto"
      >
        <TabList>
          {userTeam[heroIndex].powersAndAbilities.map((tab, index) => (
            <Tab key={index}>{tab.header}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {userTeam[heroIndex].powersAndAbilities.map((tab, index) => (
            <TabPanel p={userTeam[heroIndex].powersAndAbilities.length} key={index}>
              {tab.text}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </>
  )
}

export default HeroesPowers











