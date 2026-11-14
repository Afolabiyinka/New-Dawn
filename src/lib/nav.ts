"use client"
import {   TelevisionIcon, HandHeartIcon, UsersFourIcon, UserIcon, VideoCameraIcon } from "@phosphor-icons/react"

export const navItems = [
  {
    title: "Who are we",
    href: "/about",
    icon: UserIcon,
  },
  {
    title: "Leaders",
    href: "/leaders",
    icon: UsersFourIcon,
  },
  {
    title: "Media",
    href: "/media",
    icon: VideoCameraIcon
  },
  {
    title: "Live Streams",
    href: "/live-streams",
    icon: TelevisionIcon,
  },
  {
    title: "Donations",
    href: "/donations",
    icon: HandHeartIcon,
  },
]