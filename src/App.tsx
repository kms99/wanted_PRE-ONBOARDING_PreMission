import React from 'react';
import Form from './components/form/Form';

function App() {
  return (
    <div>
      <h1>원티드 PRE-ONBOARDING PRE-MISSION - TODO LIST</h1>
      <Form />
      <section>
        <h2>NOT DONE</h2>
        <ul>
          <li>
            <h2>카드겠지?</h2>
          </li>
        </ul>
      </section>

      <section>
        <h2>DONE</h2>
        <ul>
          <li>
            <h2>카드겠지?</h2>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
