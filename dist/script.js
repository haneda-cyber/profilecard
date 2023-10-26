const users = [
{
  id: 1231,
  name: "Amanda Smith",
  location: "United States",
  age: 26,
  skills: ["Front End", "Web Design", "React"],
  website: "www.designerlspower.com",
  email: "amandasmiths23s@gfra.com",
  bio: "I specialize in UX/UI design, Front End, and Web development",
  picture: "https://robohash.org/hicveldicta.png" }];


class Header extends React.Component {
  render() {
    const avatar = this.props.user;
    return /*#__PURE__*/(
      React.createElement("div", { class: "header" }, /*#__PURE__*/
      React.createElement("div", { class: "avatar" }, /*#__PURE__*/
      React.createElement("img", { src: avatar.picture }))));



  }}


class Body extends React.Component {
  render() {
    const content = this.props.content;
    return /*#__PURE__*/(
      React.createElement("div", { class: "body" }, /*#__PURE__*/
      React.createElement("h2", null, content.name), /*#__PURE__*/
      React.createElement("h5", null, content.location), /*#__PURE__*/
      React.createElement("p", null, content.bio), /*#__PURE__*/
      React.createElement("div", { className: "skills" }, "Skills:",

      content.skills.map((skill) => /*#__PURE__*/
      React.createElement("p", null, skill)))));





  }}


class User extends React.Component {
  render() {
    const userJson = users.map((user) => /*#__PURE__*/
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement(Header, { key: user.id, user: user }), /*#__PURE__*/
    React.createElement(Body, { key: user.id, content: user })));


    return /*#__PURE__*/React.createElement("div", { class: "card" }, userJson);
  }}


const element = /*#__PURE__*/React.createElement(User, null);

ReactDOM.render(element, document.getElementById("content"));