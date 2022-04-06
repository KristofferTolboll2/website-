import React from "react";
import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaQuora,
  FaTwitter,
  FaFacebook
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Kristoffer Tølbøll. All Rights Reserved.`,
  author: {
    name: "Kristoffer Tølbøll",
    accounts: [
      {
        url: "https://github.com/MA-Ahmad",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://www.linkedin.com/in/kristoffer-tølbøll-19b54210b",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      {
        url: "https://www.facebook.com/profile.php?id=100002844186924",
        label: "Facebook",
        type: "blue",
        icon: <FaFacebook />
      },
      {
        url: "mailto:kristofferlocktolboll@gmail.com",
        label: "Kristoffer Tølbøll",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
