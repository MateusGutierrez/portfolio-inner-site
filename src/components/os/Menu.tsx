import Colors from '../../constants/colors';
import { Icon } from '../general';

interface MenuProps {
  shutdown: () => void;
}

const Menu: React.FC<MenuProps> = ({ shutdown }) => {
  return (
    <div style={styles.menu}>
      <div style={styles.menuColumns}>
        <div style={styles.menuFirstColumn}>
          <div style={styles.container}>
            <div  className="start-menu-option" style={styles.internetMaximize}>
              <Icon icon="ie" size={27} style={styles.icon} />
              <p style={styles.label}>Internet</p>
            </div>
            <div  className="start-menu-option" style={styles.internetMaximize}>
              <Icon icon="email" size={27} style={styles.icon} />
              <p style={styles.label}>E-mail</p>
            </div>
          </div>
          <div style={styles.container}>
            <div  className="start-menu-option" style={styles.internetMaximize}>
              <Icon icon="msn" size={27} style={styles.icon} />
              <p style={styles.label}>MSN</p>
            </div>
            <div  className="start-menu-option" style={styles.internetMaximize}>
              <Icon icon="winPlayer" size={27} style={styles.icon} />
              <p style={styles.label}>Windows Media Player</p>
            </div>
            <div  className="start-menu-option" style={styles.internetMaximize}>
              <Icon icon="messanger" size={27} style={styles.icon} />
              <p style={styles.label}>Windows Messenger</p>
            </div>
            <div  className="start-menu-option" style={styles.internetMaximize}>
              <Icon icon="calculator" size={27} style={styles.icon} />
              <p style={styles.label}>Calculator</p>
            </div>
            <div  className="start-menu-option" style={styles.internetMaximize}>
              <Icon icon="notepad" size={27} style={styles.icon} />
              <p style={styles.label}>Notepad</p>
            </div>
          </div>
          <div
             className="start-menu-option"
            id="allPrograms"
            style={styles.internetMaximize && styles.allPrograms}
          >
            <p style={styles.label}>All Programs</p>
            <Icon icon="run" size={27} style={styles.icon} />
          </div>
        </div>

        <div style={styles.menuLastColumn}>
          <div style={styles.container}>
            <div  className="start-menu-option" style={styles.internetMaximize}>
              <Icon icon="documents" size={27} style={styles.icon} />
              <p style={styles.label}>My Documents</p>
            </div>
            <div  className="start-menu-option" style={styles.internetMaximize}>
              <Icon icon="pictures" size={27} style={styles.icon} />
              <p style={styles.label}>My Pictures</p>
            </div>
            <div  className="start-menu-option" style={styles.internetMaximize}>
              <Icon icon="music" size={27} style={styles.icon} />
              <p style={styles.label}>My Music</p>
            </div>
            <div  className="start-menu-option" style={styles.internetMaximize}>
              <Icon icon="computer" size={27} style={styles.icon} />
              <p style={styles.label}>My Computer</p>
            </div>
          </div>
          <div style={styles.container}>
            <a
               className="start-menu-option"
              href="https://github.com/joao-vitorg/windows-css"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.internetMaximize}
            >
              <Icon icon="github" size={27} style={styles.icon} />
              <p style={styles.label}>GitHub</p>
            </a>
            <a
               className="start-menu-option"
              href="https://www.linkedin.com/in/joao-vitorg"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.internetMaximize}
            >
              <Icon icon="linkedin" size={27} style={styles.icon} />
              <p style={styles.label}>Linkedin</p>
            </a>
          </div>
          <div  className="start-menu-option" style={styles.internetMaximize}>
            <Icon icon="help" size={27} style={styles.icon} />
            <p style={styles.label}>Help</p>
          </div>
          <div  className="start-menu-option" style={styles.internetMaximize}>
            <Icon icon="search" size={27} style={styles.icon} />
            <p style={styles.label}>Search</p>
          </div>
          {/* <div  className="start-menu-option" style={styles.internetMaximize}>
            <img alt="" src="images/run.png" />
            <p style={styles.label}>Run...</p>
          </div> */}
        </div>
      </div>

      <div id="menuSystem" style={styles.winFooter}>
        <div style={styles.startMenuOption}  className="start-menu-option">
          <Icon icon="logOff" size={27} style={styles.icon} />
          <p style={styles.label}>Log OFF</p>
        </div>
        <div
          className="start-menu-option"
          style={styles.startMenuOption}
          onMouseDown={shutdown}
        >
          <Icon style={styles.startMenuIcon} icon="turnOff" />
          <p style={styles.label}>Turn OFF Computer</p>
        </div>
      </div>
    </div>
  );
};

const styles: StyleSheetCSS = {
  menu: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  menuColumns: {
    display: 'flex',
  },
  menuFirstColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    padding: 10,
    backgroundColor: `${Colors.white}`,
    marginLeft: 3,
    width: '100%',
  },
  internetMaximize: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    height: 27,
    padding: 2,
  },
  allPrograms: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    fontWeight: 'bolder',
  },
  menuLastColumn: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: `${Colors.winLightBlue}`,
    width: '100%',
    marginRight: 3,
    paddingLeft: 10,
    gap: 10,
    padding: 10,
  },
  icon: {
    height: '100%',
  },
  label: {
    fontSize: 16,
    fontFamily: 'Segoe UI',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    borderBottom: `1px solid ${Colors.borderGray}`,
    paddingBottom: 10,
  },
  startMenuOption: {
    alignItems: 'center',
    // flex: 1,
    height: 24,
    padding: 12,
    gap: 5,
  },
  startMenuText: {
    fontSize: 14,
    fontFamily: 'MSSerif',
    marginLeft: 8,
  },
  winFooter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 10,
    height: 30,
    padding: '10px 2px 10px',
    backgroundColor: `${Colors.winBlue}`,
    marginLeft:3,
    marginRight: 3,
  }
};

export default Menu;
