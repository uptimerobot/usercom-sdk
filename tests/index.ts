import { Usercom } from '../dist/index';

const test = async () => {
  const usercom = new Usercom({
    subdomain: 'uptimerobot',
    token: '<your-token-here>',
  });

  try {
    const res = await usercom.user.users({ next: null });
    console.log('<<<<<<<<<<<<<<<---------->>>>>>>>>>>>>>>');
    console.log(res);
    console.log('<<<<<<<<<<<<<<<---------->>>>>>>>>>>>>>>');
  } catch (e) {
    console.log('<<<<<<<<<<<<<<<---------->>>>>>>>>>>>>>>');
    console.log(e);
    console.log('<<<<<<<<<<<<<<<---------->>>>>>>>>>>>>>>');
  }
};

test();
