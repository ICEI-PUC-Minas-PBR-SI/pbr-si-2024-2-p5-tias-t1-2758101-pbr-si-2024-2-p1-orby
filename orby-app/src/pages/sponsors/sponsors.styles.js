import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  logo: {
    width: 150,
    alignSelf: 'center',
    marginBottom: 20,
    resizeMode: 'contain',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
  },
  sponsorImage: {
    width: 300,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  sponsorTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  sponsorDescription: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
});
