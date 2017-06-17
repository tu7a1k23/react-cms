import { Component } from 'ext-react';
import CardStore from '~/stores/card';
import SearchFormView from './search-form.view';

@Component({
  componentAs: 'searchForm',
  view: SearchFormView
})
export default class {
  search() {
    CardStore.load();
  }
}