let root = document.getElementById("root");

function MsgComponent(props) {
  return (
    <div>
      <h1>{props.text}</h1>
      <p>abc</p>
    </div>
  );
}

//let heading = React.createElement("h1", {text: "ABC", children}, "text" )
//let comp = React.createElement("div", {children: ""}, [h1, p] )
//let comp = React.createElement("MsgComponent", {} )
let container = (
  <div id="cont">
    {MsgComponent("Hello")}
    <MsgComponent text = "ABC"/>
    <MsgComponent>Hello0</MsgComponent>
  </div>
);
// let heading1 = (
//   <div>
//     {" "}
//     <h1>Hello</h1>
//     <p>WORLD</p>
//   </div>
// );
// let heading2 = (
//   <div>
//     {" "}
//     <h1>Hello</h1>
//     <p>WORLD</p>
//   </div>
// );
//but when babale is not there what we do

//let heading = React.createElement("h1", {}, "Hello")
let rootElement = ReactDOM.createRoot(root);
rootElement.render(container);
// rootElement.render(heading2);
