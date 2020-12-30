/**
 * TOOL ICONS
 */
import html5 from "@/public/assets/tools/html5.png";
import css3 from "@/public/assets/tools/css3.png";
import javascript from "@/public/assets/tools/javascript.png";
import typescript from "@/public/assets/tools/typescript.png";
import react from "@/public/assets/tools/react.png";
import styled_components from "@/public/assets/tools/styled_components.png";
import nextjs from "@/public/assets/tools/nextjs.png";
import jest from "@/public/assets/tools/jest.png";
import laravel from "@/public/assets/tools/laravel.png";
import mysql from "@/public/assets/tools/mysql.png";
import node from "@/public/assets/tools/node.png";
import php from "@/public/assets/tools/php.png";
import terminal from "@/public/assets/tools/terminal.png";
import git from "@/public/assets/tools/git.png";
import docker from "@/public/assets/tools/docker.png";

/**
 * COMMON
 */
import profileImage from "@/public/assets/images/profile.jpeg";
import profileImageWebp from "@/public/assets/images/profile.jpeg?webp";

import galleryThumbnail from "@/public/assets/images/projects/gallery/thumbnail.png";
import galleryThumbnailWebp from "@/public/assets/images/projects/gallery/thumbnail.png?webp";

import portfolioThumbnail from "@/public/assets/images/projects/portfolio/thumbnail.png";
import portfolioThumbnailWebp from "@/public/assets/images/projects/portfolio/thumbnail.png?webp";

import portfolioThemeBlue from "@/public/assets/images/projects/portfolio/slider/theme-blue.png";
import portfolioThemeBlueWebp from "@/public/assets/images/projects/portfolio/slider/theme-blue.png?webp";

import portfolioThemeLight from "@/public/assets/images/projects/portfolio/slider/theme-light.png";
import portfolioThemeLightWebp from "@/public/assets/images/projects/portfolio/slider/theme-light.png?webp";

import portfolioThemeGreen from "@/public/assets/images/projects/portfolio/slider/theme-green.png";
import portfolioThemeGreenWebp from "@/public/assets/images/projects/portfolio/slider/theme-green.png?webp";

import portfolioThemePurple from "@/public/assets/images/projects/portfolio/slider/theme-purple.png";
import portfolioThemePurpleWebp from "@/public/assets/images/projects/portfolio/slider/theme-purple.png?webp";

import portfolioContactForm from "@/public/assets/images/projects/portfolio/slider/contact-form.png";
import portfolioContactFormWebp from "@/public/assets/images/projects/portfolio/slider/contact-form.png?webp";



import { ToolIcon } from "@/components/Common";

export const icons = {
  tools: {
    frontend: {
      html5,
      css3,
      javascript,
      typescript,
      react,
      jest,
      nextjs,
      styled_components,
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
  },
};

export const common = {
  profileImage: {
    normal: profileImage,
    webp: profileImageWebp,
    format: 'jpeg'
  },
  projects: {
    gallery: {
      thumbnail:{
        normal: galleryThumbnail,
        webp: galleryThumbnailWebp,
        format: 'png'
      },
    },
    portfolio: {
      thumbnail: {
        normal: portfolioThumbnail,
        webp: portfolioThumbnailWebp,
        format: 'png'
      },
      sliders: {
        "theme-light": {
          normal: portfolioThemeBlue,
          webp: portfolioThemeBlueWebp,
          format: 'png'
        },
        "theme-green": {
          normal: portfolioThemeGreen,
          webp: portfolioThemeGreenWebp,
          format: 'png'
        },
        "theme-purple": {
          normal: portfolioThemePurple,
          webp: portfolioThemePurpleWebp,
          format: 'png'
        },
        "theme-blue": {
          normal: portfolioThemeLight,
          webp: portfolioThemeLightWebp,
          format: 'png'
        },
        "contact-form": {
          normal: portfolioContactForm,
          webp: portfolioContactFormWebp,
          format: 'png'
        },
      }
    }
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
