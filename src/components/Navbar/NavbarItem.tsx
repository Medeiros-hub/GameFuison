import React, { ClassAttributes } from 'react'
import {MdKeyboardArrowDown} from 'react-icons/md'

interface NavbarItemProps {
  name: string
  classItem?: string
}

const NavbarItem: React.FC<NavbarItemProps> = ({
  name,
  classItem,
}): JSX.Element => {

  return (
    <>
      <li className={classItem}>
        {name}
        <MdKeyboardArrowDown 
          style={{ 
            color: 'var(--purple)',
            height: '2em',
            width: '2em'
          }}
        />
      </li>
    </>
  )
}

export default NavbarItem