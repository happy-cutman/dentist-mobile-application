import React from 'react';
import {Text, View, Image } from 'react-native';
import styled from 'styled-components/native';


const Visit = ({user, diagnosis, active, time}) => {
    return (
        <GroupItem>
            <Avatar source={{uri: user.avatar}}/>
            <View style={{flex: 1}}>
                <FullName>{user.fullName}</FullName>
                <GrayText>{diagnosis}</GrayText>
            </View>
            <GroupDate active={active}>{time}</GroupDate>
        </GroupItem>
    )
};

Visit.defaultProps = {
    title: 'untitled',
    items: []
};


const GroupItem = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-color: #f3f3f3;
    padding: 20px;
`;

const Avatar = styled.Image`
    border-radius: 50px;
    width: 40px;
    height: 40px;
    margin-right: 15px;
`;

const FullName = styled.Text`
    font-weight: 600;
    font-size: 16px;
`;

const GrayText = styled.Text`
    font-size: 16px;
    color: #8b979f
`;

const GroupDate = styled.Text`
    background: ${props => props.active ? '#2A86FF' : '#e9f5ff'};
    color: ${props => props.active ? '#fff' : '#4294FF'};
    border-radius: 18px;
    font-weight: bold;
    font-size: 14px;
    width: 70px;
    height: 32px;
    text-align: center;
    line-height: 30px;
`;

export default Visit;