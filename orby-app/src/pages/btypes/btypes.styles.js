import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
  },
  headerprincipal: {
    alignItems: 'center',
  },
  logoprincipal: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
  titleprincipal: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D32F2F', 
    marginTop: 10,
  },
  header: {
    backgroundColor: '#D32F2F', // Vermelho
    padding: 10,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 15,
  },
  cell: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  cellText: {
    fontSize: 14,
    color: '#555',
  },
  
});

export default styles;
