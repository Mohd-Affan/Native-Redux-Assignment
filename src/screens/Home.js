import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  Modal,
  SafeAreaView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {getData, deleteData} from '../modules/main';
import {connect} from 'react-redux';
import Switches from '../components/Switches';

const FlatlistOne = ({item}) => {
  return (
    <View style={styles.listItem}>
      <View style={styles.Image}>
        <Image
          style={styles.poster}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          }}
        />
      </View>
      <View style={styles.descriptionContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{item.title}</Text>
        </View>
        <View style={styles.yearLangContainer}>
          <Text style={styles.yearLangText}>
            2021 | {item.original_language}
          </Text>
          <View style={styles.genreIdsContainer}>
            <Text style={styles.genreIdsText}>Adventure/Action</Text>
          </View>
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>{item.vote_average}</Text>
        </View>
      </View>
    </View>
  );
};

const FlatlistTwo = ({item}) => {
  return (
    <View style={styles.listItem2}>
      <View style={styles.Image2}>
        <Image
          style={styles.poster}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          }}
        />
      </View>
      <View style={styles.titleContainer2}>
        <Text style={styles.titleText2}>{item.title}</Text>
      </View>
    </View>
  );
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {gridView: false, isModalVisible: false};
  }

  loadData = () => {
    this.props.getData(this.props.page + 1);
  };

  setModalVisible = (visible) => {
    this.setState({isModalVisible: visible});
  };

  componentDidMount() {
    this.props.getData();
  }
  render() {
    const {data} = this.props;
    return (
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.homeBtn}>
            <Text style={styles.homeText}> Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.filterBtn}
            onPress={() => this.setModalVisible(true)}>
            <MaterialCommunityIcons
              name={'filter-outline'}
              size={30}
              color={'white'}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.secondHeader}>
          <TouchableOpacity style={styles.mostPopularBtn}>
            <Text style={styles.mostPopularText}>Most popular</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.gridBtn}
            onPress={() => this.setState({gridView: !this.state.gridView})}>
            <Ionicons name={'grid-outline'} size={25} color={'white'} />
          </TouchableOpacity>
        </View>

        {this.state.gridView ? (
          <FlatList
            key={'_'}
            data={data}
            renderItem={({item}) => <FlatlistTwo item={item} />}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            onEndReached={() => this.loadData()}
            onEndReachedThreshold={0}
          />
        ) : (
          <FlatList
            key={'#'}
            data={data}
            renderItem={({item}) => <FlatlistOne item={item} />}
            keyExtractor={(item) => item.id.toString()}
            onEndReached={() => this.loadData()}
            onEndReachedThreshold={0}
          />
        )}
        <View>
          <Modal
            // style={styles.modal}
            transparent={true}
            animationType="slide"
            visible={this.state.isModalVisible}>
            <Switches
              style={{height: '50%', backgroundColor: 'red'}}
              setModalVisible={(visible) => this.setModalVisible(visible)}
            />
          </Modal>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#1c1c1c',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 45,
  },
  homeBtn: {marginLeft: 15},
  homeText: {color: 'white', fontSize: 18},
  filterBtn: {marginRight: 15},
  secondHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  mostPopularBtn: {marginLeft: 15},
  mostPopularText: {color: 'white', fontSize: 18},
  gridBtn: {marginRight: 15},
  descriptionContainer: {width: 250},
  titleContainer: {marginLeft: 20},
  titleText: {color: 'white', fontSize: 18},
  yearLangContainer: {marginLeft: 20},
  yearLangText: {color: 'gray'},

  genreIdsText: {color: 'gray'},
  ratingContainer: {
    borderRadius: 10,
    marginTop: 140,
    marginLeft: 20,
    backgroundColor: 'green',
    width: 40,
    alignItems: 'center',
  },
  ratingText: {
    color: 'white',
  },
  poster: {width: 160, height: 210, borderRadius: 20},
  listItem: {
    flexDirection: 'row',
    marginBottom: 40,
    justifyContent: 'flex-start',
  },
  listItem2: {flex: 1},
  Image2: {margin: 20},
  titleContainer2: {marginBottom: 40},
  titleText2: {textAlign: 'center', color: 'white'},
});

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(getData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
