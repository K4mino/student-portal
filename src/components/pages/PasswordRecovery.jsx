import React, { useState } from 'react';

import { FormBackground } from '../atoms';
import {PasswordSendEmail,PasswordEmailConfirm} from '../organisms';


function PasswordRecovery() {
  const [isEmailSent, setIsEmailSent] = useState(false);

  return (
    <FormBackground>
      {isEmailSent ? (
        <PasswordEmailConfirm/>
      ) : (
        <PasswordSendEmail setIsEmailSent={setIsEmailSent}/>
      )}
    </FormBackground>
  );
}

export default PasswordRecovery;
