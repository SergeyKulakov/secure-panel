const {
  REACT_APP_AWS_REGION,
  REACT_APP_AWS_USER_POOL_ID,
  REACT_APP_AWS_USER_POOL_WEB_CLIENT_ID,
  REACT_APP_AWS_DOMAIN,
} = process.env;

const awsConfig = {
  Auth: {
    region: REACT_APP_AWS_REGION,
    userPoolId: REACT_APP_AWS_USER_POOL_ID,
    userPoolWebClientId: REACT_APP_AWS_USER_POOL_WEB_CLIENT_ID,
  },
  API: {
    endpoints: [
      {
        name: 'MyAPIGatewayAPI',
        endpoint: REACT_APP_AWS_DOMAIN,
      },
    ],
  },
};

export default awsConfig;
