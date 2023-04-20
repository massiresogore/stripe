import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./AppContext";
import sublinks from "../data";
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar "}>
      <div className="sidebar-container">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item) => {
            const { links, page, pageId } = item;
            return (
              <article key={pageId}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link) => {
                    const { id, label, icon, url } = link;
                    return (
                      <a key={id} href={url}>
                        {label}
                        {icon}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
