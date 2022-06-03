/**
 *
 * AutoConfict
 *
 */
import React, { memo } from 'react';
import { Setting } from './Setting';
import { Content } from './Content';

interface Props {}

export const AutoConfict = memo((props: Props) => {
  return (
    <div style={{display: 'flex'}}>
      <Setting />
      <Content />
    </div>
  );
});
