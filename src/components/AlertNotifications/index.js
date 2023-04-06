// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => (
  <>
    <h1 className="heading">Alert Notifications</h1>
    <Notification>
      <AiFillCheckCircle className="icon1" />
      <div className="text-container">
        <h1 className="heading1">Success</h1>
        <p className="description">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>
    <Notification>
      <RiErrorWarningFill className="icon2" />
      <div className="text-container">
        <h1 className="heading2">Error</h1>
        <p className="description">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
    <Notification>
      <MdWarning className="icon3" />
      <div className="text-container">
        <h1 className="heading3">Warning</h1>
        <p className="description">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
    <Notification>
      <MdInfo className="icon4" />
      <div className="text-container">
        <h1 className="heading4">Info</h1>
        <p className="description">
          Anyone on the internet can view these files
        </p>
      </div>
    </Notification>
  </>
)

export default AlertNotifications
