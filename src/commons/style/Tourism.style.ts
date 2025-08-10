import { StyleSheet } from 'react-native';

const MOUNTAIN_HEIGHT = 289;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(246, 247, 251, 1)',
  },

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
  },

  backIcon: {
    position: 'absolute',
    left: 24,
    zIndex: 2,
  },

  listContainer: {
    // alignSelf: 'center',
    flexDirection: 'column',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },

  elementContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 150,
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderColor: 'rgba(238, 241, 255, 1)',
    borderStyle: 'solid',
    overflow: 'hidden',
    position: 'relative',
  },

  elementImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: 8,
    zIndex: 0,
  },

  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },

  elementTextGroup: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    zIndex: 2,
  },

  subText: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 12,
    letterSpacing: 0,
    fontStyle: 'normal',
    color: 'rgba(255, 255, 255, 1)',
    flexShrink: 1,
    flexWrap: 'wrap',
  },

  headingText: {
    fontFamily: 'Nunito',
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 0,
    color: 'rgba(255, 255, 255, 1)',
    flexShrink: 1,
    flexWrap: 'wrap',
    paddingVertical: 16,
    fontStyle: 'italic',
  },

  searchContainer: {
    flexDirection: 'row',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 10,
    paddingVertical: 8,
    alignItems: 'center',
    marginHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },

  searchInput: {
    flex: 1,
    height: 48,
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

  backgroundImage: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: MOUNTAIN_HEIGHT,
    width: '100%',
    zIndex: 0,
    marginTop: 16,
  },
  contentContainer: {
    paddingBottom: 0,
    zIndex: 1,
  },

  textSearchEmpty: {
    textAlign: 'center',
    marginTop: 20,
  },
});

export default styles;
