export default {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  image: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    backgroundColor: 'grey[50]',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: -1,
  },
  contentWrapper: {
    margin: 'auto',
  },
  logoWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    width: 251,
    height: 48,
    marginBottom: 4,
  },
  content: {
    maxWidth: '552px',
    margin: 'auto',
    padding: '48px',
  },
};
