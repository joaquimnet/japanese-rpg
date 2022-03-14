import classNames from 'classnames';
import React from 'react';

import styles from './DisplayKanji.module.css';

interface Props {
  content: string;
  furigana?: string;
  color?: string;
  style?: React.CSSProperties;
  compact?: boolean;
  onClick?: () => void;
}

export const DisplayKanji: React.FC<Props> = ({
  color = '#000000',
  style = {},
  content,
  furigana,
  compact,
  onClick,
}) => {
  return (
    <span
      className={classNames(styles.DisplayKanji, {
        [styles.Furigana]: furigana,
        [styles.Compact]: compact,
      })}
      data-furigana={furigana}
      style={{
        color,
        ...style,
      }}
      lang='ja'
      onClick={onClick}
    >
      {content}
    </span>
  );
};
