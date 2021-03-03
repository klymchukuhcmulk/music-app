import sidebarRoutes from './sidebarRoutes'

import './Sidebar.scss'

const Sidebar = () => {

  const routesTemplate = (item, i) => {
    return (
      <div key={i} className="music-sidebar__routes__item">
        <div className="music-sidebar__routes__item-icon">{item.icon}</div>
        <div className="music-sidebar__routes__item-title">{item.title}</div>
      </div>
    )
  }
  return (
    <aside className="music-sidebar">
      <header className="music-sidebar__title">
        <h1>Music</h1>
      </header>
      <section className="music-sidebar__routes">
        {sidebarRoutes.map(routesTemplate)}
      </section>
    </aside>
  )
}

export default Sidebar
