import React, { Component } from 'react'

export const Panel = ({ children, ...others }) => {
  return <section className="card flex" {...others}>
    <div className="card-block d-flex flex-column">
      {children}
    </div>
  </section>
}

export const Button = ({ type = 'secondary', className = '', text, children, ...others }) => {
  className = `btn btn-sm btn-${type} ${className}`
  return <button type="button" className={className} {...others}>{text || children}</button>
}

export const Text = ({ className = '', ...others }) => {
  className = `form-control form-control-sm ${className}`
  return <input className={className} type="text" {...others} />
}

export const Checkbox = ({ className = '', ...others }) => {
  className = `form-control form-control-sm ${className}`
  return <input className={className} type="checkbox" {...others} />
}

export const Link = ({ to = 'javascript:void(0)', className = '', text, children, ...others }) => {
  return <a href={to} className={className} {...others}>{text || children}</a>
}

export const ButtonLink = ({ to = 'javascript:void(0)', className = '', text, children, ...others }) => {
  className = `btn btn-sm btn-link ${className}`
  return <a href={to} className={className} {...others}>{text || children}</a>
}