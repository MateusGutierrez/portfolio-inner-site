import React, { useState } from 'react';
import DosPlayer from '../dos/DosPlayer';
import Window from '../os/Window';

export interface DiggerAppProps extends WindowAppProps {}

const DiggerApp: React.FC<DiggerAppProps> = (props) => {
  const [width, setWidth] = useState(980);
  const [height, setHeight] = useState(670);

  return (
    <Window
      top={10}
      left={10}
      width={width}
      height={height}
      windowTitle="Digger"
      windowBarColor="#1C1C1C"
      windowBarIcon="windowGameIcon"
      bottomLeftText={'Powered by JSDOS & DOSBox'}
      closeWindow={props.onClose}
      onInteract={props.onInteract}
      minimizeWindow={props.onMinimize}
      onWidthChange={setWidth}
      onHeightChange={setHeight}
    >
      <DosPlayer width={width} height={height} bundleUrl="digger.jsdos" />
    </Window>
  );
};

export default DiggerApp;
