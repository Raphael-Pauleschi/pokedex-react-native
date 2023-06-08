import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Container, Label, Bar} from './style' 
const StatsDisplay = ({ label, value }) => {
    return (
        <Container>
            <Label>{label}</Label>
            <Label>{value}</Label>
            <View style={[styles.bar, { backgroundColor: getBarColor(value), width: `${value/3}%` }]} />
        </Container>
    );
};

const getBarColor = (value) => {
    if (value >= 150) {
        return "blue"
    }else if (value >= 100) {
        return 'green';
    } else if (value >= 75) {
        return 'yellow';
    } else if (value >= 50) {
        return 'orange';
    } else {
        return 'red';
    }
};

const styles = StyleSheet.create({
    bar: {
        height: 8,
        borderRadius: 4,
    },
});

export default StatsDisplay;
