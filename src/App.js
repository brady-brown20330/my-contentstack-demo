import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Styles from './App.css'
import Stack from './sdk/entry';
import Loading from './components/Loading';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogPostList from './components/BlogPostList';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      header: undefined,
      footer: undefined,
      blogPosts: undefined
    }
  }

  render() {
    console.log(window.location.pathname)
    if (this.state.loading === true) return <Loading text="Loading" />
    return (
      <div className="app">
        <Header title={this.state.header.title} subtext={this.state.header.title_subtext}/>
        <BlogPostList blogPosts={this.state.blogPosts}/>
        <Footer location={this.state.footer.location} social={this.state.footer.social}/>
      </div>
    )
  }

  async componentDidMount() {
    // use Contentstack sdk to retrieve content types etc. and save them in state
    const header = await Stack.getEntry("header", "en-us")
    const footer = await Stack.getEntry("footer", "en-us")
    const blogPosts = await Stack.getEntry("blogs", "en-us")
    this.setState({
      header: header[0][0],
      footer: footer[0][0],
      blogPosts: blogPosts[0]
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
    console.log("should be something from contentstack API: ",this.state.blogPosts)
  }

}

export default App;
