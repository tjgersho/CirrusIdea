<?php ?>
<!DOCTYPE html>
<html>
  <head>
    <title>State</title>
    <meta charset="utf-8">
    <style>
      body, textarea {
        font-family: Courier;
      }
    </style>
  </head>
  <body>
    <div id="app">
      <!-- my app renders here -->
    </div>
    <script src="react/build/react.js"></script>
    <script src="react/build/react-dom.js"></script>
    <script>
      var TextAreaCounter = React.createClass({

        propTypes: {
          text: React.PropTypes.string,
        },

        getDefaultProps: function() {
          return {
            text: '',
          };
        },

        getInitialState: function() {
          return {
            text: this.props.text,
          };
        },

        _textChange: function(ev) {
          this.setState({
            text: ev.target.value,
          });
        },

        render: function() {
          return React.DOM.div(null,
            React.DOM.textarea({
              value: this.state.text,
              onChange: this._textChange,
            }),
            React.DOM.h3(null, this.state.text.length)
          );
        }
      });

      ReactDOM.render(
        React.createElement(TextAreaCounter, {
          text: "Bob",
        }),
        document.getElementById("app")
      );
    </script>
  </body>
</html>