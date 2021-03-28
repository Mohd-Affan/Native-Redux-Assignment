import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {getData, deleteData} from '../modules/main';
import {connect} from 'react-redux';
import EditModal from '../components/EditModal';
import AddModal from '../components/AddModal';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      isEditModalVisible: false,
    };
  }

  componentDidMount() {
    this.props.getData();
  }

  setAddModalVisible = (visible) => {
    this.setState({isModalVisible: visible});
  };

  setEditModalVisible = (visible) => {
    this.setState({isEditModalVisible: visible});
  };

  Click = (id) => {
    this.props.deleteData(id);
  };

  render() {
    const {data} = this.props;
    console.log('Length of current Data Array ' + data.length);
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text>DATA</Text>
          <TouchableOpacity
            style={styles.crossIcon}
            onPress={() => this.setAddModalVisible(true)}>
            <AntDesign name="plus" size={30} color="lavender" />
          </TouchableOpacity>
        </View>

        <FlatList
          style={styles.flatlist}
          data={data}
          renderItem={({item}) => (
            <View style={styles.listItem}>
              <View style={styles.listTitle}>
                <Text style={styles.listText}>{item.title}</Text>
              </View>
              <View style={styles.listIcons}>
                <TouchableOpacity
                  onPress={() => this.setEditModalVisible(true)}>
                  <MaterialCommunityIcons
                    name="pencil-plus-outline"
                    color="royalblue"
                    size={25}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.Click(item.id)}>
                  <MaterialCommunityIcons
                    name="delete-forever"
                    color="red"
                    size={25}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />

        <Modal
          animationType="slide"
          visible={this.state.isModalVisible}
          transparent={true}>
          <AddModal setModalVisible={this.setAddModalVisible} />
        </Modal>
        <Modal
          animationType="slide"
          visible={this.state.isEditModalVisible}
          transparent={true}>
          <EditModal setModalVisible={this.setEditModalVisible} />
        </Modal>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {backgroundColor: 'purple'},
  header: {
    justifyContent: 'center',
    paddingVertical: 15,
    alignItems: 'center',
  },
  crossIcon: {
    position: 'absolute',
    right: 20,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lavender',
    padding: 20,
    height: 120,
    borderBottomWidth: 0.3,
  },
  listText: {
    textAlign: 'justify',
    fontSize: 20,
  },
  listTitle: {
    flex: 3,
  },
  listIcons: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(getData()),
  deleteData: (id) => dispatch(deleteData(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
