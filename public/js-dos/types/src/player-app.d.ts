import { ClientId, DosPlayer, DosPlayerOptions } from './player';
import { LatencyInfo } from './backend/v7/latency';
export declare type SidebarPage = 'main' | 'latency-info' | 'networking';
export interface Props {
  player: () => DosPlayer;
  options: () => DosPlayerOptions;
  clientId: ClientId | null;
  setClientId: (clientId: ClientId | null) => void;
  requestClientId?: (userGesture: boolean) => Promise<ClientId | null>;
  anonymousClientId: ClientId;
  networkToken: string | null;
  setNetworkToken: (token: string | null) => void;
  mobileControls: boolean;
  setMobileControls: (controls: boolean) => Promise<void>;
  mirroredControls: boolean;
  setMirroredControls: (mirrored: boolean) => Promise<void>;
  autolock: boolean;
  setAutolock: (autolock: boolean) => Promise<void>;
  keyboard: boolean;
  toggleKeyboard: () => void;
  fullscreen: boolean;
  toggleFullscreen: () => void;
  pause: boolean;
  setPause: (pause: boolean) => void;
  mute: boolean;
  setMute: (mute: boolean) => void;
  actionBar: boolean;
  setActionBar: (actionBar: boolean) => void;
  sideBar: boolean;
  openSideBar: () => void;
  closeSideBar: () => void;
  region: string | null;
  setRegion: (region: string | null) => void;
  estimatingRegion: string | null;
  setEstimatingRegion: (region: string | null) => void;
  latencyInfo: LatencyInfo | null;
  setLatencyInfo: (latencyInfo: LatencyInfo) => void;
  showTips: boolean;
  setShowTips: (showTips: boolean) => void;
  sideBarPage: SidebarPage;
  setSideBarPage: (page: SidebarPage) => void;
  ipxConnected: boolean;
  setIpxConnected: (ipxConnected: boolean) => void;
}
export declare function PlayerApp(playerProps: {
  player: () => DosPlayer;
  options: () => DosPlayerOptions;
  setOnRun: (onRun: () => void) => void;
}): import('preact').VNode<any> | import('preact').VNode<any>[];
export declare function createPlayerApp(
  root: HTMLDivElement,
  player: DosPlayer,
  options: DosPlayerOptions,
  setOnRun: (onRun: () => void) => void
): void;
