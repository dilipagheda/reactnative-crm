import React from 'react';
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as actions from '../actions';
import { Card, Title, Paragraph, Avatar, IconButton } from 'react-native-paper';


const styles = StyleSheet.create({
    card: {
        marginTop: 20
    },
    title: {
        top: 20,
        left: 80,
        fontSize: 24,
    },
    image: {
        height: 100,
    },
    action: {
        backgroundColor: 'black',
        color: 'white',
    },
    icon: {
        position: 'absolute',
        top: 15,
        left: 0,
        color: 'white',
        backgroundColor: 'rgba(255,255,255,0)',
    },
});

const PeopleItem = (props) => {
    
    const {firstName, lastName, company} = props.people

    const getAvatarLabel = (firstName, lastName) => {

        return `${firstName[0]}${lastName[0]}`.toUpperCase()
    }

    return (
        <TouchableWithoutFeedback 
            onPress={() => props.selectPerson(props.people)}>
            {/* <View style={[styles.card]}>
                <Image 
                    source={require('../images/background.jpg')}
                    style={[styles.image]}
                />
                <Icon 
                    name={'user'}
                    size={100}
                    style={styles.icon}
                />
                <Text style={[styles.title]}>{props.people.firstName} {props.people.lastName}</Text>
                <Text style={[styles.action]}>{props.people.company}</Text>
            </View> */}

            <View>
                <Card.Title
                    title={`${firstName} ${lastName}`}
                    subtitle={`${company}`}
                    left={(props) => <Avatar.Text size={24} {...props} label={getAvatarLabel(firstName, lastName)} />}
                />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default connect(null, actions)(PeopleItem);
