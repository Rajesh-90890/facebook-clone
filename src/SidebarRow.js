import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarRow.css'

function SidebarRow({Icon, src, title}) {
    return (
        <div className="SidebarRow"> 
       {src && <Avatar src={src} />}
       {Icon && <Icon />}

        <h4>{title}</h4>
            
        </div>
    )
}

export default SidebarRow
