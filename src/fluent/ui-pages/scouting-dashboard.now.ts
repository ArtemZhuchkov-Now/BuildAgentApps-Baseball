import '@servicenow/sdk/global';
import { UiPage } from '@servicenow/sdk/core';
import scoutingDashboard from '../../client/index.html';

export const baseball_scouting_dashboard = UiPage({
  $id: Now.ID['baseball-scouting-dashboard'],
  endpoint: 'x_snc_baseball_pla_scouting.do',
  html: scoutingDashboard,
  direct: true
});