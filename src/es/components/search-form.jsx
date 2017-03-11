import React, { Component } from 'react';
import { Field, DropDown, Btn } from './ux/bootstrap';
import Utils from '~/common/utils';

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        anyField: '',
        status: '',
        division: '',
        activity: '',
        product: '',
      }
    }
  }

  updateForm(value, fieldName) {
    const { fields } = this.state;
    fields[fieldName] = value;
    this.setState(() => ({ fields }));
  }

  onSearch() {
    const criteria = Object.assign({}, this.state.fields); // immutable object
    this.props.doSearch(criteria);
  }

  render() {
    const { fields } = this.state;
    return <section>
      <div className="form-inline">
        <div className="form-group">
          <Field  placeholder="Search on any field"
                  value={fields.anyField}
                  onChange={(e) => this.updateForm(e.target.value, 'anyField')}
                  onKeyPress={(e) => Utils.onEnter(e, this.onSearch.bind(this))} />
        </div>
        <div className="form-group">
          <DropDown value={fields.status} 
                    onChange={(e) => this.updateForm(e.target.value, 'status')}>
            <option value="">All Statuses</option>
            <option value="DRAFT">DRAFT</option>
            <option value="IN_PROCESS">IN_PROCESS</option>
            <option value="PROCESSING">PROCESSING</option>
            <option value="PROCESSED">PROCESSED</option>
            <option value="ERROR">ERROR</option>
            <option value="SEEDED">SEEDED</option>
            <option value="AWAITING">AWAITING</option>
          </DropDown>
        </div>
        <div className="form-group">
          <DropDown value={fields.division} 
                    onChange={(e) => this.updateForm(e.target.value, 'division')}>
            <option value="">All Divisions</option>
            <option value="1">Division 1</option>
          </DropDown>
        </div>
        <div className="form-group">
          <Btn type="primary" onClick={() => this.onSearch()}>Search</Btn>
        </div>
      </div>
      {fields.division && <div className="form-inline">
        <div className="form-group">
          <DropDown value={fields.activity} 
                    onChange={(e) => this.updateForm(e.target.value, 'activity')}>
            <option value="">All Activities</option>
          </DropDown>
        </div>
        <div className="form-group">
          <DropDown value={fields.product} 
                    onChange={(e) => this.updateForm(e.target.value, 'product')}>
            <option value="">All Products</option>
          </DropDown>
        </div>
      </div>}
    </section>;
  }
}