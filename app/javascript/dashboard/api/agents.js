/* global axios */

import ApiClient from './ApiClient';

class Agents extends ApiClient {
  constructor() {
    super('agents', { accountScoped: true });
  }

  bulkInvite({ emails }) {
    return axios.post(`${this.url}/bulk_create`, {
      emails,
    });
  }

  confirm(agentId) {
    return axios.post(`${this.url}/${agentId}/confirm`);
  }
}

export default new Agents();
