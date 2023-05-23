import React, { useState } from 'react';
import './Accordeon.scss';
import { Box } from '@chakra-ui/react';
import { useCardsState } from 'hooks/useCardsState';

export const Accordeon = () => {
  const { statistics } = useCardsState();
  const [fights, setFights] = useState(statistics);
  console.log(statistics);
  return (
    <Box className="AccordeonContainer" setFights={setFights}>
      {fights.length > 0
        ? fights.map(item => (
            <Box className="AccordeonTab">
              <input type="checkbox" id="chck1" className="AccordeonInput" />
              <label className="TabLabel" htmlFor="chck1">
                Item 1
              </label>
              <Box className="TabContent">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum,
                reiciendis!
              </Box>
            </Box>
          ))
        : null}
    </Box>
  );
};
