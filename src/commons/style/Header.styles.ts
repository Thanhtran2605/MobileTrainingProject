import { StyleSheet } from 'react-native';
import { Colors } from '../colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 16,
    marginBottom: 10,
    backgroundColor: Colors.background,
  },

    marqueeContainer: {
    overflow: 'hidden',
    width: '100%',
    height: 30,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },

  scrollTexts: {
    fontSize: 14,
    color: '#000',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },

  headerContainer: {
    width: '90%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },

  elementHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    marginRight: 12,
  },

  avatarImage: {
    borderRadius: 26,
    width: 42,
    height: 42,
    resizeMode: 'cover',
  },

  textContainer: {
    flex: 1,
    flexDirection: 'column',
  },

  textHeader: {
    fontFamily: 'Nunito',
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 18,
    letterSpacing: 0,
    textAlign: 'center',
    color: Colors.primary,
  },

  iconHeader: {
    width: 22,
    height: 22,
    marginRight: 10,
  },

  scrollBlock: {
    // paddingVertical: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  scrollText: {
    width: '100%',
    fontFamily: 'Nunito',
    paddingRight: 32,
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 13,
    letterSpacing: 0,
    color: Colors.text_one,
  },
});

export default styles;
