import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
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

export function Sugestao() {
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
    title: 'Sugestões',
    horizontal: true,
    data: [
      {
        key: '1',
        text: 'FM açai',
        uri: 'https://image.freepik.com/fotos-gratis/tigela-de-acai-tipica-brasileira-sobre-mesa-de-madeira_92534-1457.jpg',
      },
      {
        key: '2',
        text: 'miudos com afeto',
        uri: 'https://scontent.fjdo10-2.fna.fbcdn.net/v/t39.30808-6/s720x720/245382532_2937729579812409_406209465337538194_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=a26aad&_nc_eui2=AeH7ciwDJ472Gh0Kildh5si6g18cpvtdH9eDXxym-10f11xTUofruiQvuY_5zlD3egTB0LmuX5oQVj8a2-sHlygY&_nc_ohc=omtBAt4i2MIAX9Zl1TV&_nc_ht=scontent.fjdo10-2.fna&oh=00_AT9_8SKeyOeeJXGBzClX-1dpZCEkE69aE4006SWYwBMdng&oe=61D9534D',
      },

      {
        key: '3',
        text: 'Item text 3',
        uri: 'https://picsum.photos/id/1013/200',
      },
      {
        key: '4',
        text: 'Item text 4',
        uri: 'https://picsum.photos/id/1015/200',
      },
      {
        key: '5',
        text: 'Item text 5',
        uri: 'https://picsum.photos/id/1016/200',
      },
    ],
  },
  
];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',

  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: '#0d1321',
    marginTop: 20,
    marginBottom: 5,
    
  },
  item: {
    margin: 10,
  },
  itemPhoto: {
    width: 100,
    height: 100,
    borderRadius:100,

  },
  itemText: {
    color: 'rgba(0, 0, 0, 0.5)',
    marginTop: 5,
  },
});
