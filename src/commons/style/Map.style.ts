import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F6F7FB' },
  header: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingRight: 24,
    paddingBottom: 16,
    paddingLeft: 24,
    paddingTop: 16,
    alignItems: 'center',
    marginBottom: 4,
    marginVertical: 6,
    justifyContent: 'center',
    position: 'relative',
    zIndex: 2,
  },
  backIcon: {
    position: 'absolute',
    left: 24,
    zIndex: 2,
  },
  headerTitle: {
    fontFamily: 'Nunito',
    fontWeight: '700',
    fontSize: 18,
    letterSpacing: 0,
    textAlign: 'center',
    color: 'rgba(0, 85, 167, 1)',
    flex: 1,
  },

  map: {
    flex: 1,
    borderRadius: 20,
    margin: 16,
    marginTop: 0,
    overflow: 'hidden',
  },

  cardOverlay: {
    position: 'absolute',
    top: '20%',
    left: '5%',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    zIndex: 5,
  },

  

  // card: {
  //   flexDirection: 'column',
  //   backgroundColor: 'rgba(255, 255, 255, 1)',
  //   borderRadius: 6,
  //   padding: 8,
  //   maxWidth: 260,
  //   elevation: 4,
  //   shadowColor: '#000',
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowOpacity: 0.1,
  //   shadowRadius: 4,
  // },

  card: {
    flexDirection: 'column',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 6,
    padding: 8,
    maxWidth: 260,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  elementCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },

  image: {
    width: 49,
    height: 49,
    borderRadius: 6,
  },

  title: {
    fontWeight: '700',
    fontSize: 12,
    fontFamily: 'Nunito',
    letterSpacing: 0,
    color: '#000',
    marginLeft: 8,
    flexShrink: 1,
  },

  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 9,
  },

  address: {
    fontFamily: 'Nunito',
    fontWeight: '400',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 1)',
    flexShrink: 1,
  },

  iconLocation: {
    width: 19,
    height: 19,
    marginRight: 4,
  },
});

export default styles;
