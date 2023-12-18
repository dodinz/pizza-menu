import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    ); 
}

function Header() {
    const headerStyle = {};

    return (
        <header className="header">
            <h1 style={headerStyle} >
                Fast React Pizza Co.
            </h1>
        </header>
    );
}

function Menu() {
    const hasPizzaStock = pizzaData.length;

    return ( 
        hasPizzaStock > 0 && (
        <main className="menu">
        <h2>Our Menu</h2>
       
        <ul className="pizzas">
            { pizzaData.map( (pizza) => (
                !pizza.soldOut && <Pizza pizzaItem = {pizza} />
            ))}
        </ul>
        </main>
        )
    ); 
}

function Pizza(props) {
    console.log(props);

   // if( props.pizzaItem.soldOut == true ) return null;

    return (
        <li>
            <div className="pizza">
                <img src={props.pizzaItem.photoName} alt={props.pizzaItem.name} />
                <div>
                    <h3>{props.pizzaItem.name}</h3>
                    <p>{props.pizzaItem.ingredients}</p>
                    <span>{props.pizzaItem.price}</span>
                </div>
            </div>
        </li>
    )
}


function Footer() { 
    const hour = new Date().getHours();
    const openHour = 8;
    const closeHour = 22;
    const isOpen = (hour >= openHour && hour < closeHour );

    return(
        <footer className="footer">
            {isOpen ? (
                <Order closeHour={closeHour} />    
            ) : (
                <p>
                    We're happy to welcome you betwwen {openHour}:00 and {closeHour}:00.
                </p>
            )}
        </footer>
    );

}

function Order(props) {

    return (
        <div className="order">
            <p>We are open until {props.closeHour}:00. Come and visit us or order online.</p>
            <button className="btn">Order Now!</button>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode> );