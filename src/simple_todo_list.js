/** @jsx React.DOM */
var SimpleToDoList = React.createClass({
  render: function() {
    var toDoNodes = this.props.data.map(function (todo) {
      return <SimpleToDo data={todo} />;
    });

    return (
      <ol class="todos-list brief-lists">
        <li class="todos brief-list">
          <i class="opener icon-plus-sign"></i>
          <a class="title" href="{this.props.url}">
            {this.props.title}
          </a>

          <ol class="todo-list">
            {toDoNodes}
          </ol>
        </li>
      </ol>
    );
  }
});
