import React, { ReactElement } from 'react'
import ReactTooltip from 'react-tooltip'
import './Tooltip.css'

type Props = {
  tip?: string | null
  place?: 'top' | 'right' | 'bottom' | 'left'
  children: ReactElement
  className?: string
}

export const Tooltip = (props: Props) =>
  props.tip ? (
    <span data-tip={props.tip} data-place={props.place}>
      {props.children}
    </span>
  ) : (
    props.children
  )

export const ScyTooltipRoot = () => <ReactTooltip arrowColor="transparent" className="scy-tooltip" />
