import React, { Component } from 'react'

const Container = ({ className = '', children }) => {
  return <section className={`d-flex flex-column ${className}`}>{children}</section>
}

export default Container;