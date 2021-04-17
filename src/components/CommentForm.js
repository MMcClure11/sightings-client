import React from 'react';
import { connect } from 'react-redux';
import {
  commentFormChange,
  editComment,
  submitComment,
} from '../actions/sightings';

const CommentForm = (props) => {
  const { content } = props.form;

  const onSubmit = (e) => {
    e.preventDefault();
    if (props.commentId) {
      props.editComment(props.form, props.commentId);
      props.toggle();
    } else {
      props.submitComment({
        content: props.form.content,
        sighting_id: props.sighting_id,
      });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <textarea
        className='textarea'
        name='content'
        required={true}
        value={content}
        onChange={props.commentFormChange}
        placeholder='Comment'
      ></textarea>
      <input
        className='btn btn--small btn--small--submit-comment'
        type='submit'
        value='SEND'
      />
    </form>
  );
};

const mapStateToProps = (state) => ({
  form: state.sightings.commentForm,
});

export default connect(mapStateToProps, {
  commentFormChange,
  editComment,
  submitComment,
})(CommentForm);
