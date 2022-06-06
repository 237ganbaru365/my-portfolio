import React from "react";
import { FiGithub } from "@react-icons/all-files/fi/FiGithub";
import { FiLinkedin } from "@react-icons/all-files/fi/FiLinkedin";
import { SiMedium } from "@react-icons/all-files/si/SiMedium";
import { HiExternalLink } from "@react-icons/all-files/hi/HiExternalLink";

export default function Icon({ name }) {
  switch (name) {
    case "External":
      return <HiExternalLink />;
    case "GitHub":
      return <FiGithub />;
    case "Linkedin":
      return <FiLinkedin />;
    case "Medium":
      return <SiMedium />;
    default:
      return <HiExternalLink />;
  }
}
