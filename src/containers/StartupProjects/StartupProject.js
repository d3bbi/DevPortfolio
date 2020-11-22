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
    <Fade bottom duration={1000} distance="20px">
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
                <div className="row">
                  <div className="col-lg-6 col-sm-12 project-wrapper-text">
                    <div
                      className="container-text"
                    // onClick={() => openProjectInNewWindow(project.link)}
                    >
                      <h3 className="subTitle">{project.title}</h3>
                      <div>
                        <p class="mb-4">{project.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-sm-12">
                    <div className="project-wrapper-image">
                      <img alt="Project picture" src={project.image}></img>
                    </div>
                  </div>
                </div>

              );
            })}

          </div>
        </div>
      </div>
    </Fade>
  );
}
