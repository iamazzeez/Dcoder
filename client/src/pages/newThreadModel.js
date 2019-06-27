import React from 'react'
import { Modal, Button } from 'react-bootstrap';


export default class CreateThreadModel extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.onChangeComment = this.onChangeComment.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  
      this.state = {
        show: false,
        comment: '',
        submitComment: ''
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }

    onChangeComment(e) {
        this.setState({
            comment: e.target.value
        })
    }

  //  onSubmit(e) {
  //   e.preventDefault()
  //   this.setState({
  //       submitComment: this.state.comment,
  //       comment: ''
  //   });
  //   }

    onSubmit = (e) => {
      e.preventDefault()
      fetch('http://localhost:5000/', {
      method: 'POST',
      body: JSON.stringify({ sms:   { message: this.state.comment, to:  this.props.phone }  }),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => {
      if(res.status !== 200 && res.status !== 201){
        throw new Error('Failed!')
      } 
      res.json().then(resData => {
      alert('User created')
      console.log(resData);
    })
    })
    .catch(err => {
      console.log(err)
    }) 

        this.setState({
        submitComment: this.state.comment,
        comment: ''
    });
      }
   
    render() {
      return (
        <>
           <button className="btn pmd-btn-fab pmd-ripple-effect btn-primary app-fab--absolute" onClick={this.handleShow} type="button">
                  <i class="material-icons pmd-sm">add</i>
             </button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Create New Thread</Modal.Title>
            </Modal.Header>
            <form className="form-group container" >    
            <label className="form-label" for="inputDefault">Title</label>
            <input  type="text"
                                className="form-control"
                                value={this.state.comment}
                                onChange={this.onChangeComment}
                                placeholder="Enter Title"
                                />

              <div class="form-group">
           <label for="exampleTextarea">Description</label>
            <textarea class="form-control" id="exampleTextarea" placeholder="Enter Description" rows="3"></textarea>
             </div>
            <label className="form-label" for="inputDefault">Tags</label>
            <input  type="text"
                                className="form-control"
                                value={this.state.comment}
                                onChange={this.onChangeComment}
                                placeholder="Use Comma to seperate tags"
                                />
            <Modal.Footer>
            <button type="submit" onClick={this.onSubmit} class="btn btn-success">Create</button>
            </Modal.Footer>
            </form>
          </Modal>
        </>
      );
    }
  }
  
