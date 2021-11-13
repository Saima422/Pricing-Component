import Tabs, { TabPane } from 'rc-tabs';

function RCTabs({ data }) {
  var callback = function (key) {};

  return (
    <>
      <Tabs defaultActiveKey="2" onChange={callback}>
        <TabPane tab="tab 1" key="1">
          first
        </TabPane>
        <TabPane tab="tab 2" key="2">
          second
        </TabPane>
        <TabPane tab="tab 3" key="3">
          third
        </TabPane>
      </Tabs>
    </>
  );
}

export default RCTabs;
