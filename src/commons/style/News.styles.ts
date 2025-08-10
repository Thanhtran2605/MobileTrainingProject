import { StyleSheet } from 'react-native';
import { Colors } from '../colors';

const styles = StyleSheet.create({
  newsContainer: {
    flexDirection: 'column',
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 12,
    borderRadius: 12,
    backgroundColor: Colors.background,
    marginBottom: 10,
  },

  newsHeader: {
    flexDirection: 'row',
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  newsHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
     flexShrink: 1,
    maxWidth: '100%',
  },

  imageFlag: {
    width: 16,
    height: 16,
  },

  textHeaderLeft: {
    fontFamily: 'Nunito',
    fontWeight: '600',
    fontSize: 16,
    letterSpacing: 0,
    textAlign: 'center',
    color: Colors.secondary,
   
  },

  textHeaderRight: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 12,
    letterSpacing: 0,
    color: Colors.text_two,
  },

  textContent: {
    fontFamily: 'Nunito',
    fontWeight: '400',
    fontSize: 14,
    letterSpacing: 0,
  },

  subTextContent: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 12,
    letterSpacing: 0,
    color: Colors.primary,
  },
});

export default styles;
