import { StyleSheet } from 'react-native';

const MOUNTAIN_HEIGHT = 289;

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

  card: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    width: '90%',
    alignSelf: 'center',
    padding: 12,
    marginBottom: 14,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },

  cardImage: {
    width: 303,
    height: 150,
    borderRadius: 12,
  },

  cardHeadingText: {
    fontFamily: 'Nunito',
    fontWeight: '700',
    fontSize: 18,
    letterSpacing: 0,
    paddingVertical: 8,
    textAlign: 'center',
    color: 'rgba(0, 85, 167, 1)',
  },

  cardDescriptionText: {
    fontFamily: 'Nunito',
    fontWeight: '400',
    fontSize: 14,
    letterSpacing: 0,
    textAlign: 'justify',
    writingDirection: 'rtl',
    color: 'rgba(0, 0, 0, 1)',
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
});

export default styles;
