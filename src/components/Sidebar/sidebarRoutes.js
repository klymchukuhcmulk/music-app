import {
  faFire,
  faHome
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const sidebarRoutes = [
  {
    title: 'Home',
    icon: <FontAwesomeIcon icon={faHome} />
  },
  {
    title: 'Hot tracks',
    icon: <FontAwesomeIcon icon={faFire} />
  }
]

export default sidebarRoutes
