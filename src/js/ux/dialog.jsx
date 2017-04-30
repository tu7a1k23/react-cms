import React, { Component } from 'react'
import { render, unmountComponentAtNode, findDOMNode } from 'react-dom'

class DialogManager {
  createLayer(html) {
    const div = document.createElement('div')
    div.innerHTML = html
    return div.children[0]
  }

  show(dialog) {
    const layer = this.createLayer(`<div class="mask"></div>`)
    document.body.appendChild(layer)
    render(dialog, layer)
  }
}

export default new DialogManager

export class Dialog extends Component {
  constructor(props) {
    super(props)
    this.dispose = this.dispose.bind(this)
  }

  render() {
    const { title, className, children, ...others } = this.props
    return <section className={`dialog ${className || ''}`} {...others}>
      <div className="dialog-header">
        <p className="dialog-title text-sm-center">{title || 'Dialog'}</p>
        <span className="tool" onClick={this.dispose}></span>
      </div>
      <div className="dialog-body">
        {children}
      </div>
    </section>
  }

  dispose() {
    const parentNode = findDOMNode(this).parentNode
    unmountComponentAtNode(parentNode)
    document.body.removeChild(parentNode)
  }
}

class Msgbox extends Component {
  render() {
    return <section />
  }
}

class Toast extends Component {
  render() {
    return <section />
  }
}