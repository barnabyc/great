/** @jsx React.DOM */
var SimpleToDo = React.createClass({
  render: function() {
    var completeness = this.props.data.complete ? 'icon-check-sign' : 'icon-check-empty';

    return (
      <li class="todo">
        <a href="{this.props.data.url}">
          <i class={completeness}></i>

          {this.props.data.name}
        </a>
      </li>
    );
  }
});
