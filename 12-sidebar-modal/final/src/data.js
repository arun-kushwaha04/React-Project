import React from 'react';
import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/team',
    text: 'team',
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: '/calendar',
    text: 'calendar',
    icon: <FaCalendarAlt />,
  },
  {
    id: 5,
    url: '/documents',
    text: 'documents',
    icon: <FaWpforms />,
  },
];

export const social = [{
  id: 1,
  url: 'https://www.facebook.com/profile.php?id=100057356125529',
  icon: < FaFacebook / > ,
},
{
  id: 2,
  url: 'https://github.com/arun-kushwaha04',
  icon: < FaGithub / > ,
},
{
  id: 3,
  url: 'https://www.linkedin.com/in/arun-singh-kushwaha-087652207/',
  icon: < FaLinkedin / > ,
},
]