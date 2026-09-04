import { Suspense } from "react";
import "./App.css";
// import Batter from "./Batter";
// import Counter from "./Counter";
import Users from "./Users";
import Posts from "./Posts";
import Todos from "./Todos";
import Comments from "./Comments";

const usersDataPromise = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
};

const postsDataPromise = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

const commentsDataPromise = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();
  return data;
};

function App() {
  // const handleClick = () => {
  //   alert("click me 3");
  // };

  return (
    <>
      {/* <Todos></Todos> */}

      <Suspense fallback={<p>Loading Comments Data...</p>}>
        <Comments commentsDataPromise={commentsDataPromise()}></Comments>
      </Suspense>

      <Suspense fallback={<p>Loading Posts Data...</p>}>
        <Posts postsDataPromise={postsDataPromise()}></Posts>
      </Suspense>

      <Suspense fallback={<p>Loading...</p>}>
        <Users usersDataPromise={usersDataPromise()}></Users>
      </Suspense>

      {/* <Counter></Counter>
      <Batter></Batter> */}
      {/* <Cart></Cart> */}
      {/* <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick}>Click Me 2</button> */}
      {/* <button onClick={() => alert("click 4")}>Click Me 3</button> */}
    </>
  );
}

export default App;
