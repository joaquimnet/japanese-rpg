import React from 'react';
import { Box, Flex } from 'tacti';

import styles from './KanjiBox.module.css';

interface Props {
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const KanjiBox: React.FC<Props> = ({ onClick, children, ...otherProps }) => {
  return (
    <Box onClick={onClick} height={1} className={styles.KanjiBox} {...otherProps}>
      <Flex justify='center' align='center'>
        {children}
      </Flex>
    </Box>
  );
};
