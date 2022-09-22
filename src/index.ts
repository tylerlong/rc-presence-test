import RingCentral from '@rc-ex/core';
import PubNubExtension from '@rc-ex/pubnub';

const rc = new RingCentral({
  server: process.env.RINGCENTRAL_SERVER_URL,
  clientId: process.env.RINGCENTRAL_CLIENT_ID,
  clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
});

const main = async () => {
  await rc.authorize({jwt: process.env.RINGCENTRAL_JWT_TOKEN!});
  const extInfo = await rc.restapi().account().extension().get();
  console.log(JSON.stringify(extInfo, null, 2));
};

main();
