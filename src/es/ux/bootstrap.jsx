import React, { Component } from 'react';

export class Field extends Component {
  render() {
    const { value, className, ...others } = this.props;
    return <input type="text" className={`form-control form-control-sm${className || ''}`} value={value} {...others} />;
  }
}

export class DropDown extends Component {
  render() {
    const { value, className, children, ...others } = this.props;
    return <select className={`form-control form-control-sm${className || ''}`} value={value} {...others}>
      {children}
    </select>;
  }
}

export class Btn extends Component {
  render() {
    const { type, className, text, children, ...others } = this.props;
    return <button type="button" className={`btn btn-sm btn-${type || 'secondary'} ${className || ''}`} {...others}>
      {text || children}
    </button>;
  }
}

export class BootGrid extends Component {
  render() {
    const { data, children, ...others } = this.props,
      columns = children.map(child => child.props);

    return <section className="vbox">
      <section className="flex">
        <table className="table table-sm table-striped table-bordered table-responsive" {...others}>
          <thead>
            <tr>
              {columns.map((column, index) => {
                const { header, ...others } = column;
                return <th key={index} { ...others }>{header || ''}</th>
              }
              )}
            </tr>
          </thead>
          <tbody>
            {data.map(entity =>
              <tr id={entity.id}>
                {columns.map(column => {
                  const { dataIndex, ...others } = column;
                  return <td { ...others }>{entity[dataIndex]}</td>
                })}
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </section>;
  }
}