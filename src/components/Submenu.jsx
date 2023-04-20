import React, { useRef } from "react";
import sublinks from "../data";
import { useGlobalContext } from "./AppContext";

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  //première étape on cible le lien
  const currentPage = sublinks.find((item) => item.pageId === pageId);

  const submenuContainer = useRef(null);

  const haandleOnMouseLeave = (event) => {
    const submenu = submenuContainer.current;
    const { clientX, clientY } = event;
    const { left, right, bottom } = submenu.getBoundingClientRect();

    if (clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null);
    }
  };
  console.log(currentPage);
  return (
    <div
      className={currentPage ? "submenu show-submenu" : "submenu"}
      onMouseLeave={haandleOnMouseLeave}
      ref={submenuContainer}
    >
      <h2>{currentPage?.page}</h2>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
        }}
      >
        {currentPage?.links?.map((item) => {
          const { id, label, icon, url } = item;
          return (
            <a href={url} key={id}>
              {label}
              {icon}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;
