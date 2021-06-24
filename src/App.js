import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Stack from './sdk/entry';
import Loading from './components/Loading';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogPostList from './components/BlogPostList';
import SingleBlogPost from './components/SingleBlogPost';
import About from './components/About';
import Projects from './components/Projects';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      header: undefined,
      footer: undefined,
      blogPosts: undefined,
      about: undefined,
      projects: undefined
    }
  }
/**
 * To add React.Suspense Header must be included in the Switch, else the app will break on load. 
 */
  render() {
    
    if (this.state.loading === true) return <Loading text="Loading" />
    return (
      <Router>
        <div className="app">
        <Header title={this.state.header.title} subtext={this.state.header.title_subtext}/>
        <Switch>
          <Route 
            exact path='/' 
            render={(props) => (
            <div>
              <Projects {...props} projects={this.state.projects}/>
              <h1>Blog Posts:</h1>
              <BlogPostList {...props} blogPosts={this.state.blogPosts}/>
            </div>
          )} />
          <Route 
          path='/posts/'
          render={(props) => (
            <SingleBlogPost {...props} blogPosts={this.state.blogPosts}/>
          )}
          />
          <Route 
          path='/about'
          render={(props) => (
            <About {...props} about={this.state.about} />
          )}
          />
        </Switch>
        <Footer location={this.state.footer.location} social={this.state.footer.social}/>
      </div>
      </Router>
    )
  }

  async componentDidMount() {
    // use Contentstack sdk to retrieve content types etc. and save them in state
    const header = await Stack.getEntry("header", "en-us")
    const footer = await Stack.getEntry("footer", "en-us")
    const blogPosts = await Stack.getEntry("blogs", "en-us")
    const about = await Stack.getEntry("about", "en-us")
    const projects = await Stack.getEntry("projects", "en-us")
    this.setState({
      header: header[0][0],
      footer: footer[0][0],
      blogPosts: blogPosts[0],
      about: about[0][0],
      projects: projects[0]
    })
    // track loading status
    if (this.state.header === undefined) {
      this.setState({
        loading: true
      })
    } else {
      this.setState({
        loading: false
      })
    }
    console.log("ContentstackAPI: ",this.state)
  }

}

export default App;
