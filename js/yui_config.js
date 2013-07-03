YUI.applyConfig({
  "groups": {
    "app": {
      "comboBase": "/combobot/be5166f6013252c44110eb41354d9777c1d6c10a/&",
      "combine": false,
      "root": "",
      "base": "/",
      "modules": {
        "great:models:todo": {
          "requires": ["model"],
          "path": "js/app/models/todo.js"
        },
        "great:models:todo_list": {
          "requires": ["model-list", "great:models:todo"],
          "path": "js/app/models/todo_list.js"
        },
        "great:models:todos": {
          "requires": ["model", "great:models:todo_list"],
          "path": "js/app/models/todos.js"
        },
        "great:models:todos_list": {
          "requires": ["model-list", "great:models:todos"],
          "path": "js/app/models/todos_list.js"
        },
        "great:views:create_todo": {
          "requires": ["view"],
          "path": "js/app/views/create_todo_view.js"
        },
        "great:views:todo": {
          "requires": ["view"],
          "path": "js/app/views/todo_view.js"
        },
        "great:views:todos_list": {
          "requires": ["views:lib:list", "great:views:todos"],
          "path": "js/app/views/todos_list_view.js"
        },
        "great:views:todos": {
          "requires": ["views:lib:list", "great:views:todo", "great:views:create_todo"],
          "path": "js/app/views/todos_view.js"
        },
        "great:app": {
          "requires": ["app-base", "great:views:todos_list", "great:views:todo"],
          "path": "js/great.js"
        },
        "views:lib:list": {
          "requires": ["view"],
          "path": "js/lib/list_view.js"
        }
      }
    }
  }
});