import { StyleSheet } from 'react-native';
import { Colors } from '../colors';

const styles = StyleSheet.create({
  grid: {
    width: '90%',
    position: 'relative',
     alignSelf: 'center',
  },

  gridContainer: {
    flexDirection: 'column',
    width: '100%',
    flexWrap: 'wrap',
    marginBottom: 8,
  },

  mainTextGridBlock: {
    paddingBottom: 10,
  },

  mainTextGrid: {
    fontFamily: 'Nunito',
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 0,
    color: Colors.primary,
  },

  mainGrid: {
    flexDirection: 'column',
    borderRadius: 12,
    paddingTop: 16,
    paddingRight: 12,
    paddingBottom: 16,
    paddingLeft: 12,
    marginBottom: 10,
    backgroundColor: Colors.background,
  },

  blockGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
  },

  elementGrid: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom: 8,
    marginHorizontal: 4,
  },

  elementImageView: {
    width: 50,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 19,
    borderWidth: 1,
    borderColor: Colors.primary,
    padding: 10,
    marginBottom: 10,
    borderStyle: 'solid',
  },

  elementImage: {
    width: 36,
    height: 36,
  },

  elementText: {
    fontFamily: 'Nunito',
    fontWeight: '600',
    fontSize: 14,
    letterSpacing: 0,
    color: Colors.text_three,
    textAlign: 'center',
    maxWidth: 78,
  },
});

export default styles;
