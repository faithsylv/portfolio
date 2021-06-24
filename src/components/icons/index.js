import React from "react"

import IconGithub from "./Github"
import IconLinkedIn from "./LinkedIn"
import IconTwitter from "./Twitter"

const Icon = ({ name, color }) => {
  switch (name.toLowerCase()) {
    case "twitter":
      return <IconTwitter color={color}/>
    case "github":
      return <IconGithub color={color} />
    case "linkedin":
      return <IconLinkedIn color={color}/>
    default:
      return null
  }
}

export default Icon
