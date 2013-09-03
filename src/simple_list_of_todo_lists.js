/** @jsx React.DOM */
var SimpleListOfToDoLists = React.createClass({
  getInitialState: function() {
    return {data: testData};
  },
  render: function() {
    var simpleToDoListNodes = this.state.data.map(function (toDoList) {
      return <SimpleToDoList data={toDoList.toDoList} url={toDoList.id} title={toDoList.title} />
    });

    return (
      <div class="simple list-of-todo-lists">
        {simpleToDoListNodes}
      </div>
    );
  }
});

React.renderComponent(
  <SimpleListOfToDoLists />,
  document.getElementById('great')
);

