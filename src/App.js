import React from "react";
import { useInput } from "./useInput";

function App() {
  // validator 기능을 실행하고 true false 값으로 검증 기능 구현
  //const maxLen = value => value.length <= 10;
  const maxLen = value => !value.includes("@");
  const name = useInput("Mr.", maxLen);

  return (
    <div className="App">
      <h1>Hooks Tutorials</h1>

      <div>
        <input placeholder="Name" {...name} onChange={name.onChange} />
      </div>
    </div>
  );
}

// useTabs
// const App = () => {
//   const { currentItem, changeItem } = useTabs(0, content);
//   return (
//     <div className="App">
//       <h1>Hooks Tutorials</h1>
//       <div>
//         {content.map((section, index) => (
//           <button onClick={() => changeItem(index)}>{section.tab}</button>
//         ))}
//         <div>{currentItem.content}</div>
//       </div>
//     </div>
//   );
// };

// hooks 카운터  useState
// const App = () => {
//   const [item, setItem] = useState(1);
//   const increment = () => setItem(item + 1);
//   const decrement = () => setItem(item - 1);

//   return (
//     <div className="App">
//       <h1>Hooks Tutorials</h1>
//       <span>{item}</span>
//       <h2>Start editing to see some magic happen!</h2>
//       <button onClick={increment}> increment</button>
//       <button onClick={decrement}> decrement</button>
//     </div>
//   );
// };

// class 기반  카운터
// class AppUgly extends React.Component {
//   state = { item: 1 };

//   render() {
//     const { item } = this.state;
//     return (
//       <div className="App">
//         <h1>Hooks Tutorials</h1>
//         <span>{item}</span>
//         <h2>Start editing to see some magic happen!</h2>
//         <button onClick={this.incrementItem}> increment</button>
//         <button onClick={this.decrementItem}> decrement</button>
//       </div>
//     );
//   }

//   incrementItem = () => {
//     this.setState(state => {
//       return {
//         item: state.item + 1
//       };
//     });
//   };

//   decrementItem = () => {
//     this.setState(state => {
//       return {
//         item: state.item - 1
//       };
//     });
//   };
// }

export default App;
