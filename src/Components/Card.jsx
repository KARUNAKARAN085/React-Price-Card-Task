import "./Card.css";

const Card = (props) => {
  // console.log(props.data);

  const styleObjectFalse = {
    color: "gray",
  };
  const styleObjectTrue = {
    color: "black",
  };

  const isTrue = true;

  return (
    <div className="card">
      <p className="text-center">{props.data.top}</p>
      <h1 className="header">${props.data.price}/months</h1>
      <hr />
      {props.data.features.map((feature, index) => (
        <p key={index} style={isTrue ? styleObjectTrue : styleObjectFalse}>
          ✔ {feature}
        </p>
      ))}
      <button
        className="btn btn-primary"
        style={isTrue ? styleObjectTrue : styleObjectFalse}
      >
        Button
      </button>
    </div>
  );
};

export default Card