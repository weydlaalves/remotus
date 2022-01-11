import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,

} from 'react-native';


const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
     
      <Text style={styles.itemText}>{item.text}</Text>

    </View>
  );
};


export function Categorias() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              {section.horizontal ? (
              
                <FlatList
                  horizontal
                  data={section.data}
                  renderItem={({ item }) => <ListItem item={item} />}
                  showsHorizontalScrollIndicator ={false}
                  
                />
              ) : null}
            </>
          )}
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return <ListItem item={item} />;
          }}
        />
      </SafeAreaView>
    </View>
  );
};

const SECTIONS = [  
  {
    title: 'Categorias',
    horizontal: true,
    data: [
      {
        key: '1',
        text: 'Padaria',
        uri: 'https://image.freepik.com/fotos-gratis/saboroso-cafe-em-um-copo-branco_1232-412.jpg',
      },
      {
        key: '2',
        text: 'Restaurante',
        uri: 'https://scontent.fjdo10-1.fna.fbcdn.net/v/t39.30808-6/245273839_2937174959867871_9219484628657418670_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=a26aad&_nc_eui2=AeFFpiwYoEHOwYtKFP27wtCkuR9CBhBIGIu5H0IGEEgYi41j61PI8WFM8Uoe9kV_RdMMyGhVA0Ujs7Rk17dHaBhc&_nc_ohc=6XPRB77_gHYAX-EvGhN&_nc_ht=scontent.fjdo10-1.fna&oh=00_AT_W9a8qzw0C6Us7H6AYetEALXsUwg3eTIsbTZvTLZEJgg&oe=61D93545',
      },
    ],
  },
];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: '#0d1321',
    
    
    
  },
  item: {
    margin: 10,
  },
  itemPhoto: {
    width: 150,
    height: 100,
    borderRadius:10,
  },
  itemText: {
    color: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 15,
  },
});
