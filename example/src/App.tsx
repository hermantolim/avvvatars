import React from 'react';
import Avvvatars from "@makyoapp/makyo-avatars";

function App() {
  const [value, setValue] = React.useState('value')

  return (
    <div className="App">
        <div className='ipt'>
            <input type='text' value={value} onChange={(e) => setValue(e.currentTarget.value)} />
        </div>
          <div className='wpr'>
              <div className='avt'>
                  <Avvvatars value={value} style='character' size={72}/>
                  <span>TEXT</span>
              </div>
              <div className='avt'>
                  <Avvvatars value={value} style='shape' size={72} />
                  <span>DEFAULT SHAPE</span>
              </div>
              <div className='avt'>
                  <Avvvatars value={value} style='shape' type='face' size={72} />
                  <span>FACE SHAPE</span>
              </div>
          </div>
    </div>
  );
}

export default App;
