export default function Cart() {
  let counter = 0;

  return (
    <div>
      <h3>Shopping Cart</h3>
      <p>Items in the cart: {counter}</p>
      <button>Add</button>
    </div>
  );
}
