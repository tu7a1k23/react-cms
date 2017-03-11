import $ from 'jquery';

class Utils {
  constructor() {
    this.toastType = {
      success: {
        title: 'Success',
        background: 'success',
        icon: 'check'
      },
      error: {
        title: 'Error',
        background: 'danger',
        icon: 'info'
      },
      warning: {
        title: 'Warning',
        background: 'warning',
        icon: 'exclamation'
      },
      info: {
        title: 'Information',
        background: 'info',
        icon: 'info'
      },
    }
  }

  beforeProcessing() {
    $("#ajax-loader").show();
  }

  afterProcessing() {
    $("#ajax-loader").hide();
  }

  async ajaxRequest(url, method, data) {
    this.beforeProcessing();
    try {
      const response = await $.ajax({
        url: url,
        type: method,
        contentType: 'application/json; charset=utf-8',
        data: method === 'GET' ? (data || null) : (data ? JSON.stringify(data) : null)
      });
      this.afterProcessing();
      return response;
    } catch (e) {
      console.error(e);
      this.afterProcessing();
      return null;
    }
  }

  showToast(type, message) {
    const reactNotify = $('#notification'),
          notification = `<div class="alert alert-${this.toastType[type].background} container-fluid" role="alert">
            <div class="row">
              <div class="col-sm-12">
                <h6 class="font-weight-bold">${this.toastType[type].title}</h6>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-2">
                <i class="fa fa-2x fa-${this.toastType[type].icon}-circle"></i>
              </div>
              <div class="col-sm-10">
                ${message}
              </div>
            </div>
          </div>`;
    reactNotify.html(notification);
    reactNotify.fadeIn().fadeOut(3000, 'swing', () => {
      reactNotify.html('');
    });
  }

  showNoResultFoundMessage() {
    this.showToast('info', 'No result found.');
  }

  onEnter(e, fn) {
    if (e.key === 'Enter') {
      fn(e.target.value);
    }
  }
}

export default new Utils;