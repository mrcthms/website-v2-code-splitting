export default async function printMe() {
  const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');
  console.log('I get called from print.js!');
  return _.join(['This', 'is', 'asynchronous', 'code'], ' 🦑 ');
}
