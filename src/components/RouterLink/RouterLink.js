import React, { forwardRef } from 'react'
import { Link } from 'react-router-dom'

const RouterLink = forwardRef((props, ref) => (
  <div ref={ref}>
    <Link {...props} />
  </div>
))

RouterLink.displayName = RouterLink.name

export default RouterLink
