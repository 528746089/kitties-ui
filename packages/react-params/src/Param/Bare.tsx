// Copyright 2017-2020 @polkadot/react-components authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BareProps } from '@polkadot/react-components/types';

import React from 'react';
import styled from 'styled-components';
import { classes } from '@polkadot/react-components/util';

interface Props extends BareProps {
  children?: React.ReactNode;
}

function Bare ({ children, className = '' }: Props): React.ReactElement<Props> {
  return (
    <div className={classes('ui--row', className)}>
      {children}
    </div>
  );
}

export default React.memo(styled(Bare)`
  position: relative;
`);
