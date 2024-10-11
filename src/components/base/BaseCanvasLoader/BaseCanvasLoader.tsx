import svgIcons from '@assets/icons';

import './BaseCanvasLoader.scss'

const BaseCanvasLoader = () => {
  return (
    <div className='baseCanvasLoader'>
      <div className='baseCanvasLoader__loader'>
        {svgIcons.loader}
      </div>
    </div>
  );
}

export default BaseCanvasLoader;