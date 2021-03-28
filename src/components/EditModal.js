import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {editData} from '../modules/main/actions';

class EditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {id: '', userId: '', title: '', description: ''};
  }
  Click = () => {
    const data = {
      id: parseInt(this.state.id, 10),
      userId: parseInt(this.state.userId, 10),
      title: this.state.title,
      body: this.state.description,
    };
    console.log(data);
    this.props.editData(data);
    this.props.setModalVisible(false);
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.modal}>
          <View style={styles.header}>
            <Text style={styles.headerText}> Edit Data </Text>
          </View>
          <View style={styles.textInput}>
            <TextInput
              style={styles.input}
              placeholder="Enter Id"
              onChangeText={(msg) => this.setState({id: msg})}
            />
            <TextInput
              style={styles.input}
              placeholder="userId"
              onChangeText={(msg) => this.setState({userId: msg})}
            />
            <TextInput
              style={styles.input}
              placeholder="title"
              onChangeText={(msg) => this.setState({title: msg})}
            />
            <TextInput
              style={styles.input}
              placeholder="description"
              onChangeText={(msg) => this.setState({description: msg})}
            />
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.Click}>
              <Text>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  modal: {
    backgroundColor: 'purple',
    alignItems: 'center',
    borderRadius: 30,
    height: '65%',
    width: '80%',
    marginTop: 30,
  },
  header: {
    marginTop: 40,
  },
  input: {
    margin: 30,
    width: 300,
    padding: 10,
    backgroundColor: 'lavender',
    margin: 35,
    color: 'black',
  },
  button: {
    margin: 50,
    backgroundColor: 'lavender',
    width: 60,
    alignItems: 'center',
    borderRadius: 10,
  },
});

const mapDispatchToProps = (dispatch) => ({
  editData: (data) => dispatch(editData(data)),
});

export default connect(null, mapDispatchToProps)(EditModal);
