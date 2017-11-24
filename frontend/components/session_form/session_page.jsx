import React from 'react';
import { AuthRoute } from '../../utils/route_util';

import SessionFormContainer from './session_form_container';
import SessionWelcome from './session_welcome';

const SessionPage = () => (
  <div className="session-page">
    <AuthRoute path='/login' component={SessionFormContainer}/>
    <AuthRoute path='/login' component={SessionWelcome}/>

    <AuthRoute path='/signup' component={SessionFormContainer}/>
    <AuthRoute path='/signup' component={SessionWelcome}/>
  </div>
);

export default SessionPage;
