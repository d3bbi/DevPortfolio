import React, { useContext } from "react";
import "./StartupProjects.css";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  const { isDark } = useContext(StyleContext);
  return (
    // Fade bottom duration={1000} distance="20px">
    <div className="main" id="projects">
      <div>
        <h1 className="skills-heading">{bigProjects.title}</h1>
        {/* <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p> */}
        <div className="startup-projects-main">
          {bigProjects.projects.map((project) => {
            return (

              <Fade bottom duration={1000} distance="20 px">
                <div className="project-text">
                  <h3 className="subTitle" onClick={() => openProjectInNewWindow(project.link)}>{project.title}</h3>
                  <div>
                    <p>{project.description}</p>
                    <p class="languages">{project.languages}</p>
                  </div>
                </div>
                <div className="project-image">
                  <img alt="Project picture" src={project.image}></img>
                </div>
              </Fade>

            );
          })}

        </div>
      </div>
    </div>
  );
}
