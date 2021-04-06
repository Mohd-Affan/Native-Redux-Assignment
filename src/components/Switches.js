import React, {Component} from 'react';
import {
  StyleSheet,
  Switch,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {
  release,
  old,
  mostPopular,
  lessPopular,
  highestRevenue,
  lowestRevenue,
} from '../modules/main';
class Switches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      release: false,
      old: false,
      mostPopular: false,
      lessPopular: false,
      highRevenue: false,
      lessRevenue: false,
    };
  }

  handleClick = () => {
    if (this.state.release) {
      this.props.release();
    } else if (this.state.old) {
      this.props.old();
    } else if (this.state.mostPopular) {
      this.props.mostPopular();
    } else if (this.state.lessPopular) {
      this.props.lessPopular();
    } else if (this.state.highRevenue) {
      this.props.highestRevenue();
    } else if (this.state.lessRevenue) {
      this.props.lowestRevenue();
    }
    this.props.setModalVisible(false);
  };

  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <ScrollView>
          <View>
            <View style={styles.filter}>
              <Text style={styles.filterText}>Filter</Text>
            </View>
            <View style={styles.date}>
              <Text style={styles.dateText}>Date</Text>
            </View>
            <View style={styles.releases}>
              <Text style={styles.releasesText}>Releases</Text>
              <Switch
                value={this.state.release}
                thumbColor={this.state.release ? 'green' : 'white'}
                trackColor={{false: 'white', true: 'white'}}
                onValueChange={
                  (release) =>
                    this.setState({
                      release: !this.state.release,
                      old: false,
                      mostPopular: false,
                      lessPopular: false,
                      highRevenue: false,
                      lessRevenue: false,
                    })
                  // this.props.release()
                }
              />
            </View>
            <View style={styles.releases}>
              <Text style={styles.releasesText}>Old</Text>
              <Switch
                value={this.state.old}
                thumbColor={this.state.old ? 'green' : 'white'}
                trackColor={{false: 'white', true: 'white'}}
                onValueChange={(old) =>
                  this.setState({
                    old: !this.state.old,
                    mostPopular: false,
                    lessPopular: false,
                    highRevenue: false,
                    lessRevenue: false,
                    release: false,
                  })
                }
              />
            </View>
            <View style={styles.popularity}>
              <Text style={styles.popularText}>Popularity</Text>
            </View>
            <View style={styles.popular}>
              <Text style={styles.mostPopularText}>Most Popular</Text>
              <Switch
                value={this.state.mostPopular}
                thumbColor={this.state.mostPopular ? 'green' : 'white'}
                trackColor={{false: 'white', true: 'white'}}
                onValueChange={(mostPopular) =>
                  this.setState({
                    mostPopular: !this.state.mostPopular,
                    old: false,
                    release: false,
                    lessPopular: false,
                    highRevenue: false,
                    lessRevenue: false,
                  })
                }
              />
            </View>
            <View style={styles.popular}>
              <Text style={styles.lessPopularText}>Less Popular</Text>
              <Switch
                value={this.state.lessPopular}
                thumbColor={this.state.lessPopular ? 'green' : 'white'}
                trackColor={{false: 'white', true: 'white'}}
                onValueChange={(lessPopular) =>
                  this.setState({
                    lessPopular: !this.state.lessPopular,
                    old: false,
                    mostPopular: false,
                    release: false,
                    highRevenue: false,
                    lessRevenue: false,
                  })
                }
              />
            </View>

            <View style={styles.revenue}>
              <Text style={styles.revenueText}>Revenue</Text>
            </View>
            <View style={styles.revenueHeader}>
              <Text style={styles.highRevenueText}>Highest Revenue</Text>
              <Switch
                value={this.state.highRevenue}
                thumbColor={this.state.highRevenue ? 'green' : 'white'}
                trackColor={{false: 'white', true: 'white'}}
                onValueChange={(highRevenue) =>
                  this.setState({
                    highRevenue: !this.state.highRevenue,
                    old: false,
                    mostPopular: false,
                    lessPopular: false,
                    release: false,
                    lessRevenue: false,
                  })
                }
              />
            </View>
            <View style={styles.revenueHeader}>
              <Text style={styles.lowRevenueText}>Lowest Revenue</Text>
              <Switch
                value={this.state.lowRevenue}
                thumbColor={this.state.lowRevenue ? 'green' : 'white'}
                trackColor={{false: 'white', true: 'white'}}
                onValueChange={(lowRevenue) =>
                  this.setState({
                    lowRevenue: !this.state.lowRevenue,
                    old: false,
                    mostPopular: false,
                    lessPopular: false,
                    highRevenue: false,
                    release: false,
                  })
                }
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.confirmContainer}
            onPress={() => this.handleClick()}>
            <Text style={styles.confirmText}>Confirm</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: 'black', marginTop: 250},
  filter: {alignItems: 'center'},
  filterText: {color: 'grey', fontSize: 25, marginVertical: 20},
  header: {justifyContent: 'center', alignItems: 'center'},
  releases: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 40,
  },
  releasesText: {color: 'grey', color: 'grey', fontSize: 18},
  date: {marginHorizontal: 40, marginTop: 20},
  dateText: {fontSize: 24, color: 'grey'},
  popularity: {marginHorizontal: 40, marginTop: 20},
  popularText: {fontSize: 24, color: 'grey'},
  popular: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 40,
  },
  mostPopularText: {color: 'grey', fontSize: 18},
  lessPopularText: {color: 'grey', fontSize: 18},
  revenue: {marginHorizontal: 40, marginTop: 20},
  revenueText: {fontSize: 24, color: 'grey'},
  revenueHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 40,
  },
  highRevenueText: {color: 'grey', fontSize: 18},
  lowRevenueText: {color: 'grey', fontSize: 18},
  confirmContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4682b4',
    height: 40,
    width: '80%',
    marginHorizontal: 35,
    marginVertical: '10%',
    borderRadius: 25,
  },
  confirmText: {color: 'white', fontSize: 20},
});

const mapDispatchToProps = (dispatch) => ({
  // getData: () => dispatch(getData()),
  release: () => dispatch(release()),
  old: () => dispatch(old()),
  mostPopular: () => dispatch(mostPopular()),
  lessPopular: () => dispatch(lessPopular()),
  highestRevenue: () => dispatch(highestRevenue()),
  lowestRevenue: () => dispatch(lowestRevenue()),
});

export default connect(null, mapDispatchToProps)(Switches);
