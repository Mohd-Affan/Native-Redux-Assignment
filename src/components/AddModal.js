import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {addData} from '../modules/main/actions';

class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {title: '', description: ''};
  }

  Click = () => {
    const data = {
      title: this.state.title,
      body: this.state.description,
      userId: 1,
    };

    this.props.addData(data);
    this.props.setModalVisible(false);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.modal}>
          <View style={styles.header}>
            <Text style={styles.headerText}> Add Text </Text>
          </View>
          <View>
            <TextInput
              style={styles.titleInput}
              placeholder="Add Title"
              onChangeText={(msg) => this.setState({title: msg})}
            />
          </View>
          <View>
            <TextInput
              style={styles.descriptionInput}
              placeholder="Add Description"
              onChangeText={(msg) => this.setState({description: msg})}
            />
          </View>
          <TouchableOpacity style={styles.addBtn} onPress={this.Click}>
            <Text style={styles.addBtnText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  modal: {
    alignItems: 'center',
    backgroundColor: 'purple',
    borderRadius: 30,
    height: '55%',
    shadowOffset: {
      height: 10,
      width: 10,
    },
    shadowColor: 'gray',
    shadowRadius: 10,
    shadowOpacity: 3,
  },
  headerText: {
    fontSize: 40,
  },
  titleInput: {
    margin: 30,
    width: 300,
    padding: 10,
    backgroundColor: 'lavender',
    color: 'black',
  },
  descriptionInput: {
    backgroundColor: 'lavender',
    width: 300,
    padding: 70,
    marginTop: 20,
    color: 'black',
  },
  addBtn: {
    margin: 50,
    backgroundColor: 'lavender',
    width: 60,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 70,
  },
});
const mapDispatchToProps = (dispatch) => ({
  addData: (data) => dispatch(addData(data)),
});

export default connect(null, mapDispatchToProps)(AddModal);
