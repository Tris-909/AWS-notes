const config = {
    s3: {
      REGION: "ap-southeast-2",
      BUCKET: "notes-tritran-serverless-aws",
    },
    apiGateway: {
      REGION: "ap-southeast-2",
      URL: "https://lut5iplyti.execute-api.ap-southeast-2.amazonaws.com/prod/",
    },
    cognito: {
      REGION: "ap-southeast-2",
      USER_POOL_ID: "ap-southeast-2_lfWIUITcp",
      APP_CLIENT_ID: "6v8p1aoa4bro76b0oqj306jbdq",
      IDENTITY_POOL_ID: "ap-southeast-2:e2d123b1-263e-4281-8f9c-8ca299e24441",
    },
  };
  
  export default config;
  