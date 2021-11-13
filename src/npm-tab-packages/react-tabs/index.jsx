import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PricingContainer from '../../components/PricingContainer';

function ReactTabs({ data }) {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Annually</Tab>
          <Tab>Monthly</Tab>
        </TabList>

        <TabPanel>
          <PricingContainer data={data.Annually} />
        </TabPanel>
        <TabPanel>
          <PricingContainer data={data.Monthly} />
        </TabPanel>
      </Tabs>
    </>
  );
}

export default ReactTabs;
