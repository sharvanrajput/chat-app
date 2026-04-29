import Dashboard from "@/pages/admin/Dashboard";
import { MessagesSquare, Users } from "lucide-react";
import { BiMessage } from "react-icons/bi";
import { GrDashboard, GrUserPolice } from "react-icons/gr";
import { PiUserSound } from "react-icons/pi";
import { MdDashboard, MdMessage, MdOutlineDashboard } from "react-icons/md";
import { FaLayerGroup, FaUsers } from "react-icons/fa";


export const sampleChats = [
  {
    id: "1",
    name: "John Doe",
    avatar: ["https://github.com/shadcn.png"],
    groupChat: false,
    members: ["1", "2"],
  },
  {
    id: "2",
    name: "John Doe",
    avatar: [
      "https://github.com/shadcn.png",
      "https://github.com/evilrabbit.png",
      "https://github.com/user4.png",
      "https://github.com/user5.png",
      "https://github.com/user3.png",
    ],
    groupChat: false,
    members: ["1", "2"],
  },
];

export const sampleUserData = [
  {
    id: "1",
    name: "User 1",
  },
  {
    id: "2",
    name: "User 2",
  },
  {
    id: "3",
    name: "User 3",
  },
  {
    id: "4",
    name: "User 4",
  },
  {
    id: "5",
    name: "User 5",
  },
  {
    id: "6",
    name: "User 6",
  },
  {
    id: "1",
    name: "User 1",
  },
  {
    id: "2",
    name: "User 2",
  },
  {
    id: "3",
    name: "User 3",
  },
  {
    id: "4",
    name: "User 4",
  },
  {
    id: "5",
    name: "User 5",
  },
  {
    id: "6",
    name: "User 6",
  },
];

export const sampleNotifications = [
  {
    id: "1",
    sender: {
      name: "sharvan",
      avatar: "https://github.com/user1.png",
    },
  },
  {
    id: "2",
    sender: {
      name: "ram",
      avatar: "https://github.com/user2.png",
    },
  },
];

export const sampleMessage = [
  {
    attachment: [
      {
        public_id: "asdf",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "Hi",
    _id: "2",
    sender: {
      _id: "user.i_id",
      name: "Chaman",
    },
    chat: "chatid",
    createdAt: "2026-04-12T10:41:30.630Z",
  },
  {
    attachment: [
      {
        public_id: "asdfasd",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "?? kon",
    _id: "asdfajdhf",
    sender: {
      _id: "1",
      name: "Chaman",
    },
    chat: "2",
    createdAt: "2026-04-12T10:41:30.630Z",
  },
];

export const AdminSidebarData = [
  {
    text: "Dashboard",
    path: "/admin/dashboard",
    icon: MdDashboard
  },
  {
    text: "Users",
    path: "/admin/user-management",
    icon: FaUsers
  },
  {
    text: "Group",
    path: "/admin/group-management",
    icon: FaLayerGroup
  },
  {
    text: "Messages",
    path: "/admin/msg-management",
    icon: MdMessage
  },
]

export const sampleAllUsers = [
  {
    id: 1,
    name: "sharvan",
    avatar: "http://github.com/user5000.png",
    username: "iamsharvan09",
    friends: 14,
    groups: 5,
  },
  {
    id: 2,
    name: "rohan",
    avatar: "http://github.com/user5001.png",
    username: "rohan_652",
    friends: 20,
    groups: 1,
  },
  {
    id: 1,
    name: "sharvan",
    avatar: "http://github.com/user5002.png",
    username: "iamsharvan09",
    friends: 14,
    groups: 5,
  },
  {
    id: 2,
    name: "rohan",
    avatar: "http://github.com/user5003.png",
    username: "rohan_652",
    friends: 20,
    groups: 1,
  },
  {
    id: 1,
    name: "sharvan",
    avatar: "http://github.com/user5004.png",
    username: "iamsharvan09",
    friends: 14,
    groups: 5,
  },
  {
    id: 2,
    name: "rohan",
    avatar: "http://github.com/user5005.png",
    username: "rohan_652",
    friends: 20,
    groups: 1,
  },
]