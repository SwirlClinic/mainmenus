import React, { Component } from 'react';
import {BrowserRouter as Switch, Route} from 'react-router-dom';

import Pages from './Pages/Pages';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            routes: [(<Route exact path={Pages.Home.route} component={Pages.Home.component} />)]
        };
    }

    componentDidMount() {

        for (let i in Pages.MainMenus) {
            this.state.routes.push(
                <Route exact path={Pages.MainMenus[i].route} component={Pages.MainMenus[i].component} />
            )
        }

        console.log("Routes" + (this.state.routes));
        this.setState({});
    }

    render() {
    return (
      <Switch>
          <div>
              {this.state.routes}
          </div>
      </Switch>
    );
    }
}

export default App;
