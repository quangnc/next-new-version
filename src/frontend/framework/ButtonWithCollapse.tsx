import type { ReactNode } from 'react'

import { Fragment, useState } from 'react'
import { Collapse } from '@mui/material'

export const ButtonWithCollapse = ({
  renderButton,
  renderCollapse,
}: ButtonWithCollapseProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleCollapse = () => {
    setIsCollapsed((prev) => !prev)
  }

  return (
    <Fragment>
      {renderButton({ isCollapsed, toggleCollapse })}
      {renderCollapse({ Collapse, isCollapsed, toggleCollapse })}
    </Fragment>
  )
}

export type ButtonWithCollapseProps = {
  renderButton: RenderButtonFn
  renderCollapse: RenderCollapseFn
}

export type RenderButtonFn = (inputs: CollapseState) => ReactNode
export type RenderCollapseFn = (
  inputs: CollapseState & { Collapse: typeof Collapse }
) => ReactNode

type CollapseState = {
  isCollapsed: boolean
  toggleCollapse: () => void
}
