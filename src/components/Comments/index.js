import {Component} from 'react'

import './index.css'
import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {commentList: [], name: '', comment: '', count: 0}

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  submitBtn = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const initialBackgroundColor =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      date: new Date(),
      isLiked: false,
      backgroundColor: initialBackgroundColor,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      comment: '',
      count: prevState.count + 1,
    }))
  }

  likeBtn = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(each => {
        if (id === each.id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  deleteBtn = id => {
    const {commentList} = this.state
    const filterItem = commentList.filter(each => each.id !== id)
    this.setState(prev => ({commentList: filterItem, count: prev.count - 1}))
  }

  render() {
    const {commentList, name, comment, count} = this.state
    return (
      <div className="container">
        <div className="inside-container">
          <div>
            <h1 className="heading">Comments</h1>
            <p className="para">Say something about 4.0 technologies</p>
            <form onSubmit={this.submitBtn}>
              <input
                value={name}
                type="text"
                placeholder="Your Name"
                onChange={this.onChangeName}
              />
              <textarea
                value={comment}
                placeholder="Your Comment"
                cols="53"
                rows="6"
                onChange={this.onChangeComment}
              />
              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="img-size"
          />
        </div>
        <hr />
        <p className="comment-count">
          <span>{count}</span> Comments
        </p>
        <ul className="unorder-list">
          {commentList.map(each => (
            <CommentItem
              key={each.id}
              commentDetails={each}
              likeBtn={this.likeBtn}
              deleteBtn={this.deleteBtn}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
