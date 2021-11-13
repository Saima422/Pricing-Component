import PricingCard from '../PricingCard';

function PricingContainer({ data }) {
  return (
    <div className="PricingContainer">
      <PricingCard data={data.Basic} />
      <PricingCard data={data.Professional} bgcolor="#9A9DEE" />
      <PricingCard data={data.Master} />
    </div>
  );
}

export default PricingContainer;
