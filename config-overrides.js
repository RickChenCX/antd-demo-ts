
const { override, fixBabelImports, addLessLoader } = require('customize-cra');
/* api接口环境标识 */
process.env.REACT_APP_APIENV = process.env.API_ENV;
console.log(process.env)

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1DA57A' }, // less变量覆盖
    })
)