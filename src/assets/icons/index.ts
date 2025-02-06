import React from 'react';

import windowResize from './windowResize.png';
import maximize from './maximize.png';
import minimize from './minimize.png';
import computerBig from './computerBig.png';
import computerSmall from './computerSmall.png';
import myComputer from './myComputer.png';
import showcaseIcon from './showcaseIcon.png';
import doomIcon from './doomIcon.png';
import gtaIcon from './gtaIcon.png';
import diggerIcon from './diggerIcon.png';
import internetIcon from './internetIcon.png';
import startIcon from './start.png';
import henordleIcon from './henordleIcon.png';
import credits from './credits.png';
import volumeOn from './volumeOn.png';
import volumeOff from './volumeOff.png';
import trailIcon from './trailIcon.png';
import windowGameIcon from './windowGameIcon.png';
import windowExplorerIcon from './windowExplorerIcon.png';
import windowsStartIcon from './windowsStartIcon.png';
import scrabbleIcon from './scrabbleIcon.png';
import close from './close.png';
import ieIcon from './ie.png';
import emailIcon from './email.png';
import msnIcon from './msn.png';
import winPlayerIcon from './winPlayer.png';
import messengerIcon from './messenger.png';
import calculatorIcon from './calculator.png';
import notepadIcon from './notepad.png';
import runIcon from './run.png';
import documentIcon from './documents.png';
import picturesIcon from './pictures.png';
import musicIcon from './musics.png';
import computerIcon from './computer.png';
import githubIcon from './github-logo.png';
import linkedinIcon from './linkedin.png';
import helpIcon from './help.png';
import searchIcon from './search.png';
import turnOffIcon from './turnoff.png';
import userIcon from './user.png';
import logOffIcon from './logoff.png';

const icons = {
  windowResize: windowResize,
  maximize: maximize,
  minimize: minimize,
  computerBig: computerBig,
  computerSmall: computerSmall,
  myComputer: myComputer,
  showcaseIcon: showcaseIcon,
  doomIcon: doomIcon,
  gtaIcon: gtaIcon,
  diggerIcon: diggerIcon,
  internetIcon: internetIcon,
  volumeOn: volumeOn,
  volumeOff: volumeOff,
  credits: credits,
  scrabbleIcon: scrabbleIcon,
  henordleIcon: henordleIcon,
  close: close,
  windowGameIcon: windowGameIcon,
  windowExplorerIcon: windowExplorerIcon,
  windowsStartIcon: windowsStartIcon,
  trailIcon: trailIcon,
  startIcon: startIcon,
  ie: ieIcon,
  email: emailIcon,
  msn: msnIcon,
  winPlayer: winPlayerIcon,
  messanger: messengerIcon,
  calculator: calculatorIcon,
  notepad: notepadIcon,
  run: runIcon,
  documents: documentIcon,
  pictures: picturesIcon,
  music: musicIcon,
  computer: computerIcon,
  github: githubIcon,
  linkedin: linkedinIcon,
  help: helpIcon,
  search: searchIcon,
  turnOff: turnOffIcon,
  user: userIcon,
  logOff: logOffIcon,
};

export type IconName = keyof typeof icons;

const getIconByName = (
  iconName: IconName
  // @ts-ignore
): React.FC<React.SVGAttributes<SVGElement>> => icons[iconName];

export default getIconByName;
