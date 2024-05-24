import Card from "./Components/Card";
import "./App.css";

// Component: App
const App = () => {

  const cardData = [
    {
      top: "FREE",
      price: "0",
      features: [
        "Single User",
        "50GB Storage",
        "Unlimited Public Projects",
        "Community Access",
        "Unlimited Private Projects",
        "Dedicated Phone Support",
        "Free Subdomain",
        "Monthly Status Reports"
      ]
    },
    {
      top: "PLUS",
      price: "9",
      features: [
        "5 Users",
        "100GB Storage",
        "Unlimited Public Projects",
        "Community Access",
        "Unlimited Private Projects",
        "Dedicated Phone Support",
        "Free Subdomain",
        "Monthly Status Reports"
      ]
    },
    {
      top: "PRO",
      price: "49",
      features: [
        "Unlimited Users",
        "500GB Storage",
        "Unlimited Public Projects",
        "Community Access",
        "Unlimited Private Projects",
        "Dedicated Phone Support",
        "Unlimited Free Subdomains",
        "Monthly Status Reports"
      ]
    }
  ]

  return (
    <>
    <h1 className="text-center">React Price Card Task</h1>
    <div className="container">
      {
        cardData.map((data, index) => (
          <Card
            key={index}
            data={data}
          />
        ))
      }
    </div>
    </>
  )
}

export default App;