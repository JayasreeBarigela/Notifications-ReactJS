const Notification = (props) => {
  //  Write your code here.
  const { logoUrl, className, text } = props;
  return (
    <div className={className}>
      <img src={logoUrl} className="logo" />
      <p className="text">{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg">
    <h1 className="heading">Notifications</h1>
    <Notification
      logoUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      className="box1"
      text="Information Message"
    />
    <Notification
      logoUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      className="box2"
      text="Success Message"
    />
    <Notification
      logoUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      className="box3"
      text="Warning Message"
    />
    <Notification
      logoUrl="https://assets.ccbp.in/frontend/react-js/error-icon-img.png"
      className="box4"
      text="Error message"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
