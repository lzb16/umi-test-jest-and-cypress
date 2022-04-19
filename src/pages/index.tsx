import { useState } from 'react';
import styles from './index.less';

export default function IndexPage() {
  const [title, setTitle] = useState('init');
  const onClick = () => {
    setTitle('click');
  };
  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
      <button onClick={onClick} data-test-id="test-btn">
        Test
      </button>
      <input
        data-test-id="test-input"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
    </div>
  );
}
