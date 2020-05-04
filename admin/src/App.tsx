import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Articles, ArticleUpdate, ArticleAdd } from "pages";
import { MainLayout as Layout } from "templates";

function App() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path="/articles/add">
                        <ArticleAdd />
                    </Route>
                    <Route path="/articles/:articleId">
                        <ArticleUpdate />
                    </Route>
                    <Route path="/articles">
                        <Articles />
                    </Route>
                    <Route path="/">
                        <Articles />
                    </Route>
                </Switch>
            </Layout>
        </Router>
    );
}

export default App;
