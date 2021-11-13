import data from './data/data.json';
import ReactTabs from './npm-tab-packages/react-tabs';
import 'react-tabs/style/react-tabs.css';
import 'rc-tabs/assets/index.css';
import './styles.scss';
import RCTabs from './npm-tab-packages/rc-tabs';

export default function App() {
  return (
    <div className="App">
      <h1>Our Pricing</h1>
      <ReactTabs data={data} />
      {/* <RCTabs data={data} /> */}
    </div>
  );
}
