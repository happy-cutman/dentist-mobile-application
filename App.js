import React from 'react';
import {View, SectionList, Text } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons'

import Visit from './components/Visit';
import SectionTitle from './components/SectionTitle';

const DATA = [
    {
        title: "15 июля",
        data: [
            {
                time: '15:30',
                diagnosis: 'кариес',
                active: true,
                user: {
                    fullName: 'Валерий Реактович',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMGoKnpPx2nu5qodXyx2jMvpxRj1ItwGm-UQ&usqp=CAU'
                }
            },
            {
                time: '12:30',
                diagnosis: 'пульпит',
                active: false,
                user: {
                    fullName: 'Татьяна Филатова',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTk_44yk_dwFBR0wGaXIjp4gVGA_LX3AKjgGw&usqp=CAU'
                }
            },
            {
                time: '15:30',
                diagnosis: 'кариес',
                active: false,
                user: {
                    fullName: 'Валерий Реактович',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMGoKnpPx2nu5qodXyx2jMvpxRj1ItwGm-UQ&usqp=CAU'
                }
            },
            {
                time: '12:30',
                diagnosis: 'пульпит',
                active: false,
                user: {
                    fullName: 'Татьяна Филатова',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTk_44yk_dwFBR0wGaXIjp4gVGA_LX3AKjgGw&usqp=CAU'
                }
            },
        ]
    },
    {
        title: '16 июля',
        data: [
            {
                time: '15:30',
                diagnosis: 'кариес',
                active: false,
                user: {
                    fullName: 'Валерий Реактович',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMGoKnpPx2nu5qodXyx2jMvpxRj1ItwGm-UQ&usqp=CAU'
                }
            },
            {
                time: '12:30',
                diagnosis: 'пульпит',
                active: false,
                user: {
                    fullName: 'Татьяна Филатова',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTk_44yk_dwFBR0wGaXIjp4gVGA_LX3AKjgGw&usqp=CAU'
                }
            },
            {
                time: '15:30',
                diagnosis: 'кариес',
                active: false,
                user: {
                    fullName: 'Валерий Реактович',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMGoKnpPx2nu5qodXyx2jMvpxRj1ItwGm-UQ&usqp=CAU'
                }
            },
            {
                time: '12:30',
                diagnosis: 'пульпит',
                active: false,
                user: {
                    fullName: 'Татьяна Филатова',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTk_44yk_dwFBR0wGaXIjp4gVGA_LX3AKjgGw&usqp=CAU'
                }
            },
        ]
    },

];

export default function App() {
  return (
      <Container>
          <SectionList
              sections={DATA}
              keyExtractor={ ( item, index ) => index }
              renderItem={ ({ item }) => <Visit { ...item } /> }
              renderSectionHeader={ ({ section: { title }}) => (
                  <SectionTitle>{ title }</SectionTitle>
              )}
          />
          <PlusButton>
              <Ionicons name='ios-add' size={42} color='white'/>
          </PlusButton>
      </Container>
  );
}

const Container = styled.View`
    flex: 1;
    margin-top: 30px;
`;

const PlusButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    width: 64px;
    height: 64px;
    background: #2A86FF;
    position: absolute;
    right: 20px;
    bottom: 20px;
    shadow-color: #2A86FF;
    shadow-opacity: 0.7;
    shadow-radius: 3.5;
    elevation: 5;
`;