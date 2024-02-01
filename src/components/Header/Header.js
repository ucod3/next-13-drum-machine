'use client';
import React from 'react';
import { Volume2, VolumeX } from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';
import MaxWidthWrapper from '../MaxWidthWrapper';
import styles from './Header.module.css';

import { useSoundEnabled } from '../../hooks/useSoundEnabled';

function Header() {
  const id = React.useId();

  const { soundEnabled, toggleSound } = useSoundEnabled();

  return (
    <header className={styles.wrapper}>
      <MaxWidthWrapper className={styles.innerWrapper}>
        <a href='/'>Kool Website</a>

        <button onClick={toggleSound}>
          {soundEnabled ? <Volume2 /> : <VolumeX />}
          <VisuallyHidden>
            {soundEnabled ? 'Disable sound effects' : 'Enable sound effects'}
          </VisuallyHidden>
        </button>
      </MaxWidthWrapper>
    </header>
  );
}

export default Header;
