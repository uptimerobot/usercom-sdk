import { Usercom } from '../dist/index';

const test = async () => {
  const usercom = new Usercom({
    subdomain: 'uptimerobot',
    token: 'BHn2580q7U99WOQZe3lxQWdpIQEHKc3jCBWGlYAdq5PgHq5j5r5kJazBc7JwqmUD',
  });

  try {
    const res = await usercom.event.create({ userId: 1, name: 'test event', data: { payload: 'test' } });
    console.log('<<<<<<<<<<<<<<<---------->>>>>>>>>>>>>>>');
    console.log(res.data);
    console.log('<<<<<<<<<<<<<<<---------->>>>>>>>>>>>>>>');
  } catch (e) {
    console.log('<<<<<<<<<<<<<<<---------->>>>>>>>>>>>>>>');
    console.log(e);
    console.log('<<<<<<<<<<<<<<<---------->>>>>>>>>>>>>>>');
  }
};

test();
