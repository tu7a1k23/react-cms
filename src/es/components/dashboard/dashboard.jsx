import React, { Component } from 'react';
import store from '~/common/store';

@store({
  endpoint: 'api/dashboard'
})
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        summary: [],
        total: 0
      }
    }
  }

  render() {
    const { summary, total } = this.state.data;console.log(this.props.data);
    return <section className="row">
      <div className="col-sm-8">
        <div id="donut-chart" />
      </div>
      <div className="col-sm-4">
        <table className="table table-sm table-hover table-striped">
          <thead>
            <tr>
              <th>Status</th>
              <th className="text-sm-right">Total Records</th>
            </tr>
          </thead>
          <tbody>
            {summary.map(sum =>
              <tr>
                <td>{sum[0]}</td>
                <td className="text-sm-right">{sum[1]}</td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th className="text-sm-right">{total}</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>;
  }
}