import * as React from 'react';

export default function App() {
  const [bg, setbg] = React.useState('white');

  return (
    <div>
      <span>
        <h1> Soild Color </h1>
        <a>
          <input
            type="color"
            onChange={(e) =>
              (document.body.style.backgroundColor = e.target.value)
            }
          />
        </a>
      </span>
    </div>
  );
}
