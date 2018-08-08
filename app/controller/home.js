"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async login() {
    let data = this.ctx.request.body;
    let result = await this.service.fetch.post(
      this.config.api.login,
      "POST",
      data
    );
    if (result.status === 200) {
      this.ctx.body = result.data;
      this.ctx.session.user = result.data;
    } else {
      this.ctx.body = result.data;
      this.ctx.status = result.status;
    }
  }
  async logout() {
    let data = this.ctx.request.body;
    let result = await this.service.fetch.post(
      this.config.api.logout,
      "POST",
      data
    );
    this.ctx.session = null;
    this.ctx.body = result.data;
  }
  async info() {
    let data = this.ctx.request.body;
    let result = await this.service.fetch.post(
      this.config.api.index,
      "POST",
      data
    );
    if (result.status === 200) {
      this.ctx.body = result.data;
    } else {
      this.ctx.body = result.data;
      this.ctx.status = result.status;
    }
  }
}

module.exports = HomeController;
