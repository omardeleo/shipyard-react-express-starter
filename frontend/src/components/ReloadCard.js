import { Card, Box, Link } from '@material-ui/core';

import logo from '../assets/images/logo.png';

function ReloadCard(props) {
  const { classes } = props;

  const codeBlock_1 = `18 |    "start": "react-scripts start",`;
  const codeBlock_2 = ` 6 |    "start": "nodemon ./src/bin/www"`;

  return (
    <Card className={classes.card}>
      <h2 className={props.classes.cardHeader}>See code changes instantly</h2>
      <p>
        When you make changes to the frontend code and save the file,{' '}
        <b>the app will automatically reload</b> only the module that was
        updated, allowing you to <b>see changes instantly</b> without having to
        refresh your browser.
      </p>
      <p>
        This is made possible by{' '}
        <Link
          className={classes.link}
          target="_blank"
          rel="noopener"
          href="https://webpack.js.org/concepts/hot-module-replacement"
        >
          webpack Hot Module Replacement
        </Link>
        , which comes installed with this React starter in a package called{' '}
        <b>react-scripts</b>. This script is invoked when we start our project
        in development mode. The command is located in{' '}
        <code>
          <Link
            className={classes.link}
            href={`${process.env.REACT_APP_STARTER_REPO_URL}frontend/package.json#L18`}
            target="_blank"
            rel="noopener"
          >
            frontend/package.json
          </Link>
        </code>
        .
      </p>
      <pre>
        <code className="language-js">{codeBlock_1}</code>
      </pre>
      <p>
        Changes to the backend code don't require a server restart, but you will
        need to refresh your browser to see changes. This Express backend uses{' '}
        <Link
          className={classes.link}
          target="_blank"
          rel="noopener"
          href="https://github.com/remy/nodemon"
        >
          nodemon
        </Link>{' '}
        to auto-restart the server. nodemon is activated by starting the server
        in development mode. The command is located in{' '}
        <code>
          <Link
            className={classes.link}
            href={`${process.env.REACT_APP_STARTER_REPO_URL}backend/package.json#L6`}
            target="_blank"
            rel="noopener"
          >
            backend/package.json
          </Link>
        </code>
        .
      </p>
      <pre>
        <code className="language-js">{codeBlock_2}</code>
      </pre>
    </Card>
  );
}

export default ReloadCard;
