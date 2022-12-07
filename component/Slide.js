import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import CarouselPager from 'react-native-carousel-pager';
import Swipers from './Swipers';
import Swipers2 from './Swipers2';
import Swipers3 from './Swipers3';
import { LogBox } from 'react-native';
import Dots from 'react-native-dots-pagination';

export default class Slide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0
        }
    }

    render() {
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
        return (
            <View style={{ flex: 1 }}>
                <CarouselPager ref={ref => this.carousel = ref} blurredOpacity={1} blurredZoom={0.85} onPageChange={i => this.setState({ active: i })}>
                    <View key={'page0'}>
                        <Swipers Fam={this.props.Fam} Name={this.props.Name} Otch={this.props.Otch} Date={this.props.Date} gender={this.props.gender} image={this.props.image} pickImage={this.props.pickImage} />
                    </View>
                    <View key={'page1'}>
                        <Swipers2 Fam={this.props.Fam} Name={this.props.Name} Otch={this.props.Otch} Date={this.props.Date} gender={this.props.gender} image={this.props.image} pickImage={this.props.pickImage} />
                    </View>
                    <View key={'page2'}>
                        <Swipers3 Fam={this.props.Fam} Name={this.props.Name} Otch={this.props.Otch} Date={this.props.Date} gender={this.props.gender} image={this.props.image} pickImage={this.props.pickImage} />
                    </View>
                </CarouselPager>
                <Dots length={3} active={this.state.active} paddingVertical={24.5} activeColor='#0A0603' passiveColor='#7E8A81' passiveDotWidth={5} passiveDotHeight={5} activeDotHeight={7} activeDotWidth={7} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#97bdee'
    },
});
