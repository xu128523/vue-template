let apiHost = ''; // ENV参数没有时，使用mock地址

if (process.env.ENV === 'beta') {
    apiHost = 'http://xxx.beta.apitops.com';
}

if (process.env.ENV === 'dev') {
    apiHost = 'http://xxx.dev.apitops.com';
}

if (process.env.ENV === 'integrate') {
    apiHost = 'http://xxx.integrate.apitops.com';
}

if (process.env.ENV === 'release') {
    apiHost = 'http://xxx.apitops.com/';
}

if (process.env.ENV === 'test') {
    apiHost = 'http://xxx.test.apitops.com:8057';
}

if (process.env.ENV === 'ga') {
    apiHost = 'http://xxx.apitops.com';
}

export default {
    LOGIN: `${apiHost}/api/v1/login`,
};
