import React from 'react';
import { BpkCode } from 'bpk-component-code';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';
import React from 'react';
import format from 'date-fns/format';

import STYLES from './App.scss';

const c = className => STYLES[className] || 'UNKNOWN';
export const formatDateFull = date => format(date, 'EEEE, do MMMM yyyy');
export const formatMonth = date => format(date, 'MMMM yyyy');
export const daysOfWeek = [
  {
    name: 'Sunday',
    nameAbbr: 'Sun',
    index: 0,
    isWeekend: true,
  },
  // ...
];

const App = () => (
  <div className={c('App')}>
    <header className={c('App__header')}>
      <div className={c('App__header-inner')}>
        <BpkText tagName="h1" textStyle="xxl" className={c('App__heading')}>Flight schedule</BpkText>
      </div>
    </header>
    <main className={c('App__main')}>
      <BpkButton onClick={() => alert('It works!')}>Continue</BpkButton>
    </main>
  </div>
);
export default App;
