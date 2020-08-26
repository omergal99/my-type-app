import React from 'react';
import './App.css';

import Text from './cmps/Text';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Text
          name={'lala'}
          num={2}
          obj={{ omer: 'omer' }}
          words={['lala', 'momo']}
          arrOfObj={[{ aa: 'aaa' }, { bb: 'bbb' }]}
          bool={true}
          func={() => console.log('func activated')}
        />
      </header>
    </div>
  );
}

export default App;
