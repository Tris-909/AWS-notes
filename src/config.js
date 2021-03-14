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
      IDENTITY_POOL_ID: "us-east-1:84be75d0-7b27-4b38-8660-19003b36e8f1",
    },
  };
  
  export default config;
  