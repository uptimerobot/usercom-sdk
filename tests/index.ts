import { Usercom } from '../dist/index';

const test = async () => {
  const usercom = new Usercom({
    subdomain: 'uptimerobot',
    token: '<your-token-here>',
  });

  try {
    const res = await usercom.user.search({ next: null, params: { is_pro__startswith: 'True' } });
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
