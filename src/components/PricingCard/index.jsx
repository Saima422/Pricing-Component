function PricingCard({ data, bgcolor }) {
  return (
    <div
      className="PricingCard"
      style={{
        background: bgcolor ? bgcolor : 'white',
        color: bgcolor ? 'white' : 'rgba(0, 0, 0, 0.7)',
        height: bgcolor ? '500px' : '470px'
      }}>
      <h3>{data.value}</h3>
      <h1>{data.Price}</h1>
      <ul>
        {data.Benefits.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <button
        style={{
          background: bgcolor ? 'white' : '#9A9DEE',
          color: bgcolor ? bgcolor : 'white'
        }}>
        Learn More
      </button>
    </div>
  );
}

export default PricingCard;
