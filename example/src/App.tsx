import React from 'react';
import Avvvatars from "@makyoapp/makyo-avatars";

function App() {
  const [value, setValue] = React.useState('value')

  return (
    <div className="App">
          <div className='wpr'>
              <input type='text' value={value} onChange={(e) => setValue(e.currentTarget.value)} />
              <div className='avt'>
                  <Avvvatars value={value} style='character' />
              </div>
              <div className='avt'>
                  <Avvvatars value={value} style='shape' />
              </div>
          </div>
    </div>
  );
}

export default App;
