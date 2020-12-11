import { connect } from 'react-redux'
import { editComment } from '../actions/sightings'
import CommentForm from '../components/CommentForm'

const CommentFormModal = props => {

  const display = props.display ? "block" : "none"
  return (
    <div id="myModal" className="modal" style={{ display }}>
    <div className="modal__content">
      <span  onClick={props.toggle} className="close">&times;</span>
      <CommentForm commentId={props.commentId} toggle={props.toggle} />
    </div>
  </div>
  )
}

export default connect(null, { editComment })(CommentFormModal)
