const { Eureka } = require('eureka-js-client');

const eurekaClient = new Eureka({
  instance: {
    app: 'USER-SERVICE',

    // container hostname
    hostName: 'user-service',

    ipAddr: 'user-service',

    statusPageUrl: 'http://user-service:4000/info',

    port: {
      '$': 4000,
      '@enabled': true
    },

    vipAddress: 'USER-SERVICE',

    dataCenterInfo: {
      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
      name: 'MyOwn'
    }
  },

  eureka: {
    host: 'cineverse-eureka',   // ← IMPORTANT
    port: 8761,
    servicePath: '/eureka/apps/',
    maxRetries: 10,          // retry up to 10 times
    requestRetryDelay: 5000 
  }
});

module.exports = eurekaClient;

