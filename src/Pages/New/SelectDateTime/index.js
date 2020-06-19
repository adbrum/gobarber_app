import React, { useState } from 'react';

import { Container } from './styles';
import DateInput from '~/components/DateInput';

import Background from '~/components/Background';

export default function SelectDateTime() {
  const [date, setDate] = useState(new Date());

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />
      </Container>
    </Background>
  );
}
