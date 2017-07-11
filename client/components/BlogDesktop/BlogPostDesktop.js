import React, { Component } from 'react';
import prevarrow from '../../src/prev-arrow.svg';
import nextarrow from '../../src/next-arrow.svg';

class BlogPostDesktop extends Component {

  constructor(props) {
    super(props);
    this.state = {
      curImg: undefined,
      curIndex: 0
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  componentDidMount() {
    window.scroll(0, 0);
  }

  openModal(e, gallery) {
    var index = Number(e.currentTarget.getAttribute('name'));
    this.setState({curImg: gallery[index], curIndex: index});
    document.getElementById('modal').style.display = 'flex';
  }

  closeModal(e) {
    if (e.target.classList.contains('gallery-modal')) {
      e.target.style.display = 'none';
    }
  }

  next(gallery) {
    if (this.state.curIndex < gallery.length-1) {
      var newIndex = this.state.curIndex+1;
      this.setState({curImg: gallery[newIndex], curIndex: newIndex});
    }
  }

  prev(gallery) {
    if (this.state.curIndex > 0) {
      var newIndex = this.state.curIndex-1;
      this.setState({curImg: gallery[newIndex], curIndex: newIndex});
    }
  }

  render() {

    var posts = [];
    if (this.props.blog) {
      this.props.blog.forEach((item, i) => {
        if (item.type === 'header') {
          posts.push(
            <h1 key={i}>{item.content}</h1>
          );
        } else if (item.type === 'subheader') {
          posts.push(
            <h2 key={i}>{item.content}</h2>
          );
        }  else if (item.type === 'paragraph') {
          posts.push(
            <p key={i}>{item.content}</p>
          );
        } else if (item.type === 'image') {
          posts.push(
            <img key={i} src={item.content} className="post-normal-photo" />
          );
        } else if (item.type === 'cover') {
          posts.push(
            <img key={i} src={item.content} className="post-normal-photo" />
          );
        } else if (item.type === 'date') {
          posts.push(
            <div key={i} className="post-blog-date">{item.content}</div>
          );
        }
      });
    }

    var gallery = [], sources = [];
    var galleryCount = 0;
    if (this.props.blog) {
      this.props.blog.forEach((item) => {
        if (item.type === 'image' || item.type === 'cover') {
          sources.push(item.content);
          gallery.push(
            <span key={galleryCount} name={galleryCount}
              onClick={(e) => { this.openModal(e, sources); }}>
              <img src={item.content} />
            </span>
          );
          galleryCount++;
        }
      });
    }

    return (
      <section className="BlogPostDesktop">
        {posts}
        <div className="gallery">
          <div className="gallery-pics">
            {gallery}
            <div className="gallery-header">Gallery</div>
          </div>
        </div>
        <div id="modal" className="gallery-modal" onClick={this.closeModal}>
          <div className="modal-container">
            <span className="prev-gallery" style={this.state.curIndex === 0 ? {
              color: 'gray'
            } : null} onClick={() => { this.prev(sources); }}>
              <i className="fa fa-arrow-left" aria-hidden="true"></i> back
            </span>
            <img src={this.state.curImg} />
            <span className="next-gallery"
              style={this.state.curIndex === gallery.length-1 ? {
              color: 'gray'
            } : null} onClick={() => { this.next(sources); }}>
              next <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </section>
    )
  }
}

export default BlogPostDesktop;
