module.exports = {
    devServer: {
        overlay: false,
        port: process.env.VUE_APP_PORT || 3000,
        proxy: 'http://localhost:8080',
    },
};
