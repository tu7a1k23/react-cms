import React, { Component } from 'react'
import Rext, { Container } from 'ext-react'
import DashboardStore from '~/stores/dashboard'
import AppConfig from '~/common/config'
import Viz from '~/ux/viz'

const DONUT_CHART_CONFIG = AppConfig.get('DONUT_CHART_CONFIG')

@Container({
  stores: [DashboardStore]
})
export default class Dashboard extends Component {
  render() {
    const config = DONUT_CHART_CONFIG,
          { data } = this.props.stores.DashboardStore

    config.data.columns = data

    return <section>
      <h1>Dashboard</h1>
      <div className="row dashboard-stat">
        {data && data.map(group =>
          <div className="col-sm-4">
            <div className={`card ${group[0]}`}>
              <div className="card-block">
                <div className="visual"><i className="fa fa-5x fa-users" /></div>
                <div className="detail">
                  <div className="number">{group[1]}</div>
                  <div className="desc">{group[0]}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <p></p>
      <div className="row">
        <div className="col-sm-8">
          <Viz config={config} />
        </div>
        <div className="col-sm-4">
          <table className="table table-sm table-hover table-striped">
            <thead>
              <tr>
                <th>Type</th>
                <th className="text-sm-right">Total Cards</th>
              </tr>
            </thead>
            <tbody>
              {data && data.map(group =>
                <tr>
                  <td>{group[0]}</td>
                  <td className="text-sm-right">{group[1]}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  }
}