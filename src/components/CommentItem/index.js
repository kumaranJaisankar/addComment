import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails, likeBtn, deleteBtn} = props
  const {id, name, comment, date, isLiked, backgroundColor} = commentDetails
  const likeImg = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const btnText = isLiked ? 'btn-blue' : ''
  const onLike = () => {
    likeBtn(id)
  }
  const onDelete = () => {
    deleteBtn(id)
  }

  return (
    <li>
      <div className="upper">
        <div className={`initial-container ${backgroundColor}`}>
          {name.slice(0, 1).toUpperCase()}
        </div>
        <div>
          <div className="date-initial">
            <h1 className="hed-name">{name}</h1>
            <p className="time">{formatDistanceToNow(date)}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="btn-align">
        <button
          type="button"
          className={`like-btn ${btnText}`}
          onClick={onLike}
        >
          <img src={likeImg} alt="like" /> Like
        </button>
        <button type="button" className="like-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            onClick={onDelete}
          />
        </button>
      </div>
      <hr />
    </li>
  )
}
export default CommentItem
