import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')
 
class Modali extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: props.show,
      islogin:false,
      type:props.type
    };
 
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  componentDidMount(){
    switch(this.state.type){
        case 1:
            console.log("login")
            break;
        case 2:
            console.log("register")
            break;
    }
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }
 

 
  closeModal() {
    this.setState({modalIsOpen: false});
  }
 
  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >  
            {this.state.islogin?
            <div>
                login
            </div>
            :
            <div>
                register
            </div>}
        </Modal>
      </div>
    );
  }
}
 
export default Modali;
