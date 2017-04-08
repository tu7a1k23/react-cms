import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import $ from 'jquery'
import { List } from 'ext-react'

const HEADER_BORDER_SIZE = 2
const SCROLL_SIZE = 17

export default class Grid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      outerWidth: 0,
      outerHeight: 0,
      headerWidth: 0,
      bodyHeight: 0,
      bodyWidth: 0,
      store: props.store,
      columns: List.of(props.children).map(child => child.props).collect()
    }
  }

  componentWillMount() {
    this.state.store.subscribe((store) => this.setState(() => ({ store })))
  }

  componentDidMount() {
    const { store } = this.state
    if (store.autoLoad) {
      store.load()
    }

    this.resizeGrid()
    $(window).on('resize', this.resizeGrid.bind(this))

    const node = findDOMNode(this),
          header = $(node).find('.bootgrid-header')

    $(node).find('.bootgrid-body').on('scroll', function() { header.scrollLeft($(this).scrollLeft()) })
  }

  render() {
    const { outerWidth, outerHeight, bodyHeight, headerWidth, bodyWidth, columns, store: { data } } = this.state
    return <section className="bootgrid" style={{ width: outerWidth, height: outerHeight }}>
      <div className="bootgrid-header" style={{ width: outerWidth }}>
        <div className="d-flex flex-row bootgrid-header-container" style={{ width: headerWidth }}>
          {columns.map(col => {
            const { text, width, ...others } = col
            return <div className="bootgrid-column-header text-sm-center" { ...others } style={{ width }}>{text || ''}</div>
          })}
        </div>
      </div>
      <div className="bootgrid-body" style={{ width: outerWidth, height: bodyHeight }}>
        <div className="d-flex flex-column bootgrid-view" style={{ width: bodyWidth }}>
          {data.map(record =>
            <div className="d-flex flex-row bootgrid-row">
              {columns.map(col => {
                const { dataIndex, width, ...others } = col
                return <div className="bootgrid-cell" { ...others } style={{ width }}>{record[dataIndex]}</div>
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  }

  resizeGrid() {
    const { columns } = this.state,
          node = findDOMNode(this),
          parentNode = node.parentNode,
          outerWidth = parentNode.clientWidth,
          outerHeight = parentNode.clientHeight,
          header = $(node).find('.bootgrid-header'),
          headerHeight = header.height() + HEADER_BORDER_SIZE,
          bodyHeight = outerHeight - headerHeight,
          flexColumn = []

    let innerWidth = List.of(columns).reduce((innerWidth, col) => {
        if (col.width) {
          innerWidth += col.width
        } else {
          flexColumn.push(col)
        }
        return innerWidth
    }, 0),
        headerWidth = innerWidth + SCROLL_SIZE,
        bodyWidth = innerWidth


    if (innerWidth <= outerWidth) {
      List.of(flexColumn).each(col => col.width = (outerWidth - innerWidth) / flexColumn.length)
      innerWidth = outerWidth
      headerWidth = innerWidth - SCROLL_SIZE
      bodyWidth = innerWidth - SCROLL_SIZE
    }

    // FIXME still have an issue with outerHeight on resize
    this.setState(() => ({ outerWidth, outerHeight, bodyHeight, headerWidth, bodyWidth }))
  }
}