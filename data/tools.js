import html5 from "@/public/assets/tools/html5.png";
import css3 from "@/public/assets/tools/css3.png";
import javascript from "@/public/assets/tools/javascript.png";
import typescript from "@/public/assets/tools/typescript.png";
import react from "@/public/assets/tools/react.png";
import jest from "@/public/assets/tools/jest.png";
import laravel from "@/public/assets/tools/laravel.png";
import mysql from "@/public/assets/tools/mysql.png";
import node from "@/public/assets/tools/node.png";
import php from "@/public/assets/tools/php.png";
import terminal from "@/public/assets/tools/terminal.png";
import git from "@/public/assets/tools/git.png";
import docker from "@/public/assets/tools/docker.png";

import { ToolIcon } from "@/components/Common";

export default {
  frontend: {
    html5,
    css3,
    javascript,
    typescript,
    react,
    jest,
  },
  backend: {
    laravel,
    mysql,
    node,
    php,
  },
  general: {
    git,
    terminal,
    docker,
  },
};

export const renderTechnologyIconsFromProject = (
  project = {},
  width = "35",
  height = "35"
) => {
  return Object.keys(project.technologies).map((technology) =>
    project.technologies[technology].map((tool) => (
      <ToolIcon
        key={tool}
        iconset={technology}
        name={tool}
        width={width}
        height={height}
      />
    ))
  );
};
