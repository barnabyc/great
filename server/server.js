var express = require('express'),
    port = 5577,
    app = express( port );

// Configuration
app.configure(function()
{
  app.use(express.logger());
  // app.set('view engine', 'jade');
  app.set('view options', {
    doctype: 'html',
    pretty : true,
    layout : false
  });

  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static('../'));

  app.use(express.static('/css/'));

  app.engine('html', require('ejs').renderFile);
});


app.configure('development', function()
{
  app.use(express.logger());
  app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
});

app.configure('production', function()
{
  app.use(express.logger());
  app.use(express.errorHandler());
});

// Routes
app.get('/', function(req, res)
{
  app.set('views', './');
  res.render('../index.html');
});


// Start the app server
app.listen(port, function ()
{
  console.log("GREAT is running: http://localhost:" + port);
});



