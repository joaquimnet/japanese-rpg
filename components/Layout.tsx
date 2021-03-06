import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Box, Flex, List, ListItem } from 'tacti';
import { Bottom, Fill, LeftResizable, ViewPort } from 'react-spaces';

import { DisplayKanji } from './DisplayKanji/DisplayKanji';

type Props = {
  children?: ReactNode;
  title?: string;
};

const MenuItem = ({ href, children }) => (
  <ListItem>
    <Flex align='center' style={{ height: '2rem' }}>
      <Link href={href}>
        <a
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {children}
        </a>
      </Link>
    </Flex>
  </ListItem>
);

const Layout = ({ children, title = 'This is the default title' }: Props) => {
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ViewPort>
        <LeftResizable size='220px' style={{ backgroundColor: 'white' }}>
          <Box
            component={Flex}
            style={{
              marginBottom: '0.25rem',
              backgroundColor: '#020d1d',
              borderRadius: '0',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            ðº <DisplayKanji content='æ¥æ¬èªã®RPG' furigana='Japanese RPG' color='white' />
          </Box>
          <List>
            <MenuItem href='/'>ð  Home</MenuItem>
            <MenuItem href='/hunt'>ð¹ Hunting Grounds</MenuItem>
            <MenuItem href='/dungeons'>â Dungeons</MenuItem>
            <MenuItem href='/workshop'>â Workshop</MenuItem>
            <MenuItem href='/mine'>â Mine</MenuItem>
          </List>
          <hr />
          <Box
            component={Flex}
            style={{
              marginBottom: '0.25rem',
              backgroundColor: '#020d1d',
              borderRadius: '0',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            ð <DisplayKanji content='ã¤ã³ãã³ããª' furigana='Inventory' color='white' />
          </Box>
          <List>
            <MenuItem href='/kana'>ð Kana</MenuItem>
            <MenuItem href='/kanji'>ð· Kanji</MenuItem>
            <MenuItem href='/vocab'>ð³ Vocab</MenuItem>
            {/* <MenuItem href='/mine'>â Text Mine</MenuItem> */}
          </List>
        </LeftResizable>
        <Fill>
          <Fill style={{ overflowY: 'scroll' }}>{children}</Fill>
          <Bottom size='10%'>
            <footer>
              <hr />
              <span>I'm here to stay (Footer)</span>
            </footer>
          </Bottom>
        </Fill>
      </ViewPort>
    </div>
  );
};

export default Layout;
