import React, { Component } from 'react'
import { Store, MutationType } from 'rc-model'

@Store({
  endpoint: '/api/test',
  mutations: {
    post: {
      type: MutationType.POST,
      path: '/api/test'
    },
    put: {
      type: MutationType.PUT,
      path: '/api/test'
    }
  }
})
export default class Test extends Component {
  render() {
    const { data } = this.props.store
    return <section className="row">
      <div className="col-sm-12">{JSON.stringify(data)}</div>
      <div className="col-sm-3"><button className="btn btn-sm" onClick={() => this.handlePost()}>Post</button></div>
      <div className="col-sm-3"><button className="btn btn-sm" onClick={() => this.handlePut()}>Put</button></div>
    </section>
  }

  handlePost() {
    this.props.store.post({
      record: {},
      next: (response) => {
        console.log(response)
      },
      error: (e) => {
        console.log(e.error)
      }
    })
  }

  handlePut() {
    this.props.store.put({
      record: {},
      next: (response) => {
        console.log(response)
      }
    })
  }
}