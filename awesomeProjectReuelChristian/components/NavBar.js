import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useState } from 'react';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import ModalHero from './ModalHero';

function NavBar(props) {
  
  const [modalVisible, setModalVisible] = useState(false);
  function continueHandler() {
    setModalVisible(false);
  }
  function showModalHandler(){
    setModalVisible(true);
  }

  return (
    <View style={styles.navContainer}>

      <Pressable
        style={({ pressed }) => [
          styles.navItem,
          props.activeTab === 'home' && styles.activeNavItem,
          pressed && styles.pressedNavItem
        ]}
        onPress={() => props.onTabPress('home')}
      >
        <Text style={[styles.navIcon, props.activeTab === 'home' && styles.activeNavText]}>
            <Feather name="home" size={24} color="black" />
        </Text>
        <Text style={[styles.navLabel, props.activeTab === 'home' && styles.activeNavText]}>Home</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [
          styles.navItem,
          props.activeTab === 'profile' && styles.activeNavItem,
          pressed && styles.pressedNavItem
        ]}
        onPress={showModalHandler}
      >
        <Text style={[styles.navIcon, props.activeTab === 'profile' && styles.activeNavText]}>
            <MaterialCommunityIcons name="face-man-profile" size={24} color="black" />
        </Text>
        <Text style={[styles.navLabel, props.activeTab === 'profile' && styles.activeNavText]}>User</Text>
      </Pressable>
      
      <ModalHero
        visible={modalVisible}
        onContinue={continueHandler}
      />

    </View>
  );
}

export default NavBar;

const styles = StyleSheet.create({
  navContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    elevation: 10,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
  },
  navItem: {
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  activeNavItem: {
    backgroundColor: '#e8f5ee',
  },
  pressedNavItem: {
    opacity: 0.6,
  },
  navIcon: {
    fontSize: 20,
    marginBottom: 2,
  },
  navLabel: {
    fontSize: 12,
    color: '#999',
  },
  activeNavText: {
    color: '#4f9667',
    fontWeight: 'bold',
  },
});