import React from 'react'
import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    const colors = ['black', 'blue', 'cyan', 'green', 'magenta', 'red', 'yellow']
    this.state = {
      boxes: [...colors, ...colors, ...colors, ...colors, ...colors, ...colors, ...colors]
    }
  }
  _boxPressed (index) {
    const boxes = [...this.state.boxes]
    boxes[index] = (boxes[index + 1]) ? boxes[index + 1] : boxes[0]
    this.setState({boxes})
  }
  render () {
    const Box = this.state.boxes.map((backgroundColor, index) => {
      return (
        <TouchableOpacity
          onPress={() => { this._boxPressed(index) }}
          key={index}
          style={[styles.gridBox, {backgroundColor}]}
        />
      )
    })
    return (
      <View style={styles.grid}>
        {Box}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  grid: {
    backgroundColor: '#202529',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    paddingTop: (Dimensions.get('window').height / 2) - (((Dimensions.get('window').width / 7) - 3) * (7 / 2))
  },
  gridBox: {
    width: (Dimensions.get('window').width / 7) - 3,
    height: (Dimensions.get('window').width / 7) - 3,
    backgroundColor: 'red',
    marginLeft: 2,
    marginBottom: 2,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white'
  }
})
