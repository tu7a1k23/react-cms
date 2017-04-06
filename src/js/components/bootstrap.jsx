import React, { Component } from 'react'

export const Button = ({ type = 'secondary', className = '', text, children, ...others }) => {
  className = `btn btn-sm btn-${type} ${className}`
  return <button type="button" className={className} {...others}>{text || children}</button>
}

export const Text = ({ className = '', ...others }) => {
  className = `form-control form-control-sm ${className}`
  return <input className={className} type="text" {...others} />
}