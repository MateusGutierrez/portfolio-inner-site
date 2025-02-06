import React, { useEffect, useRef, useState } from 'react';
import Colors from '../../constants/colors';
import { Icon } from '../general';
import Menu from './Menu';
// import { } from '../general';
// import Home from '../site/Home';
// import Window from './Window';

export interface ToolbarProps {
  windows: DesktopWindows;
  toggleMinimize: (key: string) => void;
  shutdown: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({
  windows,
  toggleMinimize,
  shutdown,
}) => {
  const getTime = () => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    let mins = minutes < 10 ? '0' + minutes : minutes;
    const strTime = hours + ':' + mins + ' ' + amPm;
    return strTime;
  };

  const [startWindowOpen, setStartWindowOpen] = useState(false);
  const lastClickInside = useRef(false);

  const [lastActive, setLastActive] = useState('');

  useEffect(() => {
    let max = 0;
    let k = '';
    Object.keys(windows).forEach((key) => {
      if (windows[key].zIndex >= max) {
        max = windows[key].zIndex;
        k = key;
      }
    });
    setLastActive(k);
  }, [windows]);

  const [time, setTime] = useState(getTime());

  const updateTime = () => {
    setTime(getTime());
    setTimeout(() => {
      updateTime();
    }, 5000);
  };

  useEffect(() => {
    updateTime();
  });

  const onCheckClick = () => {
    if (lastClickInside.current) {
      setStartWindowOpen(true);
    } else {
      setStartWindowOpen(false);
    }
    lastClickInside.current = false;
  };

  useEffect(() => {
    window.addEventListener('mousedown', onCheckClick, false);
    return () => {
      window.removeEventListener('mousedown', onCheckClick, false);
    };
  }, []);

  const onStartWindowClicked = () => {
    setStartWindowOpen(true);
    lastClickInside.current = true;
  };

  const toggleStartWindow = () => {
    if (!startWindowOpen) {
      lastClickInside.current = true;
    } else {
      lastClickInside.current = false;
    }
  };

  return (
    <div style={styles.toolbarOuter}>
      {startWindowOpen && (
        <div
          onMouseDown={onStartWindowClicked}
          style={styles.startWindow}
          className="window"
        >
          <div className="title-bar" style={styles.windowTitle}>
            <Icon icon="user" style={styles.winUser} />
            <div className="title-bar-text" style={styles.userLabel}>
              Windows User
            </div>
          </div>
          <div className="window-body" style={styles.windowBody}>
            <Menu shutdown={shutdown} />

            {/* <div style={styles.startWindowInner}>
                <div style={styles.verticalStartContainer}>
                      <p style={styles.verticalText}>HeffernanOS</p>
                  </div>
                <div 
                  style={styles.startWindowContent}
                  >
                </div>
                  <div style={styles.startMenuSpace} />
                  <div style={styles.startMenuLine} />
              </div> */}
          </div>
        </div>
      )}
      <div
        className="window"
        style={{
          ...styles.toolbarInner,
          borderTopRightRadius: 0,
          borderTopLeftRadius: 0,
          background: 'transparent',
        }}
      >
        <div className="title-bar" style={styles.toolbar}>
          <div style={styles.startIcon} onMouseDown={toggleStartWindow}>
            <Icon icon="startIcon" />
          </div>
          <div style={styles.toolbarTabsContainer}>
            {Object.keys(windows).map((key) => {
              return (
                <div
                  key={key}
                  style={Object.assign(
                    {},
                    styles.tabContainerOuter,
                    lastActive === key &&
                      !windows[key].minimized &&
                      styles.activeTabOuter
                  )}
                  onMouseDown={() => toggleMinimize(key)}
                >
                  <div
                    style={Object.assign(
                      {},
                      styles.tabContainer,
                      lastActive === key &&
                        !windows[key].minimized &&
                        styles.activeTabInner
                    )}
                  >
                    <Icon
                      size={18}
                      icon={windows[key].icon}
                      style={styles.tabIcon}
                    />
                    <p style={styles.tabText}>{windows[key].name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div style={styles.time}>
          <Icon style={styles.volumeIcon} icon="volumeOn" />
          <p style={styles.timeText}>{time}</p>
        </div>
      </div>
    </div>
  );
};

const styles: StyleSheetCSS = {
  toolbarOuter: {
    boxSizing: 'border-box',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 40,
    zIndex: 100000,
  },
  verticalStartContainer: {
    // width: 30,
    height: '100%',
    background: Colors.darkGray,
  },
  verticalText: {
    fontFamily: 'Terminal',
    textOrientation: 'sideways',
    fontSize: 32,
    padding: 4,
    paddingBottom: 64,
    paddingTop: 8,
    letterSpacing: 1,
    color: Colors.lightGray,
    transform: 'scale(-1)',
    WebkitTransform: 'scale(-1)',
    MozTransform: 'scale(-1)',
    msTransform: 'scale(-1)',
    OTransform: 'scale(-1)',
    // @ts-ignore
    writingMode: 'tb-rl',
  },
  startWindowContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    // alignItems: 'flex-end',
  },
  startWindow: {
    position: 'absolute',
    bottom: 40,
    display: 'flex',
    flex: 1,
    width: 400,
    // height: 400,
    left: 0,
    boxSizing: 'border-box',
    border: `1px solid ${Colors.white}`,
    borderBottomColor: Colors.black,
    borderRightColor: Colors.black,
    flexDirection: 'column',
    // background: Colors.lightGray,
  },
  activeTabOuter: {
    border: `1px solid ${Colors.tabMediumBlue}`,
    boxShadow: 'inset 5px 5px 10px rgba(0, 0, 0, 0.3)',
    borderRadius: '3px',
    color: Colors.white,
  },
  startWindowInner: {
    border: `1px solid ${Colors.lightGray}`,
    borderBottomColor: Colors.darkGray,
    borderRightColor: Colors.darkGray,
    flex: 1,
  },
  startMenuText: {
    fontSize: 14,
    fontFamily: 'MSSerif',
    marginLeft: 8,
  },
  startMenuOption: {
    alignItems: 'center',
    // flex: 1,
    height: 24,
    padding: 12,
  },
  startMenuSpace: {
    flex: 1,
  },
  startMenuLine: {
    height: 1,
    background: Colors.white,
    borderTop: `1px solid ${Colors.darkGray}`,
  },
  activeTabInner: {
    border: `1px solid ${Colors.mediumBlue}`,
    backgroundColor: Colors.mediumBlue,
    pointerEvents: 'none',
  },
  tabContainerOuter: {
    display: 'flex',
    flex: 1,
    maxWidth: 300,
    marginRight: 4,
    boxSizing: 'border-box',
    cursor: 'pointer',
    backgroundColor: Colors.tabLightBlue,
    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '3px',
    border: `1px solid ${Colors.tabMediumBlue}`,
    color: Colors.white,
  },
  tabContainer: {
    display: 'flex',
    borderBottomColor: Colors.darkGray,
    borderRightColor: Colors.darkGray,
    alignItems: 'center',
    paddingLeft: 4,
    flex: 1,
  },
  tabIcon: {
    marginRight: 6,
  },
  startContainer: {
    alignItems: 'center',
    flexShrink: 1,
    padding: 1,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    borderTopRightRadius: 22,
  },
  startContainerOuter: {
    marginLeft: 0,
    paddingLeft: 24,
    width: 130,
    height: 50,
    cursor: 'pointer',
    backgroundColor: Colors.green,
    boxShadow: 'inset 5px 5px 10px rgba(0, 0, 0, 0.5)',
    color: Colors.white,
    borderTopRightRadius: 22,
    borderBottomRightRadius: 22,
  },
  startContainerInner: {
    marginLeft: 0,
    paddingLeft: 24,
    width: 130,
    height: 50,
    cursor: 'pointer',
    backgroundColor: Colors.darkGreen,
    boxShadow: 'inset 5px 5px 10px rgba(0, 0, 0, 0.5)',
    color: Colors.white,
    borderTopRightRadius: 22,
    borderBottomRightRadius: 22,
  },
  toolbarTabsContainer: {
    // background: 'blue',
    height: 30,
    flex: 1,
    marginLeft: 4,
    marginRight: 4,
  },
  toolbarInner: {
    borderTop: `2px solid ${Colors.lightBlue}`,
    alignItems: 'center',
    flex: 1,
  },
  toolbar: {
    flexGrow: 1,
    width: '100%',
    paddingLeft: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    height: 28,
  },
  time: {
    flexShrink: 1,
    width: 100,
    height: 33,
    paddingLeft: 10,
    paddingRight: 32,
    backgroundColor: Colors.lightBlue,
    justifyContent: 'space-between',
    alignItems: 'center',
    border: 'transparent',
  },
  volumeIcon: {
    cursor: 'pointer',
    height: 18,
  },
  tabText: {
    fontSize: 14,
    fontFamily: 'MSSerif',
  },
  timeText: {
    fontSize: 16,
    fontFamily: 'Segoe UI',
    color: 'white',
  },
  toolbarText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'Segoe UI',
    fontStyle: 'italic',
  },
  startIcon: {
    cursor: 'pointer',
  },
  windowTitle: {
    height: 50,
    padding: 10,
    display: 'flex',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  winUser: {
    border: `1px solid ${Colors.white}`,
    borderRadius: 4,
  },
  userLabel: {
    fontSize: '1.5em',
    fontWeight: 'bold',
  },
  windowBody: {
    padding: 0,
    margin: 0,
  },
};

export default Toolbar;
